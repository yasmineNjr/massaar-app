'use client'

import Link from "next/link";
import { useActivePathContext } from "./ActivePathProvider";

const NavLink = ({ item, idx, length }) => {

  const { state, setState } = useActivePathContext();
 
  return (
    <Link
      key={item.id}
      href={item.link}
      onClick={() => setState(item.link)}
      // className={`text-gray-600 hover:text-gray-900  ${
      //   active === item.title ? "border-b-2 border-primary" : ""
      // }`}
      className={`font-normal cursor-pointer text-[18px] transition-transform duration-300 hover:scale-105 
        ${idx === length-1 ?' ml-0' : 'ml-10'}
        ${state === item.link ? "border-b-2 border-primary-foreground" : ""}`}
    >
      {item.title}
    </Link>
  );
};

export default NavLink;
