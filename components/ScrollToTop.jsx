"use client"; // Required for Next.js 13+ client components
import { scrollUp } from "@/public/assets";
import Image from "next/image";
import { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show the button when the user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300); // Show if scrolled 300px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
        onClick={scrollToTop}
        className={` text-white p-3 rounded-full shadow-lg transition-transform duration-300 hover:scale-125 hover:shadow-2xl hover:bg-dimWhite ${
            isVisible ? "block" : "hidden"
          }`}
      
        aria-label="Go to top"
    >
        <Image 
            src={scrollUp} 
            alt='scrollUp'
            className={`w-[21px] h-[21px] object-contain cursor-pointer`}
            />
    </button>
  );
};

export default ScrollToTop;
