import React from "react";
import Test from "../about/Test";
import Header from "../component/Header";
import ArticleCard from "./ArticleCard";

type Props = {};

function Articles({}: Props) {
  return (
    <div className="  my-4">
      <Header>LATEST Articles</Header>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 w-full  gap-4">
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </div>
    </div>
  );
}

export default Articles;
