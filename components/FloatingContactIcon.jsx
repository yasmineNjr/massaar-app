import { socialMedia } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const FloatingContactIcon = ({ item }) => {
  return (
    
    <Link
        key={item.id}
        href={item.link}
        className=" text-white p-3 rounded-full shadow-lg transition-transform duration-300 hover:scale-125 hover:shadow-2xl"
        aria-label="Contact Us"
        >
         <Image 
            src={item.icon} 
            alt={item.id} 
            className={`w-[21px] h-[21px] object-contain cursor-pointer`}
            />
    </Link>
   
  );
};

export default FloatingContactIcon;