'use client'

import React, { useState } from 'react'
import styles from '../style'
import { popularQuestions } from '@/constants'
import Expander from '@/components/Expander';

const PopularQuestions = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-transparent w-full overflow-hidden">
      <div className={`bg-transparent ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <section className={`flex flex-col ${styles.paddingY} sm:py-16 py-6 `}>
            <div className={`flex-1 flex flex-col xl:px-0 sm:px-16 px-6 `}>
              <div className="flex flex-col w-full text-right">
                <h1 className="flex-1 font-poppins font-semibold ss:text-[42px] text-[22px] text-gold ss:leading-[100.8px] leading-[75px]">
                الأسئلة المتكررة
                </h1>
                <p className={`${styles.paragraph}`}>
                  نحن نعمل باستمرار لضمان توفير أفضل خدمة وأكثر فعالية وكفاءة من أجلك
                </p>
              </div>

              {/* <Expander title="Expand Me!" content="This is the content inside the expander." /> */}

              <div className={`flex text-primary font-poppins font-bold text-[16px] my-6 `}>
                <ul className='list-none flex flex-col justify-end items-center flex-1'>
                  {popularQuestions.map((question, index) => (
                      // <li key={question.id} 
                      //     className={`w-full bg-gradient-to-r from-gray-300 to-white shadow-customGray cursor-pointer ${index === popularQuestions.length-1 ?' mb-0' : 'mb-4'}  p-6 rounded-2xl`}>
                      //   <h2>{question.question}</h2>
                      // </li> 
                      <Expander 
                        key={question.id} 
                        title={question.question} 
                        content={question.answer} 
                        className={`w-full bg-gradient-to-r from-gray-300 to-white shadow-customGray cursor-pointer ${index === popularQuestions.length-1 ?' mb-0' : 'mb-4'}  p-6 rounded-2xl`}
                        />
                    ))}
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default PopularQuestions