import styles from '@/app/style';
import Image from "next/image";
import QuickBook from './QuickBook';
import { heroImages } from '@/constants';

const Hero = () => (
  <>
  <section 
    className={`flex flex-1 flex-col h-[700px] ${styles.paddingY} bg-transparent  justify-center items-center flex-col xl:px-0 sm:px-16 px-6`}
    style={{ backgroundImage: "url('/assets/home.jpg')", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center",}}>

        <div className="flex flex-row justify-between items-center w-full text-center">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[42px] text-[22px] text-primary ss:leading-[100.8px] leading-[75px]">
            <span className="text-gradient  animate-fadeIn">مسار الغربية</span>{" "}
            <br className="sm:block hidden" />
            خيارك الأفضل لحجز{" "}
          </h1>
        </div>
        <h1 className="font-poppins font-semibold ss:text-[38px] text-[22px] text-primary ss:leading-[100.8px] leading-[75px] w-full text-center">
          خدمات رحلات الحج و العمرة
        </h1>
            
        <div className="ss:flex md:mr-4 mr-0 bg-transparent">
          <QuickBook/>
        </div>

       
      
    </section>

    <p className={`${styles.paragraph} w-full p-10 text-center mt-5 text-primary font-bold text-[22px]`}>
      نوفر لك خيارات حجز السيارات والفنادق بالقرب من الحرم المكي والمدينة المنورة، لتجربة حج وعمرة مريحة وآمنة. اختر من بين مجموعة واسعة من السيارات والفنادق التي تناسب احتياجاتك، مع خدمات مميزة تضمن لك الراحة وتتيح لك التركيز على رحلتك الروحانية.
    </p>
    </>
  )

export default Hero



{/* <div className="overflow-hidden w-full h-100 bg-transparent">
        <div className="flex items-center justify-center animate-slide space-x-8 hover-pause ">
          {
            heroImages.map((img, idx) => (
              <div className='relative min-w-[420px] h-[370px] rounded-xl overflow-hidden shadow-customGray'>
              <Image
                  src={img.image}
                  alt={img.id}
                  layout="fill"
                />
            </div>
            ))}
             <div className="w-[300px]"></div> //Adds space at the end 
        </div>
      </div> */}