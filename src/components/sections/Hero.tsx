"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { container, section } from "@/lib/layout";
import { siteConfig } from "@/lib/site";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const containerV = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.085, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.48, ease },
  },
};

export function Hero() {
  const reduce = useReducedMotion();

  const c = reduce
    ? { hidden: {}, visible: { transition: { staggerChildren: 0, delayChildren: 0 } } }
    : containerV;
  const i = reduce
    ? {
        hidden: { opacity: 1, y: 0 },
        visible: { opacity: 1, y: 0, transition: { duration: 0 } },
      }
    : item;

  const { src, alt } = siteConfig.heroIllustration;

  return (
    <section
      className={`relative overflow-hidden border-b border-gray-200 bg-white ${section.padX} pb-20 pt-8 sm:pb-24 sm:pt-10 lg:pt-12`}
      aria-label="Introduction"
    >
      <motion.div
        className={`${container} grid items-center gap-10 lg:grid-cols-2 lg:gap-12`}
        variants={c}
        initial="hidden"
        animate="visible"
      >
        <div className="relative z-10 max-w-xl lg:max-w-none">
          <motion.p
            variants={i}
            className="mb-5 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-muted"
          >
            <span
              className="h-px w-8 shrink-0 bg-gradient-to-r from-accent-purple to-accent-blue"
              aria-hidden
            />
            Tech × Business × Startup
          </motion.p>
          <motion.h1
            variants={i}
            className="text-balance text-[2rem] font-semibold tracking-tight text-foreground sm:text-[2.75rem] sm:leading-[1.12] lg:text-[3rem]"
          >
            Shipping real products through{" "}
            <span className="text-gradient-brand">code, AI, and ops</span>
          </motion.h1>
          <motion.p
            variants={i}
            className="mt-7 max-w-xl text-pretty text-base font-normal leading-[1.75] text-muted sm:text-lg"
          >
            Full-stack developer with{" "}
            <span className="font-medium text-foreground">production experience</span>{" "}
            across APIs, realtime systems, and customer-facing apps. Grounded in
            how products earn trust, revenue, and scale.
          </motion.p>
          <motion.div
            variants={i}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="inline-flex h-12 items-center justify-center rounded-2xl px-8 text-sm font-semibold text-white shadow-sm transition-[transform,opacity,box-shadow] duration-200 hover:opacity-95 active:scale-[0.99] motion-reduce:transform-none"
              style={{ background: "var(--gradient-brand)" }}
            >
              View flagship work
            </a>
            <a
              href="#contact"
              className="inline-flex h-12 items-center justify-center rounded-2xl border border-gray-200 bg-white px-8 text-sm font-semibold text-foreground shadow-sm transition-[transform,colors] duration-200 hover:border-gray-300 hover:bg-section active:scale-[0.99] motion-reduce:transform-none"
            >
              Contact
            </a>
          </motion.div>
        </div>

        <motion.div
          variants={i}
          className="relative w-full max-w-lg justify-self-center lg:max-w-none lg:justify-self-stretch"
        >
          <div
            className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] opacity-90 blur-3xl motion-reduce:opacity-60 sm:-inset-8"
            style={{
              background:
                "linear-gradient(135deg, rgba(124,58,237,0.22), rgba(59,130,246,0.18))",
            }}
            aria-hidden
          />
          <div className="relative aspect-[5/4] min-h-[320px] w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm sm:min-h-[360px] lg:min-h-[400px] xl:min-h-[440px]">
            <Image
              src={src}
              alt={alt}
              fill
              priority
              className="object-contain object-center p-2 sm:p-3 lg:p-4"
              sizes="(max-width: 1023px) 92vw, (max-width: 1280px) 45vw, 520px"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
