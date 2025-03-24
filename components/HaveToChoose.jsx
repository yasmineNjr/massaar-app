'use client'

import { features, quickBookHandler } from '../constants';
import styles, { layout } from '@/app/style';
import Button from './Button';

import React, { useState, useRef, useEffect } from "react";

const FeatureCard = ({ icon, title, content, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          console.log("Is intersecting:", entry.isIntersecting);
          // setTimeout(() => setIsVisible(false), 1000); 
        }
      },
      {
        threshold: 0.2, // Trigger when 20% of the card is visible
        rootMargin: "0px", // Adjust if needed for earlier or later triggering
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      style={{
        transform: isVisible ? "translateX(0)" : "translateX(-3rem)",
        opacity: isVisible ? 1 : 0,
        transition: `transform 1s ease-out, opacity 1s ease-out ${index * 0.2}s`,
      }}
      className="group flex flex-row p-6 rounded-[20px] mb-2 hover:bg-gradient-to-r from-gray-300 to-white hover:shadow-customGray"
    >
      <div className="w-[64px] h-[64px] rounded-full flex items-center justify-center bg-dark-500 ml-3">
        {icon}
      </div>
      <div className="flex flex-1 flex-col ml-3">
        <h4 className="font-poppins font-semibold text-[18px] leading-[23px] mb-1 text-customGold">
          {title}
        </h4>
        <p className="font-poppins font-bold text-[16px] leading-[24px] mb-1 text-dimWhite group-hover:text-dark-500">
          {content}
        </p>
      </div>
    </div>
  );
};


function HaveToChoose() {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2} text-gold`}>
          لماذا عليك أن تختار<br className="sm:block hidden" /> مسار الغربية
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 text-dimWhite`}>
          نحن ندرك أن رحلة الحج والعمرة هي تجربة روحانية مهمة وتتطلب التخطيط الجيد
          لضمان الراحة والطمأنينة.
        </p>
        <Button
          styles="mt-10"
          title="اطلب الآن"
          onClickHandler={() => quickBookHandler('مرحباً, هل يمكنك مساعدتي في عملية الحجز؟')}
        />
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard {...feature} index={index} />
        ))}
      </div>
    </section>

  )
}

export default HaveToChoose
