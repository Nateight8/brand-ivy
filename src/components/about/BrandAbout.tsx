import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import BrandTabs from "./BrandTabs";

type Props = {};

function BrandAbout({}: Props) {
  let { scrollYProgress } = useScroll();

  let y = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <>
      <div className=" flex items-center py-4">
        <div className=" w-full grid md:grid-cols-2 gap-4 ">
          <div className="h-full min-h-[21.25rem] md:h-screen rounded-xl bg-[#1e1e1e] relative overflow-hidden">
            <Image
              src="/images/10.jpg"
              alt=""
              fill
              style={{ objectFit: "cover", objectPosition: "top center" }}
            />
          </div>
          <div className=" rounded-xl bg-[#1e1e1e] p-6 lg:p-16 flex flex-col justify-between">
            <p className="pb-8">About Us</p>
            <motion.div style={{ y }}>
              <h2 className=" text-4xl lg:text-7xl font-normal pb-4">
                BRINGING FASHION BRANDS TO LIFE
              </h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium, adipisci eaque sequi ea aliquid quam? Lorem ipsum
                dolor sit amet. dolor sit amet consectetur adipisicing elit.
                Praesentium, adipisci eaque
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      <BrandTabs />
    </>
  );
}

export default BrandAbout;
