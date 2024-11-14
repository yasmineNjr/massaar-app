import styles from '@/app/style';
import { hero1 } from '../public/assets'
import Image from "next/image";
import { QuickBook } from '.';
import Button from './Button';
import { TextGenerateEffect } from './ui/text-generate-effect';
import { InfiniteMovingCards } from './ui/infinite-moving-cards';
import { heroImages } from '@/constants';

const Hero = () => (
    <section className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[42px] text-[22px] text-dimWhite ss:leading-[100.8px] leading-[75px]">
          <span className="text-gradient">مسار الغربية</span>{" "}
          <br className="sm:block hidden" />
           خيارك الأفضل لحجز{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <QuickBook/>
          </div>
        </div>
        <h1 className="font-poppins font-semibold ss:text-[38px] text-[22px] text-dimWhite ss:leading-[100.8px] leading-[75px] w-full">
          خدمات رحلات الحج و العمرة
        </h1>
    <div>
    </div>
        
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        نوفر لك خيارات حجز السيارات والفنادق بالقرب من الحرم المكي والمدينة المنورة، لتجربة حج وعمرة مريحة وآمنة. اختر من بين مجموعة واسعة من السيارات والفنادق التي تناسب احتياجاتك، مع خدمات مميزة تضمن لك الراحة وتتيح لك التركيز على رحلتك الروحانية.
        </p>
      </div>
          
      <div className={`flex-1 flex ${styles.flexCenter} xl:px-0 sm:px-16 px-6 md:my-0 my-10 relative`}>
        <Image src={hero1} alt='hero' className='w-[100%] h-[100%] relative z-[5]'/>
        
        {/* for gradient background  */}
        <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient'/>
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 white__gradient" />
      </div>
    </section>
  )

export default Hero