import ArticleCard from "@/components/articles/ArticleCard";
import React from "react";

type Props = {};

function BlogArticles({}: Props) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 w-full  gap-4">
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
    </div>
  );
}

export default BlogArticles;
