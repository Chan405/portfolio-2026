"use client";

import { useEffect, useMemo, useState } from "react";
import { container, section } from "@/lib/layout";
import { navItems, siteConfig } from "@/lib/site";

export function Navbar() {
  // Pick one (comment out what you dislike).
  const VARIANT: NavbarVariant = "centered";
  // const VARIANT: NavbarVariant = "split";
  // const VARIANT: NavbarVariant = "floating";
  // const VARIANT: NavbarVariant = "sidebar";
  // const VARIANT: NavbarVariant = "capsule";

  const variants: Record<NavbarVariant, React.ReactNode> = {
    centered: <NavbarCentered />,
    split: <NavbarSplit />,
    floating: <NavbarFloating />,
    sidebar: <NavbarSidebar />,
    capsule: <NavbarCapsule />,
  };

  return variants[VARIANT];
}

type NavbarVariant = "centered" | "split" | "floating" | "sidebar" | "capsule";

function useActiveSection() {
  const ids = useMemo(() => navItems.map((x) => String(x.id)), []);
  const [activeId, setActiveId] = useState<string>(ids[0] ?? "");

  useEffect(() => {
    const applyFromHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash && ids.includes(hash)) setActiveId(hash);
    };

    applyFromHash();
    window.addEventListener("hashchange", applyFromHash);
    return () => window.removeEventListener("hashchange", applyFromHash);
  }, [ids]);

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];
    if (!elements.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0),
          )[0];
        const id = visible?.target?.id;
        if (id) setActiveId(id);
      },
      {
        root: null,
        threshold: [0.35, 0.5, 0.65],
        rootMargin: "-20% 0px -60% 0px",
      },
    );

    for (const el of elements) obs.observe(el);
    return () => obs.disconnect();
  }, [ids]);

  return activeId;
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      aria-hidden
    >
      {open ? (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18 18 6M6 6l12 12"
        />
      ) : (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      )}
    </svg>
  );
}

