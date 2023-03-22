import React from "react";

type Props = {};

function Hero({}: Props) {
  return (
    <div>
      <div className="py-20  lg:p-20 bg--500 ">
        <div className="  max-w-xl">
          <p className=" uppercase">projects</p>
          <h2 className="text text-6xl py-4 font-light uppercase">
            FROM CONCEPT TO CREATION
          </h2>
          <p>
            Examining our track record of developing successful and impactful
            fashion brands.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
