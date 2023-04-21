import UserContext from "@/lib/UserContext";
import { magic } from "@/lib/magic";
import "@/styles/globals.css";
import { MagicUserMetadata } from "magic-sdk";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [user, setUser] = useState<MagicUserMetadata | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    magic?.user.isLoggedIn().then((isLoggedIn) => {
      if (isLoggedIn) {
        magic?.user.getMetadata().then((userData) => setUser(userData));
      }
    });
  }, [router]);

  return (
    <UserContext.Provider value={{ user, setUser, loading, setLoading }}>
      <Component {...pageProps} />
    </UserContext.Provider>
  );
}
