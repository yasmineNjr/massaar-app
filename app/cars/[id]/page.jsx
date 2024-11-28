'use client'

import styles, { layout } from "@/app/style"
import CarReservationForm from "@/components/forms/CarReservationForm";
import { cars } from "@/constants";
import Image from "next/image"
import { useRef, useState } from "react";
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { MdGpsFixed } from "react-icons/md";
import { MdOutlineHdrAuto } from "react-icons/md";
import { FaPerson } from "react-icons/fa6";
import { PiMoneyWavyFill } from "react-icons/pi";
import ReactStars from "react-rating-stars-component";
import { QuickBook } from "@/components";

const CarDetails = ({ params }) => {

  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if(direction === 'left'){
      current.scrollLeft -= 300;
    }else {
      current.scrollLeft += 300;
    }
  }
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
         
        <section className={`flex flex-col ${styles.paddingY} rounded-xl shadow-customGray mb-10 bg-gradient-to-r from-transparent via-gray-400 to-transparent`}>
            
          <div className={`flex-1 flex flex-col ${styles.flexCenter} xl:px-0 sm:px-16 px-6 md:my-0 my-5 relative w-full `}>
            <div className="w-full max-w-4xl mx-auto">
              {/* Main Image */}
              <div className="relative rounded-xl w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] mb-5 shadow-customGray overflow-hidden">
                <Image
                  src={main}
                  alt="Main Image"
                  layout="fill"
                  objectFit="cover" // Ensures better filling on larger screens
                  // className="object-cover sm:object-contain" // Responsive object fit
                />
              </div>

              <div className={`${layout.sectionImg} w-full h-30 `}>
                <div className="flex flex-row overflow-x-scroll no-scrollbar overflow-auto" ref={scrollRef}>
                  {selectedCar.imgs.map((car, index) => (
                    <div 
                      className={`relative cursor-pointer rounded-xl group shadow-customGray hover:shadow-cardhover overflow-hidden min-w-[301px] h-[370px]  ${index !== selectedCar.imgs.length-1 ? 'ml-6' : 'ml-0'} flex justify-center items-center cursor-pointer`} key={`gallery_image-${index + 1}`}
                      onClick={() => setMain(car)}
                    >
                      <Image src={car} alt={car.name} layout="fill"/>
                    </div>
                  ))}
                </div>
                <div className="w-[100%] flex justify-between items-center absolute py-0 px-4 bottom-10">
                  <BsArrowRightShort className="text-secondary ss:text-[38px] text-[22px] cursor-pointer rounded-xl bg-dark-300" onClick={() => scroll('right')} />
                  <BsArrowLeftShort className="text-secondary ss:text-[38px] text-[22px] cursor-pointer rounded-xl bg-dark-300" onClick={() => scroll('left')} />
                </div>
              </div>
            </div>

            <div className='p-5 w-full max-w-4xl mx-auto'>
              <div>
                  <h1 className='text-xl text-customSecondary'>{selectedCar.model} - {selectedCar.name}</h1>
              </div>
            
              <div className='flex flex-row gap-2 mt-2'>
                  <PiMoneyWavyFill  size={20}/>
                  <h1 className='text-primary font-bold'>{selectedCar.pricePerHour}</h1>
              </div>
              
              <ReactStars
                  count={5}
                  size={30}
                  activeColor="#ffd700"
                  value={selectedCar.rating}
              />

              <div>
                  <p className='ttext-customSecondary font-semibold'>{selectedCar.description}</p>
              </div>

              <div className='flex flex-row gap-2 mt-2'>
                  <FaPerson size={22}/>
                  <p className='text-customSecondary font-semibold'>{selectedCar.passengers}</p>
              </div>

              <div className='flex flex-row items-center justify-start mt-5 gap-5'>
                  {selectedCar.GPS && <MdGpsFixed  size={24}/>}
                  {selectedCar.automatic && <MdOutlineHdrAuto  size={24}/>}
              </div>
            </div>
          </div>

          <div className={`${styles.flexCenter} flex-col xl:px-0 sm:px-16 px-6 md:my-0 my-10 w-full max-w-4xl mx-auto`}>
            <CarReservationForm item={selectedCar}/>
          </div>

        </section>
      </div>
    </div>
  </div>
  )
}

export default CarDetails
