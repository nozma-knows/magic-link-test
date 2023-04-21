import { useContext, useEffect } from "react";
import UserContext from "@/lib/UserContext";
import Button from "@/components/ui/buttons/Button";
import Router, { useRouter } from "next/router";
import { magic } from "@/lib/magic";

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
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        user?.issuer && (
          <>
            <div className="label">Email</div>
            <div className="profile-info">{user.email}</div>

            <div className="label">User Id</div>
            <div className="profile-info">{user.issuer}</div>
            <Button label="Logout" onClick={logout} />
          </>
        )
      )}
    </>
  );
};

export default Profile;
