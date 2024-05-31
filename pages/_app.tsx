import "../styles/global.css";
import {
  Inter,
  Spectral,
  Spectral_SC,
  Caesar_Dressing,
} from "next/font/google";

const headerFont = Spectral({
  weight: ["400", "600", "700"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-header",
});
const textFont = Inter({ display: "swap", subsets: ["latin"] });
const smallCapsFont = Spectral_SC({
  weight: ["400", "600", "700"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-small-caps",
});
const greekFont = Caesar_Dressing({
  weight: "400",
  display: "swap",
  subsets: ["latin"],
  variable: "--font-greek",
});

export default function MyApp({ Component, pageProps }) {
  return (
    <div
      className={`${headerFont.variable} ${textFont.className} ${smallCapsFont.variable} ${greekFont.variable}`}
    >
      <Component {...pageProps} />
    </div>
  );
}
