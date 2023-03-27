import Footer from "@/components/footer/Footer";
import Navbar from "@/components/nav/Navbar";
import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";
// import Inter from "/fonts/chillax-light.woff";
// import localFont from "@next/font/local";

// const chillax = localFont({
//   src: [
//     {
//       path: "/fonts/Chillax-Bold.woff2",
//       weight: "400",
//     },
//   ],
// });

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <div className="relative">
      <Navbar />
      <AnimatePresence initial={false} mode={"wait"}>
        <Component key={router.pathname} {...pageProps} />
      </AnimatePresence>
      <Footer />
    </div>
  );
}
