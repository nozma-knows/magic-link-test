import { useContext } from "react";
import Router, { useRouter } from "next/router";
import { magic } from "../lib/magic";
import UserContext from "@/lib/UserContext";

const Callback = () => {
  const router = useRouter();
  const { setUser } = useContext(UserContext);

  // `loginWithCredential()` returns a didToken for the user logging in
  const finishEmailRedirectLogin = () => {
    if (router.query.magic_credential)
      magic?.auth
        .loginWithCredential(router.query.magic_credential as string)
        .then((didToken) => authenticateWithServer(didToken));
  };

  finishEmailRedirectLogin();

  // Send token to server to validate
  const authenticateWithServer = async (didToken: string | null) => {
    let res = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({
        didToken,
      }),
    });

    if (res.status === 200) {
      // Set the UserContext to the now logged in user
      let userMetadata = await magic?.user.getMetadata();
      await setUser(userMetadata || null);
      Router.push("/profile");
    }
  };

  return <div>Loading...</div>;
};

export default Callback;
