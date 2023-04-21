import Router from "next/router";
import { motion } from "framer-motion";
import Button from "@/components/ui/buttons/Button";
import { useState } from "react";
import Page from "@/components/ui/pages/Page";

const title = `Magic Link Test App`;
const subtitle = `This is an application for testing out Magic Link, passwordless authentication.`;

export default function Home() {
  const [loading, setLoading] = useState(false);
  return (
    <Page title={title}>
      <div className="flex flex-col gap-8">
        <div className="text-xl font-medium">{subtitle}</div>
        <div className="flex w-full justify-center">
          <Button
            label="Try it out!"
            onClick={() => {
              setLoading(true);
              Router.push("/login");
              setLoading(false);
            }}
            loading={loading}
          />
        </div>
      </div>
    </Page>
  );
}
