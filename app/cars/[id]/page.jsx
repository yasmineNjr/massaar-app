'use client'

import styles, { layout } from "@/app/style"
import CarReservationForm from "@/components/forms/CarReservationForm";
import { cars } from "@/constants";
import Image from "next/image"
import { useState } from "react";

const CarDetails = ({ params }) => {

  console.log(params)
  const selectedCar = cars.find((car) => (car.id === params.id));

  const [main, setMain] = useState(selectedCar.mainImg);


  return (
  <div className="bg-transparent w-full overflow-hidden ">
    <div className={`bg-transparent bg-gold ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <div className="text-center my-10">
          <h2 className={`${styles.heading2} text-right text-primary`}>
              حجز سيارة {selectedCar.name}
          </h2>
        </div>
         
        <section className={`${layout.section} rounded-xl shadow-customGray mb-10 bg-gradient-to-r from-transparent via-gray-400 to-transparent`}>
            
          <div className={`flex-1 flex flex-col ${styles.flexCenter} xl:px-0 sm:px-16 px-6 md:my-0 my-5 relative h-[525px] lg:w-[50%] w-[100%] `}>
            <div className="w-full max-w-4xl mx-auto">
              {/* Main Image */}
              <div className="relative w-full  min-w-[301px] h-[370px] ">
                <Image
                  src={main}
                  alt="Main Image"
                  layout="fill"
                  // objectFit="cover"
                  className="rounded-lg"
                />
              </div>

              {/* Thumbnail Row */}
              <div className="flex flex-row justify-between overflow-x-auto mt-4 w-full">
                {selectedCar.imgs.map((car, index) => (
                  <div key={index} className="relative h-24 w-24 md:h-32 md:w-32">
                    <Image
                      src={car}
                      alt={selectedCar.name}
                      layout="fill"
                      // objectFit="cover"
                      className="rounded-lg cursor-pointer"
                      onClick={() => setMain(car)}
                    />
                  </div>
                ))}
              </div>
            </div>

            
            
          </div>
          <div className={`${styles.flexCenter} xl:px-0 sm:px-16 px-6 md:my-0 my-10 lg:w-[50%] w-[100%]`}>
            
            <CarReservationForm item={selectedCar}/>

          </div>

        </section>
      </div>
    </div>
  </div>
  )
}

export default CarDetails
