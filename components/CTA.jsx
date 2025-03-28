'use client'

import styles from '@/app/style';
import Button from './Button';
import { quickBookHandler } from '@/constants';
import { useEffect, useRef, useState } from 'react';

const CTA = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  // Observer callback to trigger animation when section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true); // Trigger animations when the section is in view
          // Optionally reset isInView to false after a delay if you want to trigger it again later
          setTimeout(() => setIsInView(false), 1000); // Reset after animation duration
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is in view
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col rounded-[20px] bg-gradient-to-r from-gray-300 to-white shadow-customGray`}
    >
      <div className="flex flex-1 flex-col">
        <h2 className={`${styles.heading2} text-primary`}>اختبر خدماتنا الآن!</h2>
        <p
          className={`font-poppins font-bold text-[18px] leading-[30.8px] max-w-[470px] mt-5 text-customSecondary ${isInView ? 'move-right-to-left' : ''}`}
        >
          استعد لتجربة حج وعمرة مميزة ومريحة مع خدماتنا المتخصصة في حجز السيارات والفنادق. نوفر لك خيارات متنوعة تتيح لك التنقل بسهولة، سواءً كنت ترغب
          بسيارة مع سائق أو بدون، وأفضل أماكن الإقامة التي تضمن لك الراحة والطمأنينة خلال رحلتك المقدسة. انضم إلينا الآن واجعل رحلتك أسهل وأقرب.
        </p>
      </div>

      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <Button
          title="حجز سريع"
          onClickHandler={() => quickBookHandler('مرحباً, هل يمكنك مساعدتي في عملية الحجز؟')}
          className={isInView ? 'move-left-to-right' : ''}
        />
      </div>
    </section>
  );

}

export default CTA;
