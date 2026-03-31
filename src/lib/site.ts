export const siteConfig = {
  /** Shown in the navbar — replace with your name */
  name: "Aye Nyein Chan Moe",
  /**
   * Hero illustration — place PNG/WebP/SVG in /public (e.g. /brand/hero.png).
   * Default is a minimal SVG until you replace the file or this path.
   */
  heroIllustration: {
    // src: "/brand/hero-illustration.svg",
    src: "/brand/hero.png",
    alt: "Product and technology illustration",
  },
  /** Contact — update with your real details */
  contact: {
    email: "ayenyeinchanmoe2712@gmail.com",
    /** Shown on the page */
    phone: "+95 9404483679",
    /** Use for tel: (digits and leading + only) */
    phoneTel: "+959404483679",
    linkedinUrl: "https://www.linkedin.com/in/aye-nyein-chan-moe-4724531b0/",
  },
} as const;

export const navItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
] as const;
