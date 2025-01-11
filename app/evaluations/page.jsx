'use client'

import { review } from '@/public/assets'
import React, { useEffect, useState } from 'react'
import styles, { layout } from '../style'
import Image from 'next/image'
import ClientEvaluationForm from '@/components/forms/ClientEvaluationForm'
import { reviewList } from '@/constants'
import ReactStars from "react-rating-stars-component";

const CustomerEvaluations = () => {

  const [evaluations, setEvaluations] = useState([]); // Store the filtered orders
  const [isLoading, setIsLoading] = useState(true); // Track loading state
    
    useEffect(() => {
      const fetchEvaluations = async () => {
        try {
          setIsLoading(true); // Set loading to true before fetching
          const response = await fetch("/api/evaluations");
          if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
          }
          const data = await response.json();
          const approvedItems = data.filter(item => item.is_approved === 1);
          setEvaluations(approvedItems); // Store the full list of orders
          // console.log(data);
          // console.log(approvedItems);
        } catch (error) {
          console.error("Failed to fetch Evaluations:", error.message);
        }finally {
          setIsLoading(false); // Set loading to false after fetching
        }
      };
  
      fetchEvaluations();
    }, []);
  
  return (
    <div className="bg-transparent w-full overflow-hidden">
      <div className={`bg-transparent ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <div className="text-center my-5 lg:my-10">
            <h2 className={`${styles.heading2} text-right text-gold`}>
                تقييم العملاء
            </h2>
            <p className={`font-semibold text-[18px] text-right text-primary-foreground`}>
              بإمكانك إضافة تعليقك بآخر الصفحة
              <span><a href='#review' className='text-customGold'> أنقر هنا</a></span>
            </p>
          </div>

          <section className={`flex flex-col`}>

            <div className={`flex flex-col`}>
              {/* <h1 className={`${styles.paragraph} text-gold`}>شهادات عملائنا</h1> */}
              {
                isLoading 
                ? 
                <div className="flex justify-center items-center">
                  <div className="w-12 h-12 border-4 border-t-transparent border-l-gold border-b-gold border-r-gold rounded-full animate-spin"></div>
                </div> 
                : 
                evaluations.map((review, idx) => (
                  <div key={idx} className='flex flex-col gap-3 mt-10 rounded-xl p-5 bg-gradient-to-r from-gray-300 to-white shadow-customGray'>
                     {/* transition-transform duration-300 hover: */}
                    <h2 className='font-bold'>{review.date}</h2>
                    <ReactStars
                        count={5}
                        size={30}
                        activeColor="#ffd700"
                        value={review.level}
                    />
                    <p className='font-semibold text-customSecondary'>{review.text}</p>
                    <p className='font-bold'>{review.client_name}</p>
                  </div>
                ))
              }
            </div>
            <div id='review' className='mt-20'>
              <h1 className={`${styles.paragraph} text-primary-foreground`}>أدخل المعلومات في الأسفل لإضافة التعليق</h1>
            </div>
            <div className='mt-5 flex flex-col lg:flex-row  w-full shadow-2xl overflow-hidden rounded-xl text-customGray bg-gradient-to-r from-gray-300 to-white shadow-customGray'>
              {/* <div className="relative h-70 md:h-75 w-full lg:w-[50%]"> */}
              <div className="relative h-60 sm:h-72 md:h-80 lg:h-auto w-full lg:w-[50%]">
                <Image
                  src={review}
                  alt="Evaluation Image"
                  layout="fill"
                  objectFit="cover"
                  // className="rounded-lg"
                />
              </div>
              {/* <div className={`${styles.flexCenter} xl:px-0 sm:px-16 px-6 py-10 md:my-0 my-10 w-full lg:w-[50%]`}> */}
              <div className={`${styles.flexCenter} px-6 py-10 sm:px-8 md:px-16 w-full lg:w-[50%]`}>
                <ClientEvaluationForm/>             
              </div>
            </div>

          </section>
        </div>
      </div>
  </div>

  )
}

export default CustomerEvaluations