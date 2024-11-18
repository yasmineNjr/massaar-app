'use client'

import { hero1 } from '@/public/assets'
import React from 'react'
import styles, { layout } from '../style'
import Image from 'next/image'
import ClientEvaluationForm from '@/components/forms/ClientEvaluationForm'
import { reviewList } from '@/constants'
import ReactStars from "react-rating-stars-component";

const CustomerEvaluations = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <div className="text-center my-10">
            <h2 className={`${styles.heading2} text-right`}>
                تقييم العملاء
            </h2>
          </div>
          
          <section className={`${styles.paddingY} flex flex-col`}>

            <div className='flex flex-row w-full'>
              {/* <div className={`hidden md:block flex-1 flex-col ${styles.flexCenter} xl:px-0 sm:px-16 px-6 md:my-0 my-5 relative h-[525px] lg:w-[50%] w-[100%] `}> */}
                {/* <div className="w-full max-w-4xl mx-auto"> */}
                  
                  <div className="relative h-64 md:h-96 w-[50%]">
                    <Image
                      src={hero1}
                      alt="Evaluation Image"
                      layout="fill"
                      objectFit="cover"
                      // className="rounded-lg"
                    />
                  </div>
                {/* </div> */}
              {/* </div> */}
              <div className={`${styles.flexCenter} xl:px-0 sm:px-16 px-6 md:my-0 my-10 lg:w-[50%] w-[100%]`}>
                <ClientEvaluationForm/>             
              </div>
            </div>

            <div className={`flex flex-col mt-10 text-dimWhite`}>
              <h1 className={`${styles.heading2}`}>شهادات عملائنا</h1>
              {
                reviewList.map((review) => (
                  <div key={review.id} className='flex flex-col gap-6 mt-5 rounded-md bg-black-gradient-2 p-6 text-white'>
                    <h2 className='font-bold'>{review.date}</h2>
                    <ReactStars
                        count={5}
                        size={30}
                        activeColor="#ffd700"
                        value={5}
                    />
                    <p>{review.desc}</p>
                    <p>{review.client}</p>
                  </div>
                ))
              }
            </div>

          </section>
        </div>
      </div>
  </div>

  )
}

export default CustomerEvaluations