import Image from "next/image";
import React from "react";
import BrandTab from "./BrandTab";
import Test from "./Test";

type Props = {};

function BrandTabs({}: Props) {
  const tabs = [
    { id: "1", name: "video production" },
    { id: "2", name: "Brand & Identity" },
    { id: "2", name: "Online marketting" },
    { id: "2", name: "E-commerce" },
  ];
  return (
    <div className="w grid md:grid-cols-2 -4 h- w-full gap-4">
      <div className="grid gap-4">
        {tabs.map((tab) => (
          <BrandTab key={tab.id} tab={tab} />
        ))}
      </div>
      <div className="h-full row-start-1 md:col-start-2 md:col-span-full  col-span-1 min-h-[21.25rem] md:h-screen rounded-xl bg-[#1e1e1e] relative overflow-hidden">
        <Image
          src="/images/4.jpg"
          alt=""
          fill
          style={{ objectFit: "cover", objectPosition: "top center" }}
        />
      </div>
    </div>
  );
}

export default BrandTabs;
