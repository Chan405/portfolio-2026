import type { ReactNode } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { container, section } from "@/lib/layout";

type SkillVariant = "frontend" | "backend" | "tools" | "soft";

const groups: {
  title: string;
  variant: SkillVariant;
  icon: ReactNode;
  items: readonly string[];
}[] = [
  {
    title: "Frontend",
    variant: "frontend",
    icon: (
      <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
      </svg>
    ),
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Responsive UI"],
  },
  {
    title: "Backend",
    variant: "backend",
    icon: (
      <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3V6.75a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3v4.5a3 3 0 0 1-3 3m-16.5 0a3 3 0 0 0 3 3h13.5a3 3 0 0 0 3-3v-4.5" />
      </svg>
    ),
    items: ["Node.js", "REST APIs", "Real-time / WebSockets", "Auth & sessions", "PostgreSQL"],
  },
  {
    title: "Tools",
    variant: "tools",
    icon: (
      <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655-5.653a2.548 2.548 0 0 0-3.586 0L2.5 8.5" />
      </svg>
    ),
    items: ["Git", "Docker", "Figma", "VS Code", "CI basics"],
  },
  {
    title: "Soft Skills",
    variant: "soft",
    icon: (
      <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a23.119 23.119 0 0 1-1.5 3.372m-7.657-1.6c.063-.604.106-1.214.128-1.828.025-.604.025-1.214 0-1.828-.022-.614-.065-1.224-.128-1.828a49.128 49.128 0 0 0-1.406-6.854 2.115 2.115 0 0 0-.825-.243m0 0C15.276 1.297 13.62 1 12 1c-1.62 0-3.276.297-4.733.858M5.25 8.511a49.135 49.135 0 0 0-1.406 6.854c-.063.604-.106 1.214-.128 1.828-.025.604-.025 1.214 0 1.828.022.614.065 1.224.128 1.828" />
      </svg>
    ),
    items: ["Product thinking", "Clear communication", "Stakeholder alignment", "Documentation"],
  },
];

const categoryShell: Record<
  SkillVariant,
  { header: string; bar: string; icon: string; cardRing: string }
> = {
  frontend: {
    header: "text-sky-800",
    bar: "bg-sky-400",
    icon: "text-sky-600",
    cardRing: "ring-sky-200/40",
  },
  backend: {
    header: "text-emerald-800",
    bar: "bg-emerald-400",
    icon: "text-emerald-600",
    cardRing: "ring-emerald-200/40",
  },
  tools: {
    header: "text-violet-800",
    bar: "bg-violet-400",
    icon: "text-violet-600",
    cardRing: "ring-violet-200/40",
  },
  soft: {
    header: "text-amber-900",
    bar: "bg-amber-400",
    icon: "text-amber-700",
    cardRing: "ring-amber-200/40",
  },
};

const pillByVariant: Record<SkillVariant, string> = {
  frontend:
    "border-sky-200/80 bg-sky-50 text-sky-950 hover:border-sky-300 hover:bg-sky-100/90 hover:shadow-md",
  backend:
    "border-emerald-200/80 bg-emerald-50 text-emerald-950 hover:border-emerald-300 hover:bg-emerald-100/90 hover:shadow-md",
  tools:
    "border-violet-200/80 bg-violet-50 text-violet-950 hover:border-violet-300 hover:bg-violet-100/90 hover:shadow-md",
  soft:
    "border-amber-200/80 bg-amber-50 text-amber-950 hover:border-amber-300 hover:bg-amber-100/90 hover:shadow-md",
};

function SkillPill({ label, variant }: { label: string; variant: SkillVariant }) {
  return (
    <span
      className={`inline-flex select-none rounded-full border px-3.5 py-1.5 text-xs font-medium shadow-sm transition-all duration-200 ease-out hover:-translate-y-0.5 hover:scale-[1.02] motion-reduce:transform-none motion-reduce:hover:transform-none active:scale-[0.99] sm:px-4 sm:py-2 sm:text-sm ${pillByVariant[variant]}`}
    >
      {label}
    </span>
  );
}

export function Skills() {
  return (
    <section
      id="skills"
      className={`${section.scrollMargin} ${section.border} ${section.padX} bg-white py-28 shadow-[0_1px_0_0_rgba(0,0,0,0.04)] sm:py-12`}
      aria-labelledby="skills-heading"
    >
      <Reveal className={container}>
        <p className="mb-4 text-[0.8125rem] font-medium uppercase tracking-[0.18em] text-slate-500">
          Skills
        </p>
        <h2
          id="skills-heading"
          className="text-[1.65rem] font-semibold tracking-tight text-foreground sm:text-3xl"
        >
          How I work
        </h2>
        <p className="mt-8 max-w-2xl text-pretty text-base font-normal leading-[1.8] text-slate-700 sm:text-lg sm:leading-[1.75]">
          What I use to ship — product-facing UI, reliable backends, toolchain,
          and collaboration when stakes are real.
        </p>

        <div className="mt-16 grid grid-cols-1 gap-10 sm:gap-11 md:grid-cols-2 lg:mt-[4.5rem] lg:gap-12">
          {groups.map(({ title, variant, icon, items }) => {
            const shell = categoryShell[variant];
            return (
              <div
                key={title}
                className={`rounded-2xl border border-black/[0.06] bg-white p-7 shadow-[0_2px_18px_rgba(0,0,0,0.045)] ring-1 ring-inset ring-black/[0.04] sm:p-8 ${shell.cardRing}`}
              >
                <div className="flex items-center gap-3">
                  <span className={`flex h-8 w-8 items-center justify-center rounded-xl bg-[#f5f5f7] shadow-sm ring-1 ring-black/[0.05] ${shell.icon}`} aria-hidden>
                    {icon}
                  </span>
                  <h3 className={`text-[0.9375rem] font-semibold tracking-tight sm:text-base ${shell.header}`}>
                    {title}
                  </h3>
                </div>
                <div className={`mt-4 h-0.5 w-10 rounded-full ${shell.bar}`} aria-hidden />
                <ul className="mt-8 flex flex-wrap gap-3 sm:gap-3.5">
                  {items.map((item) => (
                    <li key={item}>
                      <SkillPill label={item} variant={variant} />
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}
