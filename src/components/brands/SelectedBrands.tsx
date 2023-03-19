import React from "react";
import Header from "../component/Header";
import Brand from "./Brand";

type Props = {};

function SelectedBrands({}: Props) {
  return (
    <div className="py-4">
      <Header>Selected Brands</Header>
      <Brand />
      <Brand />
      <Brand />
      <Brand />
    </div>
  );
}

export default SelectedBrands;
