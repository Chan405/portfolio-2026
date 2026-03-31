"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { Reveal } from "@/components/motion/Reveal";
import { container, sectionClass } from "@/lib/layout";

type Role = {
  company: string;
  title: string;
  duration: string;
  current: boolean;
  detail?: string;
};

const roles: readonly Role[] = [
  {
    company: "Brillar",
    title: "Full-stack Developer",
    duration: "2024 – Present",
    current: true,
    detail: "Production APIs, apps, and delivery — not tutorials, real users.",
  },
  {
    company: "Pedagogy",
    title: "Frontend Developer",
    duration: "2023 – 2024",
    current: false,
  },
];

const currentRole = roles.find((role) => role.current);

// Lightweight grain via SVG turbulence (kept very low opacity).
const noiseSvgDataUri =
  "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='160'%20height='160'%3E%3Cfilter%20id='n'%3E%3CfeTurbulence%20type='fractalNoise'%20baseFrequency='.8'%20numOctaves='3'%20stitchTiles='stitch'/%3E%3C/filter%3E%3Crect%20width='160'%20height='160'%20filter='url(%23n)'%20opacity='.35'/%3E%3C/svg%3E";

export function Experience() {
  const reduce = useReducedMotion();
  const rightRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: rightRef,
    offset: ["start end", "end start"],
  });

  // Very subtle scroll parallax for the decorative accent (respects reduced motion).
  const floatY = useTransform(scrollYProgress, [0, 1], [0, -14]);
  const floatStyle = reduce ? undefined : { y: floatY };

  return (
    <section
      id="experience"
      className={`${sectionClass} relative isolate overflow-hidden bg-gradient-to-b from-gray-50/70 via-white to-white py-24 sm:py-12`}
      aria-labelledby="experience-heading"
    >
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/70 via-white/60 to-white/90" />

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_40%_at_15%_0%,rgba(124,58,237,0.06),transparent_60%),radial-gradient(ellipse_55%_35%_at_100%_25%,rgba(59,130,246,0.05),transparent_60%)]" />

        <div
          className="absolute inset-0 opacity-[0.035] mix-blend-overlay"
          style={{
            backgroundImage: `url("${noiseSvgDataUri}")`,
            backgroundSize: "160px 160px",
            backgroundRepeat: "repeat",
          }}
        />

        <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-gradient-to-br from-accent-purple/[0.08] to-accent-blue/[0.05] blur-3xl" />
        <div className="absolute -right-28 bottom-0 h-80 w-80 rounded-full bg-gradient-to-br from-accent-purple/[0.05] to-accent-blue/[0.035] blur-3xl" />

        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-200/50 to-transparent" />
      </div>

      <div className={`${container} relative`}>
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="max-w-xl space-y-4">
              <p className="pt-1 text-xs font-medium uppercase tracking-[0.18em] text-muted">
                Experience
              </p>
              <h2
                id="experience-heading"
                className="text-[1.65rem] font-semibold tracking-tight text-foreground sm:text-3xl"
              >
                Real full-stack mileage
              </h2>
              <p className="text-pretty text-base font-normal leading-[1.75] text-muted sm:text-[1.0625rem]">
                Hands-on roles shipping production software — from interfaces
                people touch daily to services and integrations behind them.
              </p>

              <div
                className="h-px w-14 bg-gradient-to-r from-accent-purple/40 to-accent-blue/20"
                aria-hidden
              />

              {currentRole ? (
                <div className="mt-8 rounded-3xl border border-gray-200/70 bg-white/60 p-6 shadow-[0_18px_60px_-30px_rgba(0,0,0,0.18)] backdrop-blur-xl transition-transform duration-300 hover:-translate-y-0.5 hover:border-gray-300/80 hover:shadow-[0_26px_80px_-36px_rgba(0,0,0,0.22)]">
                  <div className="relative">
                    <div className="pointer-events-none absolute -inset-0.5 rounded-3xl bg-gradient-to-br from-accent-purple/[0.10] to-accent-blue/[0.06] opacity-70 blur-2xl" />
                    <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-b from-white/60 to-transparent opacity-70" />

                    <div className="relative flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                          Current
                        </p>
                        <h3 className="mt-2 text-[1.15rem] font-semibold tracking-tight text-foreground">
                          {currentRole.title}
                        </h3>
                        <p className="mt-1 text-sm font-medium text-muted">
                          {currentRole.company}
                        </p>
                      </div>

                      <span
                        className="mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-accent-purple/25 bg-gradient-to-br from-accent-purple/10 to-accent-blue/10 text-accent-purple shadow-sm"
                        aria-hidden
                      >
                        <span className="h-2 w-2 rounded-full bg-gradient-to-br from-accent-purple to-accent-blue" />
                      </span>
                    </div>

                    {currentRole.detail ? (
                      <p className="relative mt-4 text-sm leading-relaxed text-muted">
                        {currentRole.detail}
                      </p>
                    ) : null}

                    <div
                      className="relative mt-5 h-px w-10 bg-gradient-to-r from-accent-purple/40 to-accent-blue/30"
                      aria-hidden
                    />
                    <p className="relative mt-4 text-xs font-semibold uppercase tracking-wider text-muted">
                      {currentRole.duration}
                    </p>
                  </div>
                </div>
              ) : null}
            </div>
          </Reveal>

          <Reveal className="relative">
            <div ref={rightRef}>
              <motion.div
                aria-hidden
                className="pointer-events-none absolute -right-10 -top-10 h-52 w-52 rounded-full bg-gradient-to-br from-accent-purple/[0.11] to-accent-blue/[0.08] blur-3xl"
                style={floatStyle}
              />

              <div className="rounded-3xl border border-gray-200/70 bg-white/58 p-6 shadow-[0_18px_60px_-30px_rgba(0,0,0,0.16)] backdrop-blur-xl transition-shadow duration-300 hover:shadow-[0_26px_80px_-36px_rgba(0,0,0,0.22)]">
                <div className="relative">
                  <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-white/70 via-white/30 to-transparent opacity-60" />
                  <div className="pointer-events-none absolute -inset-0.5 rounded-[calc(theme(borderRadius.3xl)+2px)] bg-gradient-to-br from-accent-purple/[0.08] to-accent-blue/[0.05] opacity-40 blur-2xl" />

                  <div className="relative flex items-baseline justify-between gap-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                      Timeline
                    </p>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                      {roles.length} roles
                    </p>
                  </div>
                </div>

                <ol className="relative mt-8 space-y-8">
                  <span
                    className="absolute left-[0.6rem] top-3 bottom-3 w-px bg-gray-200/70 sm:left-3"
                    aria-hidden
                  />

                  {roles.map((role, index) => (
                    <li key={role.company} className="relative pl-10 sm:pl-14">
                      <span
                        className={`absolute left-0 top-2 flex h-5 w-5 items-center justify-center rounded-full border bg-white shadow-sm sm:left-1.5 ${
                          role.current
                            ? "border-accent-purple/40"
                            : "border-gray-200"
                        }`}
                        aria-hidden
                      >
                        <span
                          className={`h-2 w-2 rounded-full ${
                            role.current
                              ? "bg-gradient-to-br from-accent-purple to-accent-blue"
                              : "bg-gray-300"
                          }`}
                        />
                      </span>

                      <Reveal delay={0.06 + index * 0.08}>
                        <article
                          className={`group relative overflow-hidden rounded-2xl border border-gray-200/80 bg-white/85 px-5 py-5 shadow-sm backdrop-blur-sm transition-[transform,border-color,box-shadow] duration-200 will-change-transform hover:-translate-y-0.5 hover:border-gray-300 hover:shadow-md sm:px-6 sm:py-6 ${
                            role.current ? "ring-1 ring-accent-purple/20" : ""
                          }`}
                        >
                          <div
                            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                            aria-hidden
                          >
                            <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/[0.10] to-accent-blue/[0.07]" />
                            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-purple/40 to-transparent" />
                          </div>
                          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-5">
                            <div
                              aria-hidden
                              className={`relative flex aspect-square w-14 items-center justify-center overflow-hidden rounded-2xl border border-gray-200/70 bg-white/65 shadow-sm ${role.current ? "ring-1 ring-accent-purple/20" : ""}`}
                            >
                              <div
                                className={`absolute inset-0 opacity-90 ${role.current ? "bg-[radial-gradient(circle_at_25%_20%,rgba(124,58,237,0.22),transparent_55%),radial-gradient(circle_at_75%_80%,rgba(59,130,246,0.16),transparent_55%)]" : "bg-[radial-gradient(circle_at_25%_20%,rgba(148,163,184,0.20),transparent_55%),radial-gradient(circle_at_75%_80%,rgba(226,232,240,0.18),transparent_55%)]"}`}
                              />
                              <div className="pointer-events-none absolute inset-0 opacity-50">
                                <svg
                                  viewBox="0 0 100 100"
                                  className="h-full w-full"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  aria-hidden
                                >
                                  <path
                                    d="M18 64C31 48 42 42 56 46C70 50 78 40 86 26"
                                    stroke={
                                      role.current
                                        ? "rgba(124,58,237,0.55)"
                                        : "rgba(148,163,184,0.35)"
                                    }
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                  />
                                  <path
                                    d="M14 76C34 60 50 58 63 62C76 66 86 58 90 50"
                                    stroke={
                                      role.current
                                        ? "rgba(59,130,246,0.45)"
                                        : "rgba(226,232,240,0.55)"
                                    }
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                  />
                                  <circle
                                    cx="72"
                                    cy="28"
                                    r="5"
                                    fill={
                                      role.current
                                        ? "rgba(124,58,237,0.35)"
                                        : "rgba(148,163,184,0.25)"
                                    }
                                  />
                                </svg>
                              </div>

                              <span
                                className={`relative z-10 text-sm font-semibold tracking-tight ${role.current ? "text-accent-purple" : "text-muted"}`}
                              >
                                {role.company.slice(0, 1).toUpperCase()}
                              </span>
                            </div>

                            <div className="min-w-0 flex-1">
                              <div className="flex items-start justify-between gap-4">
                                <div>
                                  <h3 className="text-[1.0625rem] font-semibold tracking-tight text-foreground sm:text-[1.125rem]">
                                    {role.title}
                                  </h3>
                                  <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1">
                                    <p className="text-sm font-medium text-muted">
                                      {role.company}
                                    </p>
                                    <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                                      {role.duration}
                                    </p>
                                  </div>
                                </div>

                                {role.current ? (
                                  <span className="inline-flex h-8 items-center justify-center rounded-full border border-accent-purple/30 bg-gradient-to-br from-accent-purple/10 to-accent-blue/10 px-3 text-xs font-semibold uppercase tracking-wider text-accent-purple">
                                    Current
                                  </span>
                                ) : null}
                              </div>
                            </div>
                          </div>

                          {role.detail ? (
                            <p className="mt-4 text-sm leading-relaxed text-muted">
                              {role.detail}
                            </p>
                          ) : null}
                        </article>
                      </Reveal>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
