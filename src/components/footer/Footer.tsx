import React from "react";
import Test from "../about/Test";
import Aside from "./Aside";
import Rights from "./Rights";
import Sitemap from "./Sitemap";

type Props = {};

function Footer({}: Props) {
  return (
    <footer className="px-4 pb-4 h-[90vh] w-full grid grid-cols-5 grid-rows-5 gap-4">
      <Aside />
      <Sitemap />
      <Rights />
    </footer>
  );
}

export default Footer;
