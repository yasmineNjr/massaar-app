'use client'

import styles, { layout } from "@/app/style"
import Image from "next/image"
import { hero1 } from "@/public/assets"
import { cars } from "@/constants"

const CarDetails = ({ params }) => {

  const selectedCar = cars.find((car) => (car.id === params.id));

  return (
    <div className="bg-primary w-full overflow-hidden">
  
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <section className={layout.section}>
          
        <div className={`flex-1 flex ${styles.flexCenter} xl:px-0 sm:px-16 px-6 md:my-0 my-10 relative h-[400px]`}>
          <Image src={selectedCar.mainImg} alt={selectedCar.name} className='w-[100%] h-[100%] relative object-fill'/>
        </div>
          <div className={layout.sectionInfo}>
            <h2 className={styles.heading2}>
              لماذا عليك أن تختار<br className="sm:block hidden" /> مسار الغربية
            </h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            نحن ندرك أن رحلة الحج والعمرة هي تجربة روحانية مهمة وتتطلب التخطيط الجيد لضمان الراحة والطمأنينة. من هذا المنطلق، عملنا على تصميم خدماتنا لتلبية احتياجاتك بأعلى مستويات الجودة والمصداقية، لضمان تجربة لا تُنسى من البداية إلى النهاية.
            </p>
          </div>

        </section>
      </div>
    </div>
  </div>
  )
}

export default CarDetails