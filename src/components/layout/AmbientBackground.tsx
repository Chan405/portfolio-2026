/** Apple-inspired calm backdrop — near-white base, imperceptible blue–violet depth, no visual noise. */
export function AmbientBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background"
      aria-hidden
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#ffffff_0%,#fbfbfd_45%,#f7f8fb_100%)]" />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_65%_at_100%_-10%,rgba(99,102,241,0.055),transparent_55%),radial-gradient(ellipse_90%_60%_at_0%_105%,rgba(59,130,199,0.045),transparent_58%)]" />

      <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_46%,rgba(139,92,246,0.022)_52%,transparent_58%)]" />

      <div className="ambient-grid absolute inset-0 opacity-[0.07] motion-reduce:opacity-[0.04]" />
    </div>
  );
}
