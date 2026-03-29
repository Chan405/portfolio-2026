/** Calm brand backdrop: faint grid + one soft purple→blue wash — no cyberpunk. */
export function AmbientBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background"
      aria-hidden
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_60%_at_85%_0%,rgba(124,58,237,0.06),transparent_55%),radial-gradient(ellipse_80%_50%_at_0%_100%,rgba(59,130,246,0.055),transparent_50%)]" />
      <div className="absolute -right-[20%] top-[-15%] h-[28rem] w-[28rem] rounded-full bg-gradient-to-bl from-accent-purple/[0.11] to-accent-blue/[0.07] blur-[100px] animate-ambient-glow motion-reduce:animate-none" />
      <div className="ambient-grid absolute inset-0 opacity-50 motion-reduce:opacity-[0.35]" />
    </div>
  );
}
