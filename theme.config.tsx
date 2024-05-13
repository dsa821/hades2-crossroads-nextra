import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>Hades 2 - The Crossroads</span>,
  primaryHue: 156.2,
  primarySaturation: 72.6,
  // project: {
  //   link: 'https://github.com/shuding/nextra-docs-template',
  // },
  chat: {
    link: 'https://discord.gg/supergiant',
  },
  // docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    component: null,
  },
  editLink: {
    component: null,
  },
  feedback: {
    content: null
  }
};

export default config;
