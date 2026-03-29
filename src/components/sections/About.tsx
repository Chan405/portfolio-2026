import type { ReactNode } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { container, section } from "@/lib/layout";

const items: { label: string; value: ReactNode; icon: ReactNode }[] = [
  {
    label: "Location",
    value: (
      <p className="font-semibold leading-snug text-foreground">Yangon, Myanmar</p>
    ),
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        aria-hidden
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 10.5c0 7.125-7.5 11.25-7.5 11.25S4.5 17.625 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
        />
      </svg>
    ),
  },
  {
    label: "Education",
    value: (
      <div className="space-y-2">
        <p className="font-semibold leading-snug text-foreground">
          Computer Engineering (CEIT), Yangon Technological University
        </p>
        <p className="font-semibold leading-snug text-foreground">
         Computer Science, University of the People (In Progress)
        </p>
      </div>
    ),
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        aria-hidden
      >
        <path d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.902 59.902 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.716 50.716 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443a55.381 55.381 0 0 1 7.875 2.745V15" />
      </svg>
    ),
  },
  {
    label: "Interests",
    value: (
      <p className="font-semibold leading-snug text-foreground">
        Technology, Business Strategy, Startups
      </p>
    ),
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        aria-hidden
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3v-3m0 0-3 3m3-3h-3m-3 3h3" />
      </svg>
    ),
  },
];

export function About() {
  return (
    <section
      id="about"
      className={`${section.scrollMargin} ${section.border} ${section.padX} bg-section py-20 sm:py-12`}
      aria-labelledby="about-heading"
    >
      <Reveal
        className={`${container} grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-20 xl:gap-24`}
      >
        <div className="max-w-xl lg:max-w-none lg:pr-4">
          <p className="mb-4 text-[0.8125rem] font-medium uppercase tracking-[0.18em] text-slate-500">
            About
          </p>
          <h2
            id="about-heading"
            className="text-[1.65rem] font-semibold tracking-tight text-foreground sm:text-3xl"
          >
            Building at the intersection of tech and business
          </h2>
          <div className="mt-8 max-w-xl space-y-6 text-pretty text-base font-normal leading-[1.8] text-slate-700 sm:text-lg sm:leading-[1.75]">
            <p>
              I&apos;m a full-stack developer based in Yangon, Myanmar, with a
              background in Computer Engineering (CEIT, Yangon Technological
              University) and ongoing studies in Computer Science at the
              University of the People.
            </p>
            <p>
              I build end-to-end digital products, from intuitive interfaces to
              scalable backend systems. Beyond coding, I focus on how
              technology drives business impact—improving user experience,
              optimizing operations, and supporting smarter decisions.
            </p>
          </div>
          <p className="mt-8 max-w-xl border-l-[3px] border-accent-purple pl-6 text-base font-medium leading-[1.75] text-slate-700">
            Engineering with a business mindset—building not just what works,
            but what matters.
          </p>
        </div>

        <ul className="flex flex-col gap-10 sm:gap-12 lg:pl-2">
          {items.map(({ label, value, icon }) => (
            <li key={label} className="flex gap-5">
              <span
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gray-200 bg-white text-muted shadow-sm"
                aria-hidden
              >
                {icon}
              </span>
              <div className="min-w-0 pt-0.5">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  {label}
                </p>
                <div className="mt-2 text-base leading-snug sm:text-[1.0625rem]">
                  {value}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
