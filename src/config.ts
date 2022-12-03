import type { SocialObjects } from "./types";

export const SITE = {
  website: "https://blog.ut61z.com/",
  author: "Yuta Endo",
  desc: "ut61z's blog",
  title: "ut61z's blog",
  ogImage: "default-og.png",
  lightAndDarkMode: true,
  postPerPage: 3,
};

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/ut61z",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/ut61z",
    linkTitle: `${SITE.title} on Twitter`,
    active: true,
  },
];
