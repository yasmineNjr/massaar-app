'use client'

import styles, { layout } from '@/app/style'
import { useRouter } from 'next/navigation';
import { cars } from '@/constants'
import React from 'react'
import Image from 'next/image'
import Button from './Button'
import { quickBookHandler } from '@/constants';
import { callIcon, whatsapp, whatsappIcon } from '@/public/assets';

const HomeCarsList = () => {

    const router = useRouter();

    const viewDetailsHandler = (id) => {
        
        const path = `/cars/${id}`
        router.push(path);
    }

  return (
    <section className={`flex flex-col ${styles.paddingY}`}>
      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2} text-gold`}>
            سياراتنا في خدمتكم
        </h2>
        {/* <div className='w-full md:mt-0 mt-6 flex-col lg:flex-row'>
          <p className={`${styles.paragraph} w-[100%] lg:w-[50%]`}>
          استكشف قائمة السيارات الأكثر طلبًا لدينا، حيث نوفر لك أفضل الخيارات من حيث الراحة، والأداء، والاعتمادية. اختر من بين مجموعة من السيارات المفضلة للعملاء والمناسبة لكافة الاحتياجات. قم بالحجز الآن للاستمتاع بتجربة قيادة سلسة وآمنة مع السيارات الأعلى تقييمًا لدينا!
          </p>
          <div 
            className="mt-6  w-[100%] lg:w-[50%]">
            <Button title='حجز سريع'  onClickHandler={quickBookHandler}/>
          </div>
        </div> */}
        
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-10">
        {
            cars.map((car) => (
                <div 
                    className="bg-white relative rounded-xl group  shadow-customGray hover:shadow-cardhover min-w-[301px] h-[430px] overflow-hidden cursor-pointer"
                    onClick={() => viewDetailsHandler(car.id)}
                >
                    <div className='h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]'>
                      <Image
                          src={car.mainImg}
                          alt={car.name}
                          layout='fill'
                          objectFit='contain'
                      />
                    </div>
                    <div className="group-hover:flex flex-col max-h-[94.5%] hidden text-customSecondary font-semibold absolute bottom-0 left-0 right-0 bg-gradient-to-r from-gray-300 to-white m-2 p-4 rounded-md">
                        <h1 >{car.model} - {car.name}</h1>
                        <p className="text-sm overflow-y-auto prompt">{car.description}</p>
                        <div className='flex flex-row justify-between items-center'>
                          <p className=" text-sm"></p>
                          {/* {car.pricePerHour} */}
                          <div className='flex flex-row justify-between items-center gap-4'>
                            <Image 
                              src={whatsappIcon} 
                              alt='whatsapp' 
                              className={`object-contain cursor-pointer transition-transform duration-300 hover:scale-125 hover:shadow-2xl`}
                              onClick={(e) => {e.stopPropagation(); quickBookHandler(`مرحباً, هل يمكنك مساعدتي في حجز السيارة ${car.name}`)}}
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
            ))
        }
      </div>
    </section>
  )
}

export default HomeCarsList