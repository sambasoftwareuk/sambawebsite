import type { NavigationItem, Service } from "@/lib/types";

export const navItems: NavigationItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Works", href: "/works" },
  { label: "Contact", href: "/contact" },
];

export const services: Service[] = [
  {
    title: "Web Development",
    description:
      "High-converting, scalable websites using Next.js and React with clean architecture and maintainable code.",
    bullets: ["Next.js App Router", "TypeScript architecture", "Component-driven UI"],
  },
  {
    title: "E-commerce",
    description:
      "Shopify solutions designed to increase sales with fast storefronts and smooth checkout experiences.",
    bullets: ["Store setup and migration", "Theme customization", "Conversion-focused flows"],
  },
  {
    title: "UI/UX Design",
    description:
      "Premium interfaces that balance visual identity, usability, and customer trust across every screen.",
    bullets: ["Design systems", "User journey mapping", "Responsive prototypes"],
  },
  {
    title: "Performance Optimization",
    description:
      "Core Web Vitals improvements and frontend optimizations to keep your site fast under real traffic.",
    bullets: ["Lighthouse tuning", "Image and script optimization", "Caching strategy"],
  },
  {
    title: "SEO-ready Development",
    description:
      "Technical SEO baked into development to help search engines crawl, index, and rank your pages.",
    bullets: ["Semantic structure", "Metadata and schema basics", "Accessibility best practices"],
  },
];
