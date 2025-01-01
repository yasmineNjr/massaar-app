import styles from '@/app/style';
import Image from "next/image";
import QuickBook from './QuickBook';
import { commericalNum, logo, logoDark, saudiBussiness, taxNumber, zakatax } from '@/public/assets';

const Hero = () => (
  <>
  <section 
    className={`flex flex-1 flex-col h-[700px] ${styles.paddingY} bg-transparent  justify-center items-center flex-col xl:px-0 sm:px-16 px-6`}
    style={{ backgroundImage: "url('/assets/home.jpg')", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center",}}>

        {/* <div className='mb-10'>
          <Image src={logo} alt='algharbia' className='w-full max-w-[370px] h-auto'/>
        </div> */}
            
        {/* <div className="ss:flex md:mr-4 mr-0 bg-transparent">
          <QuickBook/>
        </div> */}

    </section>

    <p className={`${styles.paragraph} w-full p-10 text-center mt-5 text-dimWhite font-bold text-[22px]`}>
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