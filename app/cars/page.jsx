import React from 'react'
import { cars } from '@/constants'
import styles from '../style'
import List from '../../components/List'

const CarsList = () => {
  return (
    <div className="bg-transparent w-full overflow-hidden">
      <div className={`bg-transparent ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <section className={`flex flex-col ${styles.paddingY} sm:py-16 py-6`}>
            <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 `}>
              <div className="flex flex-row justify-between items-center w-full">
                <h1 className="flex-1 font-poppins font-semibold ss:text-[42px] text-[22px] text-primary-foreground ss:leading-[100.8px] leading-[75px]">
                يتوفر لدينا {cars.length} سيارات
                </h1>
                {/* <h1 className="flex-1 font-poppins font-semibold ss:text-[42px] text-[22px] text-dimWhite ss:leading-[100.8px] leading-[75px]">
                  فرز حسب
                </h1> */}
              </div>
                <List items={cars} destination='car'/>
            </div>
          </section>
        </div>
      </div>
    </div>
    
  )
}

export default CarsList