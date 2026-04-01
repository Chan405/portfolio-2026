/** Shared layout — brand spacing */
export const section = {
  scrollMargin: "scroll-mt-[4.5rem]",
  border: "border-b border-gray-200",
  padX: "px-5 sm:px-6 lg:px-6",
  padY: "py-12",
} as const;

export const sectionClass = `${section.scrollMargin} ${section.border} ${section.padX} ${section.padY} bg-white`;
export const sectionClassMuted = `${section.scrollMargin} ${section.border} ${section.padX} ${section.padY} bg-section`;

export const container = "mx-auto w-full max-w-7xl";

export const gapBlock = "gap-8";
export const gapTight = "gap-6";
