import type { ReactNode } from "react";
import { AmbientBackground } from "@/components/layout/AmbientBackground";
import { Navbar } from "@/components/layout/Navbar";

export function Shell({ children }: { children: ReactNode }) {
  return (
    <div id="top" className="relative flex min-h-screen flex-col">
      <AmbientBackground />
      <Navbar />
      <main className="relative z-0 flex-1">{children}</main>
    </div>
  );
}
