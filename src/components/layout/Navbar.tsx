"use client";

import { useEffect, useState } from "react";
import { container, section } from "@/lib/layout";
import { navItems, siteConfig } from "@/lib/site";

export function Navbar() {
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

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur-md supports-[backdrop-filter]:bg-white/80">
      <nav
        className={`${container} flex items-center justify-between gap-6 py-3.5 ${section.padX}`}
        aria-label="Primary"
      >
        <a
          href="#top"
          className="text-[0.95rem] font-semibold tracking-tight text-foreground transition-colors duration-200 hover:text-accent-purple"
          onClick={() => setOpen(false)}
        >
          {siteConfig.name}
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className="rounded-lg px-3 py-2 text-sm font-medium text-muted transition-colors duration-200 hover:text-foreground"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 text-muted transition-colors duration-200 hover:border-gray-300 hover:bg-section hover:text-foreground md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? "Close" : "Menu"}</span>
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
        </button>
      </nav>

      <div
        id="mobile-nav"
        className={`border-t border-gray-200 bg-white/95 backdrop-blur-md md:hidden ${open ? "block" : "hidden"}`}
      >
        <ul className={`flex flex-col py-2 ${section.padX}`}>
          {navItems.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className="block rounded-xl px-3 py-3 text-sm font-medium text-muted transition-colors duration-200 hover:bg-section hover:text-foreground"
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
