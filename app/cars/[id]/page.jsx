'use client'

import styles, { layout } from "@/app/style"
import CarReservationForm from "@/components/forms/CarReservationForm";
import { cars } from "@/constants";
import Image from "next/image"
import { useState } from "react";

const CarDetails = ({ params }) => {

  const selectedCar = cars.find((car) => (car.id === params.id));

  const [main, setMain] = useState(selectedCar.mainImg);


  return (
    <div className="bg-primary w-full overflow-hidden">
  
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <div className="text-center my-10">
          <h2 className={styles.heading2}>
              حجز سيارة {selectedCar.name}
          </h2>
        </div>
         
        <section className={layout.section}>
            
          <div className={`flex-1 flex flex-col ${styles.flexCenter} xl:px-0 sm:px-16 px-6 md:my-0 my-10 relative h-[400px] lg:w-[50%] w-[100%] `}>
            <div className="w-full max-w-4xl mx-auto">
              {/* Main Image */}
              <div className="relative w-full h-64 md:h-96">
                <Image
                  src={main}
                  alt="Main Image"
                  layout="fill"
                  objectFit="cover"
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
                      objectFit="cover"
                      className="rounded-lg cursor-pointer"
                      onClick={() => setMain(car)}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className={`${styles.flexCenter} xl:px-0 sm:px-16 px-6 md:my-0 my-10 `}>
            
            <CarReservationForm/>

          </div>

        </section>
      </div>
    </div>
  </div>
  )
}

export default CarDetails
