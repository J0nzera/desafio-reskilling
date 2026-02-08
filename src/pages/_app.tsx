import "@/styles/globals.css";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

const Header = dynamic(
  () => import("@/shared/components/header/Header").then((mod) => mod.default),
  { ssr: false },
);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${inter.className} appContainer`}>
      <Header />
      <Component {...pageProps} />
    </div>
  );
}
