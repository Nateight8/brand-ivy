import React from "react";

type Props = {};

function Newslatter({}: Props) {
  return (
    <div className="mb-4 ">
      <div className="bg-[#2a2a2a] p-4 w-full rounded-xl py-6 flex flex-col md:flex-row item-center">
        <div className=" w-full pb-3 flex-1">
          <p className="text-base pb-3">NEWSLETTER</p>
          <h3 className="pb-2">GET INSIGHTS BEHIND THE SCENES</h3>
        </div>
        <div className="flex flex-col md:flex-row flex-[0.5] md:ml-4 items-center">
          <input
            type="text"
            className="text-white p-4 w-full bg-[#353535] rounded-lg border border-[#4f4f4f] hover:border  "
          />

          <button className="text-base font-normal  bg-[#CEBD63] text-[#121212] rounded-lg uppercase my-4 md:my-0 md:ml-4 w-full md:w-fit py-4 px-5 ">
            subscribe
          </button>
        </div>
      </div>
    </div>
  );
}

export default Newslatter;