function DesktopNav({
  activeId,
  variant,
}: {
  activeId: string;
  variant: NavbarVariant;
}) {
  return (
    <ul className="hidden items-center gap-1 md:flex">
      {navItems.map(({ id, label }) => {
        const active = id === activeId;

        const base =
          "relative rounded-xl px-3 py-1.5 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/50";

        const glow =
          "after:pointer-events-none after:absolute after:inset-0 after:rounded-xl after:opacity-0 after:transition-opacity after:duration-200 after:content-[''] hover:after:opacity-100 after:bg-gradient-to-r after:from-sky-400/15 after:via-violet-400/15 after:to-sky-400/15";

        const underline =
          "before:pointer-events-none before:absolute before:left-3 before:right-3 before:bottom-1.5 before:h-px before:origin-left before:scale-x-0 before:bg-gradient-to-r before:from-sky-400 before:via-violet-400 before:to-sky-400 before:transition-transform before:duration-200 hover:before:scale-x-100";

        const activePill =
          "text-foreground bg-white/60 backdrop-blur-md shadow-[0_1px_0_rgba(255,255,255,0.6)] ring-1 ring-gray-200/80";
        const inactivePill =
          "text-muted hover:text-foreground hover:-translate-y-[1px]";

        const activeThin = "text-foreground";
        const inactiveThin = "text-muted hover:text-foreground";

        const usePill = variant === "floating" || variant === "capsule";

        return (
          <li key={id}>
            <a
              href={`#${id}`}
              aria-current={active ? "page" : undefined}
              className={[
                base,
                glow,
                underline,
                usePill
                  ? active
                    ? activePill
                    : inactivePill
                  : active
                    ? activeThin
                    : inactiveThin,
              ].join(" ")}
            >
              <span className="relative z-10">{label}</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}

function MobileNav({
  open,
  setOpen,
  activeId,
  shellClassName,
}: {
  open: boolean;
  setOpen: (v: boolean) => void;
  activeId: string;
  shellClassName: string;
}) {
  return (
    <div
      id="mobile-nav"
      className={[
        "md:hidden",
        "border-t border-black/[0.06]",
        "bg-white/65 backdrop-blur-xl supports-[backdrop-filter]:bg-white/55",
        "transition-[transform,opacity] duration-200",
        open ? "block" : "hidden",
        shellClassName,
      ].join(" ")}
    >
      <ul className={`flex flex-col gap-1 py-2 ${section.padX}`}>
        {navItems.map(({ id, label }) => {
          const active = id === activeId;
          return (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-current={active ? "page" : undefined}
                className={[
                  "group relative block rounded-2xl px-3 py-3 text-sm font-medium transition-all duration-200",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/50",
                  active
                    ? "text-foreground bg-white/70 ring-1 ring-gray-200/80"
                    : "text-muted hover:text-foreground hover:bg-white/50",
                ].join(" ")}
                onClick={() => setOpen(false)}
              >
                <span className="relative z-10">{label}</span>
                <span
                  className={[
                    "pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-200",
                    "bg-gradient-to-r from-sky-400/10 via-violet-400/10 to-sky-400/10",
                    "group-hover:opacity-100",
                    active ? "opacity-100" : "",
                  ].join(" ")}
                  aria-hidden
                />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function NavbarShell({
  headerClassName,
  navClassName,
  left,
  center,
  right,
  open,
  setOpen,
  activeId,
  variant,
}: {
  headerClassName: string;
  navClassName: string;
  left: React.ReactNode;
  center?: React.ReactNode;
  right?: React.ReactNode;
  open: boolean;
  setOpen: (v: boolean) => void;
  activeId: string;
  variant: NavbarVariant;
}) {
  return (
    <header className={headerClassName}>
      <nav className={navClassName} aria-label="Primary">
        <div className="flex min-w-0 items-center gap-3">{left}</div>
        {center ? <div className="min-w-0">{center}</div> : null}
        <div className="flex min-w-0 items-center justify-end gap-3">
          {right}
          <button
            type="button"
            className={[
              "md:hidden",
              "inline-flex h-9 w-9 items-center justify-center rounded-2xl",
              "ring-1 ring-gray-200/80",
              "bg-white/60 backdrop-blur-md supports-[backdrop-filter]:bg-white/50",
              "text-muted transition-all duration-200",
              "hover:text-foreground hover:-translate-y-[1px] hover:ring-gray-300/90",
              "active:translate-y-0 active:scale-[0.98]",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/50",
            ].join(" ")}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(!open)}
          >
            <span className="sr-only">{open ? "Close" : "Menu"}</span>
            <MenuIcon open={open} />
          </button>
        </div>
      </nav>

      <MobileNav
        open={open}
        setOpen={setOpen}
        activeId={activeId}
        shellClassName={variant === "sidebar" ? "border-t-0" : ""}
      />
    </header>
  );
}

function useMobileMenuState() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return { open, setOpen };
}

function Brand({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <a
      href="#top"
      onClick={onNavigate}
      className={[
        "group relative inline-flex items-center gap-2",
        "text-[0.95rem] font-semibold tracking-tight text-foreground",
        "transition-all duration-200 hover:-translate-y-[1px]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/50 rounded-lg px-1 py-0 -ml-1",
      ].join(" ")}
    >
      {/* Cap height so navbar stays compact; width grows so wordmark stays readable */}
      <span className="relative z-10 inline-flex h-9 max-h-9 items-center md:h-10 md:max-h-10">
        <img
          src="/brand/Chan1.png"
          alt={siteConfig.name}
          width={240}
          height={40}
          className="h-full max-h-full w-auto max-w-[min(52vw,240px)] object-contain mix-blend-multiply md:max-w-[280px]"
          draggable={false}
        />
      </span>
      {/* <span
        className={[
          "pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-200",
          "bg-gradient-to-r from-sky-400/15 via-violet-400/15 to-sky-400/15",
          "group-hover:opacity-100",
        ].join(" ")}
        aria-hidden
      /> */}
    </a>
  );
}

export function NavbarCentered() {
  const activeId = useActiveSection();
  const { open, setOpen } = useMobileMenuState();

  return (
    <NavbarShell
      variant="centered"
      activeId={activeId}
      open={open}
      setOpen={setOpen}
      headerClassName={[
        "sticky top-0 z-50",
        "border-b border-black/[0.06]",
        "bg-white/65 backdrop-blur-xl supports-[backdrop-filter]:bg-white/55",
      ].join(" ")}
      navClassName={`${container} grid grid-cols-[1fr_auto_1fr] items-center gap-4 py-2 ${section.padX}`}
      left={<Brand onNavigate={() => setOpen(false)} />}
      center={<DesktopNav activeId={activeId} variant="centered" />}
      right={
        <div className="hidden md:flex justify-end">
          <a
            href="#contact"
            className={[
              "relative inline-flex items-center rounded-2xl px-4 py-2 text-sm font-semibold",
              "text-white shadow-sm",
              "bg-gradient-to-r from-sky-500 to-violet-500",
              "transition-all duration-200 hover:-translate-y-[1px] hover:shadow-md",
              "active:translate-y-0 active:scale-[0.99]",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/60",
            ].join(" ")}
          >
            Contact
          </a>
        </div>
      }
    />
  );
}

export function NavbarSplit() {
  const activeId = useActiveSection();
  const { open, setOpen } = useMobileMenuState();

  return (
    <NavbarShell
      variant="split"
      activeId={activeId}
      open={open}
      setOpen={setOpen}
      headerClassName={[
        "sticky top-0 z-50",
        "border-b border-black/[0.06]",
        "bg-white/70 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60",
      ].join(" ")}
      navClassName={`${container} flex items-center justify-between gap-6 py-2 ${section.padX}`}
      left={<Brand onNavigate={() => setOpen(false)} />}
      right={
        <>
          <DesktopNav activeId={activeId} variant="split" />
          <a
            href="#projects"
            className={[
              "hidden md:inline-flex items-center rounded-2xl px-4 py-2 text-sm font-semibold",
              "text-foreground",
              "ring-1 ring-gray-200/80 bg-white/50 backdrop-blur-md supports-[backdrop-filter]:bg-white/45",
              "transition-all duration-200 hover:-translate-y-[1px] hover:ring-gray-300/90",
              "active:translate-y-0 active:scale-[0.99]",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/50",
            ].join(" ")}
          >
            View work
            <span
              className="ml-2 h-px w-5 bg-gradient-to-r from-sky-400 via-violet-400 to-sky-400"
              aria-hidden
            />
          </a>
        </>
      }
    />
  );
}

export function NavbarFloating() {
  const activeId = useActiveSection();
  const { open, setOpen } = useMobileMenuState();

  return (
    <header className="sticky top-0 z-50">
      <div className={`${container} ${section.padX} pt-2`}>
        <NavbarShell
          variant="floating"
          activeId={activeId}
          open={open}
          setOpen={setOpen}
          headerClassName={[
            "rounded-3xl",
            "ring-1 ring-gray-200/50",
            "bg-white/55 backdrop-blur-xl supports-[backdrop-filter]:bg-white/45",
            "shadow-[0_10px_30px_rgba(2,6,23,0.06)]",
            "relative overflow-hidden",
          ].join(" ")}
          navClassName={[
            "relative",
            `${container} flex items-center justify-between gap-6 py-2 ${section.padX}`,
          ].join(" ")}
          left={<Brand onNavigate={() => setOpen(false)} />}
          right={<DesktopNav activeId={activeId} variant="floating" />}
        />
        <div
          className="pointer-events-none -mt-[88px] h-[88px] rounded-3xl bg-gradient-to-r from-sky-400/10 via-violet-400/10 to-sky-400/10 blur-2xl"
          aria-hidden
        />
      </div>
    </header>
  );
}

export function NavbarSidebar() {
  const activeId = useActiveSection();
  const { open, setOpen } = useMobileMenuState();

  return (
    <header className="sticky top-0 z-50 border-b border-black/[0.06] bg-white/65 backdrop-blur-xl supports-[backdrop-filter]:bg-white/55">
      <nav
        className={`${container} flex items-center justify-between gap-6 py-2 ${section.padX}`}
        aria-label="Primary"
      >
        <Brand onNavigate={() => setOpen(false)} />

        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            className={[
              "relative inline-flex items-center rounded-2xl px-4 py-2 text-sm font-semibold",
              "text-white shadow-sm",
              "bg-gradient-to-r from-sky-500 to-violet-500",
              "transition-all duration-200 hover:-translate-y-[1px] hover:shadow-md",
              "active:translate-y-0 active:scale-[0.99]",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/60",
            ].join(" ")}
          >
            Hire me
          </a>
        </div>

        <button
          type="button"
          className={[
            "md:hidden",
            "inline-flex h-9 w-9 items-center justify-center rounded-2xl",
            "ring-1 ring-gray-200/80",
            "bg-white/60 backdrop-blur-md supports-[backdrop-filter]:bg-white/50",
            "text-muted transition-all duration-200",
            "hover:text-foreground hover:-translate-y-[1px] hover:ring-gray-300/90",
            "active:translate-y-0 active:scale-[0.98]",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/50",
          ].join(" ")}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          <span className="sr-only">{open ? "Close" : "Menu"}</span>
          <MenuIcon open={open} />
        </button>
      </nav>

      {/* Mobile: full screen sidebar */}
      <div
        className={[
          "md:hidden",
          "fixed inset-0 z-50",
          open ? "pointer-events-auto" : "pointer-events-none",
        ].join(" ")}
        aria-hidden={!open}
      >
        <div
          className={[
            "absolute inset-0 bg-slate-950/30 transition-opacity duration-200",
            open ? "opacity-100" : "opacity-0",
          ].join(" ")}
          onClick={() => setOpen(false)}
        />
        <aside
          id="mobile-nav"
          className={[
            "absolute right-0 top-0 h-full w-[min(88vw,360px)]",
            "bg-white/70 backdrop-blur-2xl supports-[backdrop-filter]:bg-white/60",
            "ring-1 ring-gray-200/50 shadow-[0_10px_40px_rgba(2,6,23,0.18)]",
            "transition-transform duration-200",
            open ? "translate-x-0" : "translate-x-full",
          ].join(" ")}
        >
          <div className="flex items-center justify-between px-5 py-4 border-b border-black/[0.06]">
            <span className="text-sm font-semibold tracking-tight text-foreground">
              Navigation
            </span>
            <button
              type="button"
              className="inline-flex h-9 w-9 items-center justify-center rounded-2xl ring-1 ring-gray-200/80 bg-white/50 text-muted transition-all duration-200 hover:text-foreground active:scale-[0.98]"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            >
              <MenuIcon open />
            </button>
          </div>

          <ul className="flex flex-col gap-1 p-4">
            {navItems.map(({ id, label }) => {
              const active = id === activeId;
              return (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    aria-current={active ? "page" : undefined}
                    className={[
                      "group relative block rounded-2xl px-4 py-3 text-sm font-semibold transition-all duration-200",
                      active
                        ? "text-foreground bg-white/70 ring-1 ring-gray-200/80"
                        : "text-muted hover:text-foreground hover:bg-white/45",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/50",
                    ].join(" ")}
                    onClick={() => setOpen(false)}
                  >
                    <span className="relative z-10">{label}</span>
                    <span
                      className={[
                        "pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-200",
                        "bg-gradient-to-r from-sky-400/10 via-violet-400/10 to-sky-400/10",
                        "group-hover:opacity-100",
                        active ? "opacity-100" : "",
                      ].join(" ")}
                      aria-hidden
                    />
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="p-4 border-t border-black/[0.06]">
            <a
              href="#contact"
              className={[
                "inline-flex w-full items-center justify-center rounded-2xl px-4 py-3 text-sm font-semibold",
                "text-white shadow-sm",
                "bg-gradient-to-r from-sky-500 to-violet-500",
                "transition-all duration-200 hover:shadow-md active:scale-[0.99]",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/60",
              ].join(" ")}
              onClick={() => setOpen(false)}
            >
              Contact
            </a>
          </div>
        </aside>
      </div>
    </header>
  );
}

export function NavbarCapsule() {
  const activeId = useActiveSection();
  const { open, setOpen } = useMobileMenuState();

  return (
    <header className="sticky top-0 z-50">
      <div className={`${container} ${section.padX} py-2`}>
        <div className="flex items-center justify-center">
          <div
            className={[
              "relative w-full max-w-4xl",
              "rounded-full",
              "bg-white/55 backdrop-blur-xl supports-[backdrop-filter]:bg-white/45",
              "ring-1 ring-gray-200/50",
              "shadow-[0_10px_30px_rgba(2,6,23,0.06)]",
              "overflow-hidden",
            ].join(" ")}
          >
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-r from-sky-400/10 via-violet-400/10 to-sky-400/10"
              aria-hidden
            />

            <nav
              className="relative flex items-center justify-between gap-4 px-4 py-2"
              aria-label="Primary"
            >
              <Brand onNavigate={() => setOpen(false)} />

              <DesktopNav activeId={activeId} variant="capsule" />

              <button
                type="button"
                className={[
                  "md:hidden",
                  "inline-flex h-9 w-9 items-center justify-center rounded-full",
                  "ring-1 ring-gray-200/80 bg-white/60 backdrop-blur-md supports-[backdrop-filter]:bg-white/50",
                  "text-muted transition-all duration-200",
                  "hover:text-foreground hover:-translate-y-[1px] hover:ring-gray-300/90",
                  "active:translate-y-0 active:scale-[0.98]",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/50",
                ].join(" ")}
                aria-expanded={open}
                aria-controls="mobile-nav"
                aria-label={open ? "Close menu" : "Open menu"}
                onClick={() => setOpen(!open)}
              >
                <span className="sr-only">{open ? "Close" : "Menu"}</span>
                <MenuIcon open={open} />
              </button>
            </nav>

            <MobileNav
              open={open}
              setOpen={setOpen}
              activeId={activeId}
              shellClassName="rounded-b-3xl"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
