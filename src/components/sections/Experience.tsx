import { Reveal } from "@/components/motion/Reveal";
import { container, sectionClass } from "@/lib/layout";

const roles = [
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
] as const;

export function Experience() {
  return (
    <section
      id="experience"
      className={sectionClass}
      aria-labelledby="experience-heading"
    >
      <Reveal className={container}>
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-muted">
          Experience
        </p>
        <h2
          id="experience-heading"
          className="text-[1.65rem] font-semibold tracking-tight text-foreground sm:text-3xl"
        >
          Real full-stack mileage
        </h2>
        <p className="mt-4 max-w-2xl text-pretty text-base font-normal leading-[1.75] text-muted sm:text-[1.0625rem]">
          Hands-on roles shipping production software — from interfaces people
          touch daily to services and integrations behind them.
        </p>

        <ol className="relative mt-14 max-w-3xl">
          <span
            className="absolute bottom-3 left-[0.6rem] top-3 w-px bg-gray-200 sm:left-3"
            aria-hidden
          />
          {roles.map((role) => {
            const { company, title, duration, current } = role;
            const detail =
              "detail" in role && typeof role.detail === "string"
                ? role.detail
                : undefined;

            return (
              <li
                key={company}
                className="relative pb-10 pl-10 last:pb-0 sm:pl-14"
              >
                <span
                  className={`absolute left-0 top-2 flex h-5 w-5 items-center justify-center rounded-full border bg-white shadow-sm sm:left-1.5 ${
                    current
                      ? "border-accent-purple/40"
                      : "border-gray-200"
                  }`}
                  aria-hidden
                >
                  <span
                    className={`h-2 w-2 rounded-full ${current ? "bg-gradient-to-br from-accent-purple to-accent-blue" : "bg-gray-300"}`}
                  />
                </span>
                <article
                  className="group rounded-2xl border border-gray-200 bg-white px-5 py-5 shadow-sm transition-[border-color,box-shadow,transform] duration-200 hover:border-gray-300 hover:shadow-sm sm:px-6 sm:py-6"
                >
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                    <div>
                      <h3 className="text-lg font-semibold tracking-tight text-foreground">
                        {company}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-muted">
                        {title}
                      </p>
                    </div>
                    <p className="shrink-0 text-xs font-semibold uppercase tracking-wider text-muted">
                      {duration}
                    </p>
                  </div>
                  {detail ? (
                    <p className="mt-3 text-xs font-normal leading-relaxed text-muted">
                      {detail}
                    </p>
                  ) : current ? (
                    <p className="mt-3 text-xs text-muted">Current role</p>
                  ) : null}
                </article>
              </li>
            );
          })}
        </ol>
      </Reveal>
    </section>
  );
}
