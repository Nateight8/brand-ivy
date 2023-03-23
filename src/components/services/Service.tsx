import { type } from "os";
import React from "react";
import Button from "../component/Button";

type Service = {
  id: string;
  name: string;
  about: string;
};

type Props = {
  service: { id: string; name: string; about: string };
};

function Service({ service }: Props) {
  const { name, about } = service;

  return (
    <div className="p-6  bg-[#1e1e1e] rounded-xl">
      <h3 className="uppercase">{name}</h3>
      <p>{about}</p>
      <Button>About {name}</Button>
    </div>
  );
}

export default Service;
