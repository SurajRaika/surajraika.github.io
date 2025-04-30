import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "VALEROCK",
  DESCRIPTION: "I make the best guacamole in Switzerland and work mostly with Power BI and Power Query. I enjoy exploring other tech too, from web dev to automation.",
  EMAIL: "myemail@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Astro Micro is an accessible theme for Astro.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "A collection of my projects with links to repositories and live demos.",
};
export const SOCIALS: Socials = [
  {
    NAME: "GitHub",
    HREF: "https://github.com/OscarValerock24",
  },
  {
    NAME: "Personal Website",
    HREF: "https://valerock.com",
  },
  {
    NAME: "Organization",
    HREF: "https://bibb.com",
  },
  {
    NAME: "Twitter",
    HREF: "https://twitter.com/bibb_pro",
  },
  {
    NAME: "LinkedIn",
    HREF: "https://linkedin.com/in/oscarmartinezv",
  },
];
