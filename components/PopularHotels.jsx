'use client'

import { useRef } from "react"
import { useRouter } from 'next/navigation';
import Image from "next/image"
import { hotels, quickBookHandler } from "@/constants"
import styles, { layout } from "@/app/style"
import Button from "./Button"
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { callIcon, whatsappIcon } from "@/public/assets";

const PopularHotels = () => {

    const scrollRef = useRef(null);
    const router = useRouter();

    const viewDetailsHandler = (id) => {
        
        const path = `/hotels/${id}`
        router.push(path);
    }

    const viewAllHandler = () => {
        
      const path = `/hotels`
      router.push(path);
    }

    const scroll = (direction) => {
      const { current } = scrollRef;
      if(direction === 'left'){
        current.scrollLeft -= 300;
      }else {
        current.scrollLeft += 300;
      }
    }

  return (
    <section className={`flex flex-col ${styles.paddingY}`}>
      
       <h2 className={`${styles.heading2} text-gold mb-5`}>
          احجز فندقك من عندنا
      </h2>
      {/* <div className={`${layout.sectionImg} w-[100%] md:order-1 order-2`}> */}
      <div className={`${layout.sectionImg} w-[100%]`}>
        <div className="flex flex-row overflow-x-scroll no-scrollbar overflow-auto" ref={scrollRef}>
          {hotels.filter((h) => h.rating === 5).map((hotel, index) => (
            <div 
              className={`relative rounded-xl group shadow-customGray hover:shadow-cardhover overflow-hidden min-w-[301px] h-[370px]  ${index !== hotel.length-1 ? 'ml-6' : 'ml-0'} flex justify-center items-center cursor-pointer`} key={`gallery_image-${index + 1}`}
              onClick={() => viewDetailsHandler(hotel.id)}
            >
              <Image src={hotel.mainImg} alt={hotel.name} layout="fill" className="transition-transform duration-300 hover:scale-105"/>
              <div className="group-hover:flex flex-col max-h-[94.5%] hidden text-customSecondary font-semibold absolute bottom-0 left-0 right-0 bg-gradient-to-r from-gray-300 to-white m-2 p-4 rounded-md">
                  <h1 >{hotel.name}</h1>
                  <p className="text-sm overflow-y-auto prompt">{hotel.description}</p>
                  <div className='flex flex-row justify-between items-center'>
                    <p className=" text-sm"></p>
                    {/* {hotel.pricePerHour} */}
                    <div className='flex flex-row justify-between items-center gap-4'>
                      <Image 
                        src={whatsappIcon} 
                        alt='whatsapp' 
                        className={`object-contain cursor-pointer transition-transform duration-300 hover:scale-125 hover:shadow-2xl`}
                        onClick={(e) => {e.stopPropagation(); quickBookHandler(`مرحباً, هل يمكنك مساعدتي في حجز الفندق ${hotel.name}`)}}
                      />
                      <a href="tel:+966566633161" target="_blank" rel="noopener noreferrer">
                        <Image 
                          src={callIcon} 
                          alt='call' 
                          className={`object-contain cursor-pointer transition-transform duration-300 hover:scale-125 hover:shadow-2xl`}
                          onClick={(e) => {e.stopPropagation();}}
                        />
                      </a>
                    </div>
                  </div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-[100%] flex justify-between items-center absolute py-0 px-4 bottom-10">
          <BsArrowRightShort className="text-secondary ss:text-[38px] text-[22px] cursor-pointer rounded-xl bg-gradient-to-r from-transparent via-gray-400 to-transparent " onClick={() => scroll('right')} />
          <BsArrowLeftShort className="text-secondary ss:text-[38px] text-[22px] cursor-pointer rounded-xl bg-gradient-to-r from-transparent via-gray-400 to-transparent " onClick={() => scroll('left')} />
        </div>
      </div>
      <div className='w-full mt-10'>
        <p className={`${styles.paragraph} text-dimWhite`}>
        نقدم لك قائمة بأفضل الفنادق التي تحظى بأعلى معدلات الحجز والطلب من قبل الحجاج والمعتمرين. تم اختيار هذه الفنادق بعناية بناءً على تقييمات الزوار، الموقع الاستراتيجي القريب من الحرمين الشريفين، والخدمات المتكاملة التي توفرها لتلبية احتياجات ضيوف الرحمن. ستجد مجموعة من الخيارات التي تناسب مختلف الميزانيات. احجز الآن لتضمن مكانك، وتمتع بتجربة روحانية مميزة .
        </p>
        <div className="mt-6" >
          <Button title='عرض الكل' onClickHandler={viewAllHandler}/>
        </div>
      </div>
    </section>
  )
}

export default PopularHotels

