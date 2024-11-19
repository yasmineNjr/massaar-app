'use client'

import styles from '@/app/style';
import { arrowUp } from '../public/assets'
import Image from 'next/image';

const QuickBook = () => {
  
  const quickBookHandler = () => {
    const phoneNumber = "+966566633161"; // Replace with your number
    const message = "مرحباً. كيف يمكنني مساعدتك";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  }

  return(
  <div 
      className={`shadow-customGray ${styles.flexCenter} w-[200px] h-[70px] rounded-3xl bg-gold-gradient p-[2px] cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-2xl`}
      onClick={quickBookHandler}
    >
      <div className={`${styles.flexCenter} flex-col bg-gradient-to-r from-customLightGreen to-white  w-[100%] h-[100%] rounded-3xl`}>
        <div className={`${styles.flexStart} flex-row`}>
          <p className="text-[#b89f00] font-poppins font-medium text-[18px] leading-[23.4px] mr-2">
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
