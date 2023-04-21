import { motion } from "framer-motion";

interface PageProps {
  title: string;
  children: JSX.Element;
}

export default function Page({ title, children }: PageProps) {
  return (
    <div className="flex flex-col gap-8 w-screen h-screen justify-center items-center p-4">
      <motion.div
        className="flex flex-col justify-center items-center bg-[#64B6AC] gap-8 w-[28rem] sm:w-[34rem] md:w-[38rem] lg:w-[42rem] p-8 rounded-lg"
        initial={{ opacity: 0, x: 0, y: 20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{
          duration: 1,
        }}
      >
        <div className="text-4xl font-bold font-lilita text-[#173F5F]">
          {title}
        </div>
        {children}
      </motion.div>
    </div>
  );
}
