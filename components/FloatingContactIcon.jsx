import { socialMedia } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const FloatingContactIcon = ({ item }) => {

  const handleClick = (link) => {
    window.open(link, "_blank");
  }

  return (
    
    <div
        key={item.id}
        // href={item.link}
        onClick={handleClick}
        className=" text-white p-3 rounded-full shadow-lg transition-transform duration-300 hover:scale-125 hover:shadow-2xl"
        aria-label="Contact Us"
        >
         <Image 
            src={item.icon} 
            alt={item.id} 
            className={`w-[21px] h-[21px] object-contain cursor-pointer`}
            />
    </div>
   
  );
};

export default FloatingContactIcon;