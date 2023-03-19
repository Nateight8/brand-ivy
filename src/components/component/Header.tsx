import React from "react";

type Props = { children: string };

function Header({ children }: Props) {
  return (
    <h3 className=" text-4xl md:text-5xl font-light py-4 md:py-6 uppercase">
      {children}
    </h3>
  );
}

export default Header;
