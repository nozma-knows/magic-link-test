import { Magic } from "@magic-sdk/admin";
import { NextApiRequest, NextApiResponse } from "next";

// Initiating Magic instance for server-side methods
const magic = new Magic(process.env.MAGIC_SECRET_KEY);

export default async function login(req: NextApiRequest, res: NextApiResponse) {
  try {
    console.log("req.body: ", req.body);
    const { didToken } = JSON.parse(req.body);
    console.log("didToken in login: ", didToken);
    await magic.token.validate(didToken || "");
    res.status(200).json({ authenticated: true });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}
