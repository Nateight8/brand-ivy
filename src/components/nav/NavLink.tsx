import Link from "next/link";
import React from "react";

type Props = {
  text: string;
};

function NavLink({ text }: Props) {
  return (
    <Link
      href={text}
      className="py-3 bg-[#2a2a2a] opacity-60 hover:opacity-100 px-6 uppercase rounded-lg"
      // style={text === path ? true : false}
    >
      {text}
    </Link>
  );
}

export default NavLink;
