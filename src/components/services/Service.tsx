import React from "react";
import Button from "../component/Button";

type Props = {};

function Service({}: Props) {
  return (
    <div className="p-6  bg-[#1e1e1e] rounded-xl">
      <h3 className="">Branding</h3>
      <p>We create a unique and consistent image for your fashion brand.</p>
      <Button>About Identity</Button>
    </div>
  );
}

export default Service;
