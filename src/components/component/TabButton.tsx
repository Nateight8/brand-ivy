import React from "react";

type Props = {};

function TabButton({}: Props) {
  return (
    <div className="m mt-6 flex space-x-3 items-center whitespace-nowrap">
      <div className="h-9 w-9 rounded-full border bg-[#f4f2ed] border-red-100 opacity-5 "></div>
    </div>
  );
}

export default TabButton;
