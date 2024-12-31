'use client'

import { review } from '@/public/assets'
import React from 'react'
import styles, { layout } from '../style'
import Image from 'next/image'
import ClientEvaluationForm from '@/components/forms/ClientEvaluationForm'
import { reviewList } from '@/constants'
import ReactStars from "react-rating-stars-component";

const CustomerEvaluations = () => {
  return (
    <div className="bg-transparent w-full overflow-hidden">
      <div className={`bg-transparent ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          {/* <div className="text-center my-5 lg:my-10">
            <h2 className={`${styles.heading2} text-right text-primary-foreground`}>
                تقييم العملاء
            </h2>
          </div> */}

          <section className={`flex flex-col`}>

            {/* <div className='flex flex-col lg:flex-row  w-full shadow-customGray shadow-2xl overflow-hidden rounded-xl text-customGray transition-transform duration-300 bg-gradient-to-r from-transparent via-gray-400 to-transparent'>
                  <div className="relative h-70 md:h-75 w-full lg:w-[50%]">
                    <Image
                      src={review}
                      alt="Evaluation Image"
                      layout="fill"
                      objectFit="cover"
                      // className="rounded-lg"
                    />
                  </div>
              <div className={`${styles.flexCenter} xl:px-0 sm:px-16 px-6 py-10 md:my-0 my-10 w-full lg:w-[50%]`}>
                <ClientEvaluationForm/>             
              </div>
            </div> */}

            <div className={`flex flex-col mt-20`}>
              <h1 className={`${styles.heading2} text-primary-foreground`}>شهادات عملائنا</h1>
              {
                reviewList.map((review) => (
                  <div key={review.id} className='flex flex-col gap-8 mt-10 rounded-xl p-5 bg-gradient-to-r from-gray-300 to-white shadow-customGray'>
                     {/* transition-transform duration-300 hover: */}
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