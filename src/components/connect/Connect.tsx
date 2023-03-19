import React from "react";

type Props = {};

function Connect({}: Props) {
  return (
    <div className="my-6 grid grid-cols-6 p-4 md:p-9 lg:p-12 w-full bg-[#cebd63] rounded-xl ">
      <p className="col-span-full text-[#121212] font-normal py-3">Contact</p>
      <div className="col-span-full md:col-span-4">
        <h1 className=" text-5xl md:text-7xl text-[#121212] font-light">
          LET'S MAKE YOUR FASHION BRAND SHINE
        </h1>
      </div>
      <div className="col-span-full my-6 md:my-0 sm:py-0 md:col-span-2 md:col-start-5 lg:col-start-6 flex items-end md:justify-center">
        <button className="py-4 bg-[#121212] uppercase w-full md:w-fit px-5  rounded-md whitespace-nowrap">
          Get in touch
        </button>
      </div>
    </div>
  );
}

export default Connect;
