import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { container, section } from "@/lib/layout";

type Emphasis = "startup" | "ai" | "default";

const projects: {
  name: string;
  description: string;
  tags: readonly string[];
  emphasis: Emphasis;
  badge: string;
  image?: string;
}[] = [
  {
    name: "Queue Management System",
    description:
      "Contributed to mobile app development and early-stage product ideation for a realtime queue platform with QR flows and LINE integration — focused on reliability for high-traffic operations.",
    tags: ["Mobile", "Realtime", "QR", "LINE API"],
    emphasis: "startup",
    badge: "Startup",
    image: "/brand/queue.png",
  },
  {
    name: "Atenxion",
    description:
      "An AI platform to design, deploy, and iterate on intelligent agents — infrastructure that makes sophisticated automation feel approachable.",
    tags: ["AI platform", "LLMs", "TypeScript", "Orchestration"],
    emphasis: "ai",
    badge: "AI flagship",
    image: "/brand/atenxion.jpg",
  },
  {
    name: "School Management System",
    description:
      "Frontend for admin workflows — schedules, attendance, and staff views — I shipped the UI and client-side experience on top of existing services.",
    tags: ["Frontend", "Dashboard", "RBAC UI"],
    emphasis: "default",
    badge: "",
    image: "/brand/school.jpg",
  },
  {
    name: "Pharma System",
    description:
      "Frontend-only build: counter-focused pharmacy UI with inventory screens and flows that stay fast and accurate — integrated with the team’s APIs.",
    tags: ["Frontend", "React", "Domain UX"],
    emphasis: "default",
    badge: "",
  },
];

function badgeClass(emphasis: Emphasis) {
  switch (emphasis) {
    case "startup":
      return "border-slate-200/90 bg-slate-50 text-slate-600";
    case "ai":
      return "border-violet-200/70 bg-violet-50/90 text-violet-800";
    default:
      return "";
  }
}

export function Projects() {
  return (
    <section
      id="projects"
      className={`${section.scrollMargin} ${section.border} ${section.padX} bg-section py-12 sm:py-16 lg:py-20`}
      aria-labelledby="projects-heading"
    >
      <div className={container}>
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-[0.8125rem] font-medium uppercase tracking-[0.18em] text-slate-500">
              Projects
            </p>
            <h2
              id="projects-heading"
              className="text-[1.65rem] font-semibold tracking-tight text-slate-900 sm:text-3xl sm:leading-snug"
            >
              From AI infrastructure to live operations
            </h2>
            <div className="mx-auto mt-5 h-px w-10 bg-slate-300" aria-hidden />
            <p className="mt-8 text-pretty text-base font-normal leading-[1.8] text-slate-600 sm:text-lg sm:leading-[1.75]">
              Two builds stand out: a{" "}
              <span className="font-semibold text-slate-900">
                production-line queue platform
              </span>{" "}
              (QR + LINE + realtime) and{" "}
              <span className="font-semibold text-slate-900">Atenxion</span>, an
              AI-native product surface. The rest show breadth across domains.
            </p>
          </div>
        </Reveal>

        <ul className="mt-14 grid grid-cols-1 gap-8 sm:mt-16 sm:gap-10 lg:mt-20 lg:grid-cols-2 lg:gap-12">
          {projects.map(
            ({ name, description, tags, emphasis, badge, image }, index) => {
              const illustrationLeft = index % 2 === 0; // Row 1: left, Row 2: right, ...
              const thumbSrc =
                image ??
                (illustrationLeft ? "/brand/queue.png" : "/brand/atenxion.png");
              return (
                <li key={name}>
                  <Reveal delay={0.05 + index * 0.06}>
                    <div
                      className={`group/row relative rounded-2xl border border-black/[0.06] bg-white p-6 shadow-[0_2px_16px_rgba(0,0,0,0.045)] transition-[transform,background-color,border-color,box-shadow] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[1px] hover:border-black/[0.1] hover:shadow-[0_4px_24px_rgba(0,0,0,0.06)] motion-reduce:transition-none sm:p-7`}
                    >
                      <div className="flex flex-col gap-8 xl:flex-row xl:items-center xl:gap-12">
                        <div
                          className={
                            illustrationLeft
                              ? "order-1 flex w-full justify-center xl:order-1 xl:flex-1 xl:justify-start"
                              : "order-1 flex w-full justify-center xl:order-2 xl:flex-1 xl:justify-start"
                          }
                        >
                          <ProjectThumb name={name} src={thumbSrc} />
                        </div>

                        <div
                          className={
                            illustrationLeft
                              ? "order-2 w-full xl:order-2 xl:flex-1"
                              : "order-2 w-full xl:order-1 xl:flex-1"
                          }
                        >
                          <div className="mx-auto w-full sm:mx-0">
                            {badge ? (
                              <span
                                className={`inline-flex rounded-md border px-2 py-0.5 text-[0.625rem] font-semibold uppercase tracking-wider ${badgeClass(
                                  emphasis,
                                )}`}
                              >
                                {badge}
                              </span>
                            ) : null}

                            <h3 className="mt-4 text-pretty text-[1.35rem] font-semibold tracking-tight text-slate-900 sm:text-[1.5rem]">
                              {name}
                            </h3>

                            <p className="mt-4 text-pretty text-base font-normal leading-[1.8] text-slate-600 sm:text-[1.0625rem] sm:leading-[1.75]">
                              {description}
                            </p>

                            <ul className="mt-7 flex flex-wrap gap-2">
                              {tags.map((tag) => (
                                <li key={tag}>
                                  <span className="inline-flex rounded-md border border-black/[0.08] bg-[#f5f5f7] px-2.5 py-1 text-[0.6875rem] font-medium text-muted transition-colors duration-200 group-hover/row:border-black/[0.1] group-hover/row:bg-white group-hover/row:text-foreground">
                                    {tag}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                </li>
              );
            },
          )}
        </ul>
      </div>
    </section>
  );
}

function ProjectThumb({ name, src }: { name: string; src?: string }) {
  return (
    <div className="relative aspect-[5/4] w-full max-w-[520px] overflow-hidden rounded-2xl bg-gradient-to-br from-slate-50 to-white ring-1 ring-slate-200/70 xl:aspect-square xl:max-w-none">
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_20%,rgba(124,58,237,0.08),transparent_55%),radial-gradient(ellipse_at_80%_85%,rgba(59,130,246,0.06),transparent_52%)]"
        aria-hidden
      />
      <Image
        src={src || "/brand/queue.png"}
        alt={`${name} illustration`}
        fill
        className="relative h-full w-full object-cover"
        sizes="(max-width: 1023px) 92vw, 520px"
        quality={92}
      />
    </div>
  );
}
