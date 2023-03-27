import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
type Props = {};

function Navbar({}: Props) {
  const links = [
    { href: "/projects", label: "projects" },
    { href: "/services", label: "services" },
    { href: "/studio", label: "studio" },
    { href: "/blog", label: "blog" },
  ];

  const path = usePathname();

  return (
    <nav className="sticky top-0 z-20 bg-[#121212]">
      <div className="w-full  flex justify-between py-7 px-4 items-center">
        <Link
          className="text-2xl uppercase "
          href="/"
          style={
            path === "/" ? { textDecoration: "underline" } : { border: "" }
          }
        >
          IVY
        </Link>
        <div className="spac space-x-2 flex">
          {links.map((link) => {
            const { href, label } = link;
            console.log(label);

            return (
              <div key={label} className="hidden xl:block">
                <Link
                  onClick={() => {
                    console.log(label);
                  }}
                  href={href}
                  className="py-3 bg-[#2a2a2a] opacity-60 hover:opacity-100 px-6 uppercase rounded-lg"
                  style={
                    href === path
                      ? { border: "1px solid white" }
                      : { border: "" }
                  }
                >
                  {label}
                </Link>
              </div>
            );
          })}

          <div className="">
            <Link
              href="contact"
              className="py-3 bg-[#CEBD63] text-[#121212] hover: px-6 uppercase rounded-lg"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
