import { Reveal } from "@/components/motion/Reveal";
import { container, gapTight, sectionClassMuted } from "@/lib/layout";

type Emphasis = "startup" | "ai" | "default";

const projects: {
  name: string;
  description: string;
  tags: readonly string[];
  emphasis: Emphasis;
  wide?: boolean;
  badge: string;
}[] = [
  {
    name: "Queue Management System",
    description:
      "Startup-grade operations: realtime queues, QR flows, and LINE integration — built for reliability when the line never stops.",
    tags: ["Realtime", "QR", "LINE API", "WebSockets", "Shipped"],
    emphasis: "startup",
    wide: true,
    badge: "Startup gold",
  },
  {
    name: "Atenxion",
    description:
      "An AI platform to design, deploy, and iterate on intelligent agents — infrastructure that makes sophisticated automation feel approachable.",
    tags: ["AI platform", "LLMs", "TypeScript", "Orchestration"],
    emphasis: "ai",
    badge: "AI flagship",
  },
  {
    name: "School Management System",
    description:
      "Admin-friendly tools for schedules, attendance, and staff workflows — fewer spreadsheets, clearer accountability.",
    tags: ["Full-stack", "Dashboard", "RBAC"],
    emphasis: "default",
    badge: "",
  },
  {
    name: "Pharma System",
    description:
      "Pharmacy operations with tight inventory and UX that keeps the counter moving — accuracy without the clutter.",
    tags: ["React", "API design", "Domain UX"],
    emphasis: "default",
    badge: "",
  },
];

const cardMotion =
  "transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:hover:translate-y-0";

function badgeClass(emphasis: Emphasis) {
  switch (emphasis) {
    case "startup":
      return "border-gray-200 bg-section text-foreground";
    case "ai":
      return "border-gray-200 bg-white text-accent-purple";
    default:
      return "";
  }
}

export function Projects() {
  return (
    <section
      id="projects"
      className={sectionClassMuted}
      aria-labelledby="projects-heading"
    >
      <div className={container}>
        <Reveal>
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-muted">
            Projects
          </p>
          <h2
            id="projects-heading"
            className="max-w-3xl text-[1.65rem] font-semibold tracking-tight text-foreground sm:text-3xl sm:leading-tight"
          >
            From AI infrastructure to live operations
          </h2>
          <p className="mt-4 max-w-2xl text-pretty text-base font-normal leading-[1.75] text-muted sm:text-[1.0625rem]">
            Two builds stand out: a{" "}
            <span className="font-medium text-foreground">
              production-line queue platform
            </span>{" "}
            (QR + LINE + realtime) and{" "}
            <span className="font-medium text-foreground">Atenxion</span>, an
            AI-native product surface. The rest show breadth across domains.
          </p>
        </Reveal>

        <ul className={`mt-14 grid ${gapTight} sm:grid-cols-2`}>
          {projects.map(
            ({ name, description, tags, emphasis, wide, badge }, index) => (
              <li
                key={name}
                className={`h-full ${wide ? "sm:col-span-2" : ""}`}
              >
                <Reveal className="h-full" delay={0.05 + index * 0.05}>
                  {emphasis === "default" ? (
                    <div
                      className={`group/list flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8 ${cardMotion} hover:border-gray-300 hover:shadow-sm`}
                    >
                      <CardBody
                        name={name}
                        description={description}
                        tags={tags}
                        badge={badge}
                        emphasis={emphasis}
                      />
                    </div>
                  ) : (
                    <div
                      className={`group/list rounded-2xl bg-gradient-to-br from-accent-purple/45 to-accent-blue/38 p-px shadow-sm ${cardMotion} hover:shadow-sm`}
                    >
                      <div className="flex h-full min-h-full flex-col rounded-[0.9375rem] bg-white p-6 sm:p-8">
                        <CardBody
                          name={name}
                          description={description}
                          tags={tags}
                          badge={badge}
                          emphasis={emphasis}
                        />
                      </div>
                    </div>
                  )}
                </Reveal>
              </li>
            )
          )}
        </ul>
      </div>
    </section>
  );
}

function CardBody({
  name,
  description,
  tags,
  badge,
  emphasis,
}: {
  name: string;
  description: string;
  tags: readonly string[];
  badge: string;
  emphasis: Emphasis;
}) {
  return (
    <>
      <div className="flex flex-wrap items-start justify-between gap-2">
        <h3 className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">
          {name}
        </h3>
        {badge ? (
          <span
            className={`rounded-lg border px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wider ${badgeClass(emphasis)}`}
          >
            {badge}
          </span>
        ) : null}
      </div>
      <p className="mt-4 flex-1 text-pretty text-sm font-normal leading-[1.75] text-muted sm:text-[0.95rem]">
        {description}
      </p>
      <ul className="mt-6 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <li key={tag}>
            <span className="inline-block rounded-lg border border-gray-200 bg-section px-2.5 py-1 text-[0.7rem] font-medium text-muted transition-colors duration-200 group-hover/list:border-gray-300 group-hover/list:text-foreground">
              {tag}
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}
