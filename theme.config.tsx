import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";

const config: DocsThemeConfig = {
  logo: <span>Hades 2 - The Crossroads</span>,
  primaryHue: 156.2,
  primarySaturation: 72.6,
  // project: {
  //   link: 'https://github.com/shuding/nextra-docs-template',
  // },
  chat: {
    link: "https://discord.gg/supergiant",
  },
  // docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    component: null,
  },
  editLink: {
    component: null,
  },
  feedback: {
    content: null,
  },
  navigation: false,

  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== "/") {
      return { titleTemplate: "%s - Hades 2: The Crossroads" };
    }
  },
};

export default config;
