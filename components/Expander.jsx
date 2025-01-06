'use client'

import { useRef, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

const Expander = ({ title, content, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null); // Reference for the content height

  return (
    <div className={className}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex gap-4 items-center p-4 cursor-pointer"
      >
        {/* <span className={`transform ${isOpen ? "rotate-180" : "rotate-0"} transition-transform`}>
          ▼
        </span> */}
        {
            isOpen ? <FaMinus color='#000' /> : <FaPlus color='#292D32'/>
        }
        <h3 className={`${isOpen ? "text-[#000]" : "text-[#292D32]"} font-bold text-[18px]`}>{title}</h3>
      </div>
      <div
        ref={contentRef}
        className={`transition-[max-height] duration-500 ease-in-out overflow-hidden`}
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : "0px",
        }}
      >
        <div className="p-4">{content}</div>
      </div>
    </div>
  );
};

export default Expander;

