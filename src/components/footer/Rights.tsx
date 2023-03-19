import React from "react";

type Props = {};

function Rights({}: Props) {
  return (
    <div className=" rounded-xl bg-[#1e1e1e]  row-start-5 row-span-1 col-span-full col-start-2 flex items-center p-4">
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
