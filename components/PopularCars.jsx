'use client'

import { useRef } from "react"
import Image from "next/image"
import { cars } from "@/constants"
import styles, { layout } from "@/app/style"
import Button from "./Button"
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

const PopularCars = () => {

    const scrollRef = useRef(null);

    const scroll = (direction) => {
      const { current } = scrollRef;
      if(direction === 'left'){
        current.scrollLeft -= 300;
      }else {
        current.scrollLeft += 300;
      }
    }

  return (                
    <section className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      {/* <div className="flex-1 flex justify-center items-start flex-col w-[50%] bg-yellow-500"> */}
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
            السيارات الأكثر طلباً
        </h2>
        <div className='w-full md:mt-0 mt-6'>
          <p className={`${styles.paragraph} max-w-[450px]`}>
          استكشف قائمة السيارات الأكثر طلبًا لدينا، حيث نوفر لك أفضل الخيارات من حيث الراحة، والأداء، والاعتمادية. اختر من بين مجموعة من السيارات المفضلة للعملاء والمناسبة لكافة الاحتياجات. قم بالحجز الآن للاستمتاع بتجربة قيادة سلسة وآمنة مع السيارات الأعلى تقييمًا لدينا!
          </p>
        </div>
        <div className="mt-6">
            <Button title='عرض الكل'/>
        </div>
      </div>
      {/* <div className="flex-1 flex flex-row w-[50%] md:my-5 my-0 relative justify-center items-start bg-white"> */}
      <div className={`${layout.sectionImg} lg:w-[50%] w-[100%]`}>
        <div className="flex flex-row overflow-x-scroll no-scrollbar overflow-auto" ref={scrollRef}>
          {cars.map((car, index) => (
            <div className={`relative min-w-[301px] h-[370px]  ${index !== cars.length-1 ? 'ml-6' : 'ml-0'} flex justify-center items-center`} key={`gallery_image-${index + 1}`}>
              <Image src={car.img} alt={car.name} layout="fill"/>
            </div>
          ))}
        </div>
        <div className="w-[100%] flex justify-between items-center absolute py-0 px-4 bottom-10">
          <BsArrowRightShort className="text-secondary ss:text-[38px] text-[22px] cursor-pointer rounded-xl bg-dark-300" onClick={() => scroll('right')} />
          <BsArrowLeftShort className="text-secondary ss:text-[38px] text-[22px] cursor-pointer rounded-xl bg-dark-300" onClick={() => scroll('left')} />
        </div>
      </div>
    </section>
  )
}

export default PopularCars


