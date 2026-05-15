import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    id: "the-empower",
    title: "The Empower",
    description:
      "A modern nonprofit-focused website experience designed to communicate mission, programs, and community impact with clarity.",
    image: "/empower.png",
    link: "https://theempower.org",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "SEO"],
  },
  {
    id: "elisabelle-beauty",
    title: "Elisabelle Beauty Store",
    description:
      "An e-commerce storefront focused on beauty products with a clean browsing flow and conversion-focused product pages.",
    image: "/ElisaBeauty.png",
    link: "https://elisabelle-beauty.myshopify.com",
    techStack: ["Shopify", "Theme Customization", "UX Improvements", "Performance"],
  },
  {
    id: "greenstep-cooling-towers",
    title: "Greenstep Cooling Towers",
    description:
      "A polished industrial company website with structured service presentation and trust-building information architecture.",
    image: "/greenstep.png",
    link: "https://www.greenstepcoolingtowers.com",
    techStack: ["React", "Responsive UI", "Technical SEO", "Content Architecture"],
  },
  {
    id: "samba-website",
    title: "Samba Website Agency Site",
    description:
      "Our own agency website built to showcase services, portfolio, and conversion-focused user journeys for new clients.",
    image: "/file.svg",
    link: "https://sambawebsite-so.vercel.app",
    techStack: ["Next.js App Router", "TypeScript", "Tailwind CSS", "UI/UX Design"],
  },
];
