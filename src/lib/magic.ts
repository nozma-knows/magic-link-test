import { Magic } from "magic-sdk";
import { OAuthExtension } from "@magic-ext/oauth";

export const magic =
  typeof window === "undefined"
    ? null
    : new Magic(process.env.NEXT_PUBLIC_MAGIC_PUBLISHABLE_KEY as string, {
        extensions: [new OAuthExtension()],
      });
