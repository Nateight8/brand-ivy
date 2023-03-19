import React from "react";
import Button from "../component/Button";

type Props = {};

function BrandTab({}: Props) {
  return (
    <>
      <div className="hidden lg:flex rounded-xl bg-[#1e1e1e] p-4 md:p-6  items-center space-x-7">
        <div className=" flex-1 ">
          <h3>Brand & Identity</h3>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            molestiae voluptatibus iure, molestias porro ea.
          </p>
        </div>
        <Button />
      </div>
      <div className="bg-[#1e1e1e] flex lg:hidden p-6 rounded-xl">
        <button className="text-xl">Brand & Identity</button>
      </div>
    </>
  );
}

export default BrandTab;
