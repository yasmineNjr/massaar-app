import React from 'react'
import { hotels } from '@/constants'
import styles, { layout} from '../style'
import List from '../../components/List'

const HotelsList = () => {

  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <section className={`flex flex-col ${styles.paddingY} `}>
            <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
              <div className="flex flex-row justify-between items-center w-full">
                <h1 className="flex-1 font-poppins font-semibold ss:text-[42px] text-[22px] text-dimWhite ss:leading-[100.8px] leading-[75px]">
                يتوفر لدينا {hotels.length} فنادق
                </h1>
                {/* <h1 className="flex-1 font-poppins font-semibold ss:text-[42px] text-[22px] text-dimWhite ss:leading-[100.8px] leading-[75px]">
                  فرز حسب
                </h1> */}
              </div>
              <List items={hotels} id='hotel'/>
            </div>
          </section>
        </div>
      </div>
    </div>
    
  )
}

export default HotelsList