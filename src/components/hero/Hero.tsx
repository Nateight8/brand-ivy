import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

function Hero({}: Props) {
  return (
    <div
      className="h-[28.125rem] relative w-full md:h-screen mt-4 rounded-md  flex items-end pb-7 px-4 md:px-14 lg:px-24"
      style={{
        backgroundImage: "url(/images/5.png)",
        backgroundSize: "cover",
        backgroundPosition: "top right",
      }}
    >
      <div className="inset-0 absolute bg-black z-0 opacity-30" />
      <div className="grid grid-cols-6  h- w-full z-10">
        <h1 className=" col-span-full whitespace-nowrap  text-5xl md:text-8xl lg:text-9xl ">
          FASHION
        </h1>
        <h1 className="  col-span-full whitespace-nowrap xl:col-start-2 text-5xl md:text-8xl  lg:text-9xl pb-3 ">
          & BRANDING
        </h1>
        <p className="opacity-100 col-span-full sm:col-span-4  md:col-span-5 xl:col-start-2 xl:col-span-3 text-xl ">
          Bringing Your Fashion Brand&apos;s Unique Identity to Life Through
          Strategic Marketing and Advertising.
        </p>
      </div>
    </div>
  );
}

export default Hero;
