import React from "react";
import Test from "../about/Test";
import Aside from "./Aside";
import Rights from "./Rights";
import Sitemap from "./Sitemap";

type Props = {};

function Footer({}: Props) {
  return (
    <footer className="px-4 pb-4  w-full grid md:grid-cols-5 md:grid-rows-5 gap-4">
      <Aside />
      <Sitemap />
      <Rights />
    </footer>
  );
}

export default Footer;
