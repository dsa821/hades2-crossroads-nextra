import "../styles/global.css";
import { Anybody, Raleway } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const headerFont = Anybody({
  display: "swap",
  variable: "--font-header",
  subsets: ["latin"],
});
const textFont = Raleway({ display: "swap", subsets: ["latin"] });

export default function MyApp({ Component, pageProps }) {
  return (
    <div className={`${headerFont.variable} ${textFont.className}`}>
      <Component {...pageProps} />
    </div>
  );
}
