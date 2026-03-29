"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Seconds */
  delay?: number;
  /** `mount` = load animation; `scroll` = when entering viewport */
  when?: "scroll" | "mount";
};

export function Reveal({
  children,
  className,
  delay = 0,
  when = "scroll",
}: RevealProps) {
  const reduce = useReducedMotion();
  const hidden = reduce ? false : { opacity: 0, y: 20 };
  const transition = {
    duration: reduce ? 0 : 0.52,
    delay: reduce ? 0 : delay,
    ease,
  };

  if (when === "mount") {
    return (
      <motion.div
        className={className}
        initial={hidden}
        animate={{ opacity: 1, y: 0 }}
        transition={transition}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={className}
      initial={hidden}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2, margin: "0px 0px -10% 0px" }}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}
