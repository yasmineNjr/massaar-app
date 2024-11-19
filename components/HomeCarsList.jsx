'use client'

import styles, { layout } from '@/app/style'
import { cars } from '@/constants'
import React from 'react'
import Image from 'next/image'
import Button from './Button'

const HomeCarsList = () => {

    const viewDetailsHandler = () => {
        console.log('details')
    }

  return (
    <section className={`flex flex-col ${styles.paddingY}`}>
      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2} text-primary`}>
            سياراتنا في خدمتكم
        </h2>
        <div className='w-full md:mt-0 mt-6 flex-col lg:flex-row'>
          <p className={`${styles.paragraph} w-[100%] lg:w-[50%]`}>
          استكشف قائمة السيارات الأكثر طلبًا لدينا، حيث نوفر لك أفضل الخيارات من حيث الراحة، والأداء، والاعتمادية. اختر من بين مجموعة من السيارات المفضلة للعملاء والمناسبة لكافة الاحتياجات. قم بالحجز الآن للاستمتاع بتجربة قيادة سلسة وآمنة مع السيارات الأعلى تقييمًا لدينا!
          </p>
          <div className="mt-6  w-[100%] lg:w-[50%]">
            <Button title='حجز سريع'/>
          </div>
        </div>
        
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
        {
            cars.map((car) => (
                <div 
                    className="rounded-xl group relative shadow-customGray hover:shadow-cardhover min-w-[301px] h-[370px] overflow-hidden"
                    onClick={viewDetailsHandler}
                >
                    <Image
                        src={car.mainImg}
                        alt={car.name}
                        layout='fill'
                    />
                    <div className="group-hover:flex flex-col max-h-[94.5%] hidden text-dimWhite absolute bottom-0 left-0 right-0 bg-gradient-to-r from-transparent via-gray-400 to-transparent  m-2 p-4 rounded-md">
                        <h1 >{car.model} - {car.name}</h1>
                        <p className="text-sm overflow-y-auto prompt">{car.description}</p>
                        <p className=" text-sm">{car.pricePerHour}</p>
                    </div>
                </div>
            ))
        }
      </div>
    </section>
  )
}

export default HomeCarsList