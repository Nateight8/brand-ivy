import React from "react";

type Props = {};

function Rights({}: Props) {
  return (
    <div className=" rounded-xl bg-[#1e1e1e]  md:row-start-5 md:row-span-1 md:col-span-full md:col-start-2 flex items-center p-4">
      <p>
        Developed By{" "}
        <span className="text text-[#CEBD63] font-medium opacity-100">
          Nate
        </span>
      </p>
    </div>
  );
}

export default Rights;
