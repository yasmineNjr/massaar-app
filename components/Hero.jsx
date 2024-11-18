import styles from '@/app/style';
import { hero1 } from '../public/assets'
import Image from "next/image";
import QuickBook from './QuickBook';
import Button from './Button';
import { TextGenerateEffect } from './ui/text-generate-effect';
import { InfiniteMovingCards } from './ui/infinite-moving-cards';
import { heroImages } from '@/constants';
import MagicButton from './ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa6';

const Hero = () => (
    
  <section className={`flex flex-col ${styles.paddingY} bg-transparent`}>
      {/* md:flex-row  */}
      <div className={`flex-1 flex justify-center items-center flex-col xl:px-0 sm:px-16 px-6`}>
      {/* ${styles.flexStart} */}
        <div className="flex flex-row justify-between items-center w-full text-center">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[42px] text-[22px] text-primary ss:leading-[100.8px] leading-[75px]">
          <span className="text-gradient  animate-fadeIn">مسار الغربية</span>{" "}
          <br className="sm:block hidden" />
           خيارك الأفضل لحجز{" "}
          </h1>
          {/* <div className="ss:flex hidden md:mr-4 mr-0 bg-transparent">
            <QuickBook/>
          </div> */}
        </div>
        <h1 className="font-poppins font-semibold ss:text-[38px] text-[22px] text-primary ss:leading-[100.8px] leading-[75px] w-full text-center">
          خدمات رحلات الحج و العمرة
          {/* animate-bounceText  */}
        </h1>
        <div>
      </div>
        
        <p className={`${styles.paragraph} w-full p-10 text-center mt-5`}>
        {/* max-w-[470px] */}
        نوفر لك خيارات حجز السيارات والفنادق بالقرب من الحرم المكي والمدينة المنورة، لتجربة حج وعمرة مريحة وآمنة. اختر من بين مجموعة واسعة من السيارات والفنادق التي تناسب احتياجاتك، مع خدمات مميزة تضمن لك الراحة وتتيح لك التركيز على رحلتك الروحانية.
        </p>
        
        {/* <MagicButton 
            title='حجز سريع' 
            icon={<FaLocationArrow color='gold'/>}
            position="right"/> */}
      </div>
      
      <div className="overflow-hidden w-full h-100 bg-transparent">
        <div className="flex items-center justify-center animate-slide space-x-8 hover-pause ">
          {/* Images */}
          {
            heroImages.map((img, idx) => (
              <div className="w-[400px] h-[400px] flex-shrink-0">
              <Image
                  src={img.image}
                  alt={img.id}
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
            </div>
            ))}
             <div className="w-[300px]"></div> {/* Adds space at the end */}
        </div>
      </div>
      
    </section>
  )

export default Hero



// <div className={`flex-1 flex ${styles.flexCenter} xl:px-0 sm:px-16 px-6 md:my-0 my-10 relative`}>
//         {/* <Image src={hero1} alt='hero' className='w-[100%] h-[100%] relative z-[5]'/> */}
       
//         <div class="overflow-hidden w-full  mt-10">
//           <div class="flex animate-slide hover-pause shadow-customGray gap-6">
//             {
//               heroImages.map((img) => (
//                  <div key={img.id} className="w-[500px] mx-2 bg-blue-500 rounded-lg shadow-md">
//                     {/* <Image src={img.image} alt="Image 1" class="rounded-lg" /> */}
//                     <Image src={img.image} alt={img.id} className='w-[100%] h-[100%] relative z-[5] rounded-lg'/>
//                   </div>
                  
//               ))
//             }
           
//           </div>
//         </div>

//           {/* for gradient background  */}
//         <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient'/>
//         <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
//         <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 white__gradient" />
//       </div>