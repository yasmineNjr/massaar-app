'use client'

import styles, { layout } from "@/app/style"
import HotelReservationForm from "@/components/forms/HotelReservationForm";
import { hotels } from "@/constants";
import Image from "next/image"
import { useRef, useState } from "react";
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { FaWifi } from "react-icons/fa6";
import { TbAirConditioning } from "react-icons/tb";
import { MdFreeBreakfast } from "react-icons/md";
import { IoRestaurant } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { PiMoneyWavyFill } from "react-icons/pi";
import ReactStars from "react-rating-stars-component";

const HotelDetails = ({ params }) => {

  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if(direction === 'left'){
      current.scrollLeft -= 300;
    }else {
      current.scrollLeft += 300;
    }
  }

  const selectedHotel= hotels.find((hotel) => (hotel.id === params.id));

  const [main, setMain] = useState(selectedHotel.mainImg);


  return (
    <div className="bg-transparent w-full overflow-hidden">
  
    <div className={`bg-transparent ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <div className="text-center my-10">
          <h2 className={`${styles.heading2} text-right text-primary`}>
              حجز في الفندق {selectedHotel.name}
          </h2>
        </div>
         
        <section className={`${layout.section} rounded-xl shadow-customGray mb-10 bg-gradient-to-r from-transparent via-gray-400 to-transparent`}>
            
          <div className={`flex-1 flex flex-col ${styles.flexCenter} xl:px-0 sm:px-16 px-6 md:my-0 my-5 relative h-full lg:w-[50%] w-[100%] `}>
            <div className="w-full max-w-4xl mx-auto">
              {/* Main Image */}
              <div className="relative rounded-xl w-full h-80 md:h-96 mb-5 shadow-customGray overflow-hidden">
                <Image
                  src={main}
                  alt="Main Image"
                  layout="fill"
                  // objectFit="cover"
                />
              </div>

              <div className={`${layout.sectionImg} w-full h-30 `}>
                <div className="flex flex-row overflow-x-scroll no-scrollbar overflow-auto" ref={scrollRef}>
                  {selectedHotel.imgs.map((hotel, index) => (
                    <div 
                      className={`relative cursor-pointer rounded-xl group shadow-customGray hover:shadow-cardhover overflow-hidden min-w-[301px] h-[370px]  ${index !== hotel.length-1 ? 'ml-6' : 'ml-0'} flex justify-center items-center cursor-pointer`} key={`gallery_image-${index + 1}`}
                      onClick={() => setMain(hotel)}
                    >
                      <Image src={hotel} alt={hotel.name} layout="fill"/>
                    </div>
                  ))}
                </div>
                <div className="w-[100%] flex justify-between items-center absolute py-0 px-4 bottom-10">
                  <BsArrowRightShort className="text-secondary ss:text-[38px] text-[22px] cursor-pointer rounded-xl bg-dark-300" onClick={() => scroll('right')} />
                  <BsArrowLeftShort className="text-secondary ss:text-[38px] text-[22px] cursor-pointer rounded-xl bg-dark-300" onClick={() => scroll('left')} />
                </div>
              </div>

              <div className='p-5'>
                <div >
                    <h1 className='text-xl text-customSecondary'>{selectedHotel.name}</h1>
                </div>
                <div className='flex flex-row gap-2 mt-2'>
                    <FaLocationDot/>
                    <p className='text-customSecondary font-semibold'>{selectedHotel.location}</p>
                </div>
                <div className='flex flex-row gap-2 mt-2'>
                    <PiMoneyWavyFill  size={20}/>
                    <h1 className='text-primary font-bold'>{selectedHotel.pricePerHour}</h1>
                </div>
                
                <ReactStars
                    count={5}
                    size={30}
                    activeColor="#ffd700"
                    value={selectedHotel.rating}
                />
              

                <div >
                    <p className='ttext-customSecondary font-semibold'>{selectedHotel.description}</p>
                </div>
                <div className='flex flex-row items-center justify-start mt-5 gap-5'>
                    {selectedHotel.wifi && <FaWifi size={24}/>}
                    {selectedHotel.conditioning && <TbAirConditioning size={24}/>}
                    {selectedHotel.breakfast && <MdFreeBreakfast size={24}/>}
                    {selectedHotel.meal && <IoRestaurant size={24}/>}
                </div>
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
