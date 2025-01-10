'use client'

import { features, quickBookHandler } from '../constants';
import styles, { layout } from '@/app/style';
import Button from './Button';
import { useRef, useState, useEffect } from 'react';

const FeatueCard = ({ icon, title, content, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { 
        threshold: 0.2, // Adjust threshold as needed
        rootMargin: '0px 0px -20% 0px',
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
        animation: isVisible
          ? `appear 1s ease-out forwards ${index * 200}ms`
          : 'none',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateX(0)' : 'translateX(-3rem)',
      }}
      className="group flex flex-row p-6 rounded-[20px] mb-2 hover:bg-gradient-to-r from-gray-300 to-white hover:shadow-customGray"
    >
      <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dark-500`}>
        {icon}
      </div>
      <div className="flex flex-1 flex-col mr-3">
        <h4 className="font-poppins font-semibold text-[18px] leading-[23px] mb-1 text-customGold">
          {title}
        </h4>
        <p className="font-poppins font-bold text-[16px] leading-[24px] mb-1  text-dimWhite group-hover:text-dark-500">
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
      <FeatueCard key={feature.id} {...feature} index={index} />
    ))}
  </div>
</section>

  )
}

export default HaveToChoose
