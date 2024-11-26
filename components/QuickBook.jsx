'use client'

import styles from '@/app/style';
import { arrowUp } from '../public/assets'
import Image from 'next/image';
import { quickBookHandler } from '@/constants';

const QuickBook = () => {
  
  return(
  <div 
      className={`shadow-customGray ${styles.flexCenter} w-[200px] h-[70px] rounded-3xl bg-gold-gradient p-[2px] cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-2xl mt-5`}
      onClick={() => quickBookHandler("مرحباً. هل يمكنك مساعدتي في عملية الحجز")}
    >
      <div className={`${styles.flexCenter} flex-col bg-gradient-to-r from-customLightGreen to-white  w-[100%] h-[100%] rounded-3xl`}>
        <div className={`${styles.flexStart} flex-row`}>
          <p className="text-customGold font-poppins font-medium text-[18px] leading-[23.4px] mr-2">
            {/* <span className="text-gradient">حجز</span> */}
            حجز سريع
          </p>
          <Image src={arrowUp} alt='arrow' className='w-[23px] h-[23px] object-contain'/>
        </div>
        {/* <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
            <span className="text-gradient">سريع</span>
          </p> */}
      </div>
    </div>
  )
    
  }

export default QuickBook
