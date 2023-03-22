import React from "react";

type Props = {};

function Hero({}: Props) {
  return (
    <div>
      <div className="px-6 py-20  lg:p-20 bg--500 flex justify-between items-center ">
        <h2 className="text text-6xl py-4 font-light uppercase">Blog</h2>
        <div className="space-x-3">
          <button className="px px-3 py-1 uppercase bg-[#1e1e1e] rounded border border-[#ffffff1b]">
            marketing
          </button>
          <button className="px px-3 py-1 uppercase bg-[#1e1e1e] rounded border border-[#ffffff1b]">
            Branding
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
