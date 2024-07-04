import { useRouter } from "next/router";
import { useConfig } from "nextra-theme-docs";

export const Head = () => {
  // const { asPath, defaultLocale, locale } = useRouter();
  const { frontMatter } = useConfig();
  // const url =
  //   "https://hades2-crossroads.vercel.app" +
  //   (defaultLocale === locale ? asPath : `/${locale}${asPath}`);

  return (
    <>
      {/* <meta property="og:url" content={url} /> */}
      <meta
        property="og:title"
        content={`${frontMatter.title} : Hades 2 - The Crossroads` || "Hades 2 - The Crossroads"}
      />
      <meta
        property="og:description"
        content={frontMatter.description || "A general resource for Hades 2."}
      />
    </>
  );
};
