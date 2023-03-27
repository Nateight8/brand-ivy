import Connect from "@/components/connect/Connect";
import Hero from "@/components/Projects/hero/Hero";
import Projects from "@/components/Projects/projects/Projects";
import React from "react";
import { motion as m } from "framer-motion";

type Props = {};

function Home({}: Props) {
  return (
    <m.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.75, ease: "easeInOut" }}
      className="px-4"
      // className=" absolute top-20 left-0 w-full h-full"
    >
      <Hero />
      <Projects />
      <Connect />
    </m.main>
  );
}

export default Home;
