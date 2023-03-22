import Connect from "@/components/connect/Connect";
import Hero from "@/components/Projects/hero/Hero";
import Projects from "@/components/Projects/projects/Projects";
import React from "react";

type Props = {};

function Home({}: Props) {
  return (
    <main className="px-4">
      <Hero />
      <Projects />
      <Connect />
    </main>
  );
}

export default Home;
