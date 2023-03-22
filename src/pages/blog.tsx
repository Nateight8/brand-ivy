import BlogArticles from "@/components/Blog/Articles/BlogArticles";
import Hero from "@/components/Blog/hero/Hero";
import Connect from "@/components/connect/Connect";
import React from "react";

type Props = {};

function Home({}: Props) {
  return (
    <div>
      <Hero />
      <BlogArticles />
      <Connect />
    </div>
  );
}

export default Home;
