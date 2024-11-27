'use client'

import styles from '@/app/style';
import { arrowUp, whatsappIcon, whatsapp } from '../public/assets'
import Image from 'next/image';
import { quickBookHandler } from '@/constants';

const QuickBook = () => {
  
  return(
  <div 
      className={`shadow-customGray ${styles.flexCenter} w-[250px] h-[70px] rounded-3xl bg-gold-gradient p-[2px] cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-2xl mt-5`}
      onClick={() => quickBookHandler("؟مرحباً. هل يمكنك مساعدتي في عملية الحجز")}
    >
      <div className={`${styles.flexCenter} flex-col bg-gradient-to-r from-customLightGreen to-white  w-[100%] h-[100%] rounded-3xl`}>
        <div className={`${styles.flexStart} flex-row justify-between items-center gap-3`}>
          <p className="text-customGold font-poppins font-bold text-[22px] leading-[23.4px] mr-2">
            حجز سريع
          </p>
          <Image 
            src={whatsapp} 
            alt='whatsapp' 
            className={`object-contain cursor-pointer `}
          />
        </div>
      </div>
    </div>
  )
    
  }

export default QuickBook
