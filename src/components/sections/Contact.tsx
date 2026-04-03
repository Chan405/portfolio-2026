import { Reveal } from "@/components/motion/Reveal";
import { sectionClassMuted } from "@/lib/layout";
import { siteConfig } from "@/lib/site";

const { email, linkedinUrl } = siteConfig.contact;

const links = [
  {
    label: "Email",
    value: email,
    href: `mailto:${email}`,
    external: false,
    icon: (
      <svg
        className="h-4 w-4 shrink-0 opacity-60"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        aria-hidden
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
        />
      </svg>
    ),
  },
  // {
  //   label: "Phone",
  //   value: phone,
  //   href: `tel:${phoneTel}`,
  //   external: false,
  //   icon: (
  //     <svg
  //       className="h-4 w-4 shrink-0 opacity-60"
  //       fill="none"
  //       viewBox="0 0 24 24"
  //       strokeWidth={1.5}
  //       stroke="currentColor"
  //       aria-hidden
  //     >
  //       <path
  //         strokeLinecap="round"
  //         strokeLinejoin="round"
  //         d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
  //       />
  //     </svg>
  //   ),
  // },
  {
    label: "LinkedIn",
    value: "Connect on LinkedIn",
    href: linkedinUrl,
    external: true,
    icon: (
      <svg
        className="h-4 w-4 shrink-0 opacity-60"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden
      >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
] as const;

export function Contact() {
  return (
    <section
      id="contact"
      className={`${sectionClassMuted} relative overflow-hidden sm:py-12`}
      aria-labelledby="contact-heading"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.07),transparent_58%),radial-gradient(ellipse_at_bottom,rgba(59,130,199,0.055),transparent_52%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-violet-200/12 blur-3xl"
      />

      <Reveal className="relative z-10 mx-auto w-full max-w-xl text-center">
        <p className="mb-3 text-[0.8125rem] font-medium uppercase tracking-[0.18em] text-muted">
          Contact
        </p>
        <h2
          id="contact-heading"
          className="text-[1.65rem] font-semibold tracking-tight text-foreground sm:text-3xl sm:leading-snug"
        >
          Let&apos;s talk
        </h2>
        <p className="mx-auto mt-6 max-w-md text-pretty text-base font-normal leading-[1.8] text-muted sm:mt-7 sm:text-[1.0625rem] sm:leading-[1.75]">
          Open to collaborations, product discussions, or senior full-stack /
          product-engineering roles. I usually reply within a day or two.
        </p>

        <div className="mx-auto mt-10 w-full max-w-sm rounded-2xl border border-black/[0.06] bg-white px-3 py-3 shadow-[0_4px_28px_rgba(0,0,0,0.06)] sm:mt-12 sm:max-w-md sm:px-4 sm:py-4">
          <ul className="flex flex-col gap-2 text-left sm:gap-2.5">
            {links.map(({ label, value, href, icon, external }) => (
              <li key={label}>
                <a
                  href={href}
                  {...(external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="group flex items-center gap-3 rounded-xl border border-black/[0.06] bg-white px-3.5 py-3 shadow-[0_2px_12px_rgba(0,0,0,0.045)] transition-[border-color,background-color,transform,box-shadow] duration-200 hover:-translate-y-px hover:border-black/[0.1] hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] active:scale-[0.99] motion-reduce:active:scale-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/35 sm:gap-3.5 sm:rounded-2xl sm:px-4"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-black/[0.06] bg-section text-muted transition-colors group-hover:border-black/[0.1] group-hover:bg-white group-hover:text-foreground sm:rounded-xl">
                    {icon}
                  </span>
                  <span className="min-w-0 flex-1 text-left">
                    <span className="block text-[0.625rem] font-semibold uppercase tracking-[0.14em] text-muted">
                      {label}
                    </span>
                    <span className="mt-1 block truncate text-[0.9375rem] font-medium leading-snug tracking-tight text-foreground sm:text-base">
                      {value}
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
