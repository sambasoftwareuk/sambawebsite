export type NavigationItem = {
  label: string;
  href: string;
};

export type Service = {
  title: string;
  description: string;
  bullets: string[];
};

export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  techStack: string[];
};
