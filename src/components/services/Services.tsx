import React from "react";
import Service from "./Service";

type Props = {};

function Services({}: Props) {
  return (
    <div className="py-4 w-full flex items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
        <Service />
        <Service />
        <Service />
        <Service />
      </div>
    </div>
  );
}

export default Services;
