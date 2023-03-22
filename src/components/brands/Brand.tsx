import Image from "next/image";
import React from "react";

type Props = {};

function Brand({}: Props) {
  return (
    <div className="overflow-hidden min-h-[21.25rem] md:h-[80dvh] w-full bg-red-100 rounded-xl my-4 relative">
      <Image src="/images/12.jpg" alt="" fill style={{ objectFit: "cover" }} />
    </div>
  );
}

export default Brand;
