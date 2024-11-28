'use client';

import { useState, useEffect, useRef } from "react";
import FloatingContactIcon from "./FloatingContactIcon";

const FloatingIconsWithFooterCheck = ({ socialMedia }) => {
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsFooterVisible(entry.isIntersecting),
      { root: null, threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) observer.unobserve(footerRef.current);
    };
  }, []);

  return (
    <>
      {/* Floating Icons */}
      {!isFooterVisible && (
        <div className="fixed bottom-12 right-5 flex flex-col gap-2 z-50">
          {socialMedia.map(
            (item, index) =>
              item.isFloating && <FloatingContactIcon key={index} item={item} />
          )}
        </div>
      )}
      {/* Footer Observer Div */}
      <div
        ref={footerRef}
        className="footer-observer w-full h-2 bg-transparent" // Visible for debugging
      />
    </>
  );
};

export default FloatingIconsWithFooterCheck;
