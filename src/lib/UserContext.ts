import { MagicUserMetadata } from "magic-sdk";
import { createContext } from "react";

// User Context input type
type UserContentType = {
  user: MagicUserMetadata | null;
  setUser: (u: MagicUserMetadata | null) => void;
  loading: boolean;
  setLoading: (l: boolean) => void;
};

// Context for persisting user data
const UserContext = createContext<UserContentType>({
  user: null,
  setUser: (u: MagicUserMetadata | null) => {},
  loading: false,
  setLoading: (l: boolean) => {},
});

export default UserContext;
