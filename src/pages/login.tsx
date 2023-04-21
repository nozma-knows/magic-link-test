import { useEffect, useContext } from "react";
import Router, { useRouter } from "next/router";
import UserContext from "@/lib/UserContext";
import LoginForm from "@/components/forms/login-form";
import { FieldValues } from "react-hook-form";
import { motion } from "framer-motion";
import { magic } from "@/lib/magic";
import Page from "@/components/ui/pages/Page";

const title = `Passwordless Login`;

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
    <div className="flex flex-col gap-8 w-screen h-screen justify-center items-center p-4">
      {/* <motion.div
        className="flex flex-col justify-center items-center bg-[#64B6AC] gap-8 w-[28rem] sm:w-[34rem] md:w-[38rem] lg:w-[42rem] p-8 rounded-lg"
        initial={{ opacity: 0, x: 0, y: 20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{
          duration: 1,
        }}
      >
        <div className="text-4xl font-bold text-[#173F5F]">{title}</div>
        <LoginForm loading={loading} onSubmit={onSubmit} />
      </motion.div> */}
      <Page title={title}>
        <LoginForm loading={loading} onSubmit={onSubmit} />
      </Page>
    </div>
  );
}
