'use client'

import Link from "next/link";
import { useActivePathContext } from "./ActivePathProvider";
import { usePathname } from "next/navigation";

const NavLink = ({ item, idx, length }) => {

  const { state, setState } = useActivePathContext();
  // const isActive = (path) => state === path;
  const pathname = usePathname();
  const isActive = (path) => pathname === path || pathname.startsWith(path + '/');
 
  return (
    <Link
      key={item.id}
      href={item.link}
      onClick={() => setState(item.link)}
      // className={`text-gray-600 hover:text-gray-900  ${
      //   active === item.title ? "border-b-2 border-primary" : ""
      // }`}
      // ${state === item.link ? "border-b-2 border-primary-foreground" : ""}
      className={`font-normal cursor-pointer text-[18px] 
        ${idx === length-1 ?' ml-0' : 'ml-10'}
        ${isActive(item.link) ? "border-b-2 border-gold text-gold" : ""}
        `}
        // transition-transform duration-300 hover:scale-105 
    >
      {item.title}
    </Link>
  );
};

export default NavLink;
