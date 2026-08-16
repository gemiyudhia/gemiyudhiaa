"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import Navbar from "./Navbar";

type ClientTransitionProps = {
  children: ReactNode;
};

const ClientTransition = ({ children }: ClientTransitionProps) => {
  const pathname = usePathname();

  return (
    <>
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default ClientTransition;
