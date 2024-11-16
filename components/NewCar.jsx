import styles, { layout } from '@/app/style'
import { hero1 } from '@/public/assets'
import Image from 'next/image'
import React from 'react'
import CarReservationForm from './forms/CarReservationForm'
import CarAddForm from './forms/CarAddForm'

const NewCar = () => {
  return (
    <div className="w-full overflow-hidden">
  
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <div className="text-center my-10">
                <h2 className={`${styles.heading2} text-right`}>
                    إضافة سيارة جديدة
                </h2>
            </div>
         
        <section className={`${layout.section}`}>
            
            <div className={`flex-1 flex flex-col ${styles.flexCenter} xl:px-0 sm:px-16 px-6 md:my-0 my-5 relative h-[525px] lg:w-[50%] w-[100%] `}>
              <div className="w-full max-w-4xl mx-auto">
                {/* Main Image */}
                <div className="relative w-full h-64 md:h-96">
                  <Image
                    src={hero1}
                    alt="Main Image"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
  
              </div>
            </div>
            <div className={`${styles.flexCenter} xl:px-0 sm:px-16 px-6 md:my-0 my-10 lg:w-[50%] w-[100%]`}>
              <CarAddForm/>
            </div>
  
          </section> 
      </div>
    </div>
  </div>
  )
}

export default NewCar