"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import Navbar from "./Navbar";

type ClientTransitionProps = {
  children: ReactNode;
};

const ClientTransition = ({ children }: ClientTransitionProps) => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="sticky top-0 z-50"
      >
        <Navbar />
      </motion.div>
      {children}
    </AnimatePresence>
  );
};

export default ClientTransition;
