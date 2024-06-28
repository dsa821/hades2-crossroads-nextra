import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";
import Image from "next/image";

import { Head } from "./components/Head";

const config: DocsThemeConfig = {
  logo: (
    <div className="flex items-center">
      <Image
        src="/images/hades2-logo.png"
        alt="Hades 2 Logo"
        height={60}
        width={120}
      ></Image>
      <div className="text-gray-500">v0.93741</div>
    </div>
  ),
  head: <Head />,

  primaryHue: 156.2,
  primarySaturation: 72.6,
  darkMode: false,
  nextThemes: {
    forcedTheme: "dark",
  },

  // project: {
  //   link: 'https://github.com/shuding/nextra-docs-template',
  // },
  chat: {
    link: "https://discord.gg/supergiant",
  },
  // docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  search: {
    placeholder: "Search...",
  },
  footer: {
    text: <span className="italic">So mote it be...</span>,
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
    const seoProps = { titleTemplate: "Hades 2: The Crossroads " };
    if (asPath !== "/") {
      seoProps.titleTemplate = "%s - Hades 2: The Crossroads";
    }
    return seoProps;
  },
};

export default config;
