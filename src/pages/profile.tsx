import { useContext, useEffect } from "react";
import UserContext from "@/lib/UserContext";
import Button from "@/components/ui/buttons/Button";
import Router, { useRouter } from "next/router";
import { magic } from "@/lib/magic";
import { motion } from "framer-motion";
import Page from "@/components/ui/pages/Page";

const title = `Profile`;
const subtitle = `Congrats you're logged in!`;

const Profile = () => {
  const { user, setUser, loading } = useContext(UserContext);
  const router = useRouter();

  // Redirect to /login if the user is logged out
  useEffect(() => {
    !user?.issuer && Router.push("/login");
  }, [user]);

  const logout = () => {
    magic?.user.logout().then(() => {
      setUser(null);
      router.push("/login");
    });
  };

  return (
    <Page title={title}>
      <div>
        {loading ? (
          <div>Loading...</div>
        ) : (
          user?.issuer && (
            <div className="flex flex-col w-full">
              <div className="text-2xl self-center font-bold">{subtitle}</div>
              <div className="flex flex-col bg-[#173F5F] text-white mt-8 p-4 rounded-lg gap-4">
                <div className="flex flex-col sm:flex-row sm:items-start sm:gap-4">
                  <div className="text-xl semi-bold">Email</div>
                  <div className="text-lg">{user.email}</div>
                </div>
                <div className="flex flex-col w-full sm:flex-row sm:items-start sm:gap-4">
                  <div className="text-xl semi-bold">Issuer</div>
                  <div className="break-all text-lg">{user.issuer}</div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 "></div>
              <div className="self-center p-8 overflow-">
                <Button label="Logout" onClick={logout} />
              </div>
            </div>
          )
        )}
      </div>
    </Page>
  );
};

export default Profile;
