import Image from "next/image";
import React from "react";

type Props = {};

function ArticleCard({}: Props) {
  return (
    <div className=" rounded-xl bg-[#1e1e1e]  p-4 ">
      <div className="w-full h-full ">
        <div className=" h-[20rem] lg:h-[25rem] rounded-lg w-full relative overflow-hidden bg-[#121212]">
          <Image
            src="/images/2.jpg"
            alt=""
            fill
            style={{ objectFit: "cover", objectPosition: "top center" }}
          />
        </div>
        <div className="py-3">
          <h3>The power of influencer marketting</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore,
            deleniti?
          </p>
        </div>
      </div>
    </div>
  );
}

export default ArticleCard;
