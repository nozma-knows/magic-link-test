import { useEffect, useContext } from "react";
import Router, { useRouter } from "next/router";
import UserContext from "@/lib/UserContext";
import LoginForm from "@/components/forms/login-form";
import { FieldValues } from "react-hook-form";
import { magic } from "@/lib/magic";

export default function Login() {
  const router = useRouter();
  const { user, setUser, loading, setLoading } = useContext(UserContext);

  // Redirect to /profile if the user is logged in
  useEffect(() => {
    user?.issuer && Router.push("/profile");
  }, [user]);

  const onSubmit = async (data: FieldValues) => {
    setLoading(true);
    try {
      const { email } = data;
      // Trigger Magic link to be sent to user
      let didToken = await magic?.auth.loginWithMagicLink({
        email,
        // redirectURI: new URL("/callback", window.location.origin).href, // optional redirect back to your app after magic link is clicked
      });
      // Validate didToken with server
      const res = await fetch("/api/login", {
        method: "POST",
        body: JSON.stringify({
          didToken,
        }),
      });

      if (res.status === 200) {
        // Set the UserContext to the now logged in user
        let userMetadata = await magic?.user.getMetadata();
        await setUser(userMetadata || null);
        setLoading(false);
        router.push("/profile");
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <div className="flex w-full h-screen justify-center items-center">
      <LoginForm loading={loading} onSubmit={onSubmit} />
    </div>
  );
}
