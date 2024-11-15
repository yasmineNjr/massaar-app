'use client'

import styles, { layout } from "@/app/style"
import HotelReservationForm from "@/components/forms/HotelReservationForm";
import { hotels } from "@/constants";
import Image from "next/image"
import { useState } from "react";

const HotelDetails = ({ params }) => {

  const selectedHotel= hotels.find((hotel) => (hotel.id === params.id));

  const [main, setMain] = useState(selectedHotel.mainImg);


  return (
    <div className="bg-primary w-full overflow-hidden">
  
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <div className="text-center my-10">
          <h2 className={`${styles.heading2} text-right`}>
              حجز الفندق {selectedHotel.name}
          </h2>
        </div>
         
        <section className={layout.section}>
            
          <div className={`flex-1 flex flex-col ${styles.flexCenter} xl:px-0 sm:px-16 px-6 md:my-0 my-5 relative h-[525px] lg:w-[50%] w-[100%] `}>
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
                {selectedHotel.imgs.map((hotel, index) => (
                  <div key={index} className="relative h-24 w-24 md:h-32 md:w-32">
                    <Image
                      src={hotel}
                      alt={selectedHotel.name}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg cursor-pointer"
                      onClick={() => setMain(hotel)}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className={`${styles.flexCenter} xl:px-0 sm:px-16 px-6 md:my-0 my-10 lg:w-[50%] w-[100%]`}>
            
            <HotelReservationForm item={selectedHotel}/>

          </div>

        </section>
      </div>
    </div>
  </div>
  )
}

export default HotelDetails
