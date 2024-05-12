import { Anybody } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const anybody = Anybody({ display: "swap", subsets: ["latin"] });

export default function MyApp({ Component, pageProps }) {
  return (
    <div className={anybody.className}>
      <Component {...pageProps} />
    </div>
  );
}
