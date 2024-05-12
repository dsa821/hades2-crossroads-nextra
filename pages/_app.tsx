import { Anybody, Poppins } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const anybody = Anybody({ weight: "400", subsets: ["latin"] });
const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export default function MyApp({ Component, pageProps }) {
  return (
    <div className={anybody.className}>
      <Component {...pageProps} />
    </div>
  );
}
