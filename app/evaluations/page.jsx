import { hero1 } from '@/public/assets'
import React from 'react'
import styles, { layout } from '../style'
import Image from 'next/image'
import ClientEvaluationForm from '@/components/forms/ClientEvaluationForm'

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

            <div className={`${styles.flexCenter}   bg-white`}>
              evaluation list
            </div>

          </section>
        </div>
      </div>
  </div>

  )
}

export default CustomerEvaluations