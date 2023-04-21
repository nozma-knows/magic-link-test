import { MagicUserMetadata } from "magic-sdk";
import { createContext } from "react";

type UserContentType = {
  user: MagicUserMetadata | null;
  setUser: (u: MagicUserMetadata | null) => void;
  loading: boolean;
  setLoading: (l: boolean) => void;
};

const UserContext = createContext<UserContentType>({
  user: null,
  setUser: (u: MagicUserMetadata | null) => {},
  loading: false,
  setLoading: (l: boolean) => {},
});

export default UserContext;
