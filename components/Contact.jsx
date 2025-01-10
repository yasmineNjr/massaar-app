import styles from '@/app/style'
import { quickBookHandler } from '@/constants';
import { callIcon, whatsappIcon } from '@/public/assets';
import Image from 'next/image';
import React from 'react'

const Contact = () => {
  return (
    <section className={`flex flex-1 flex-col items-center justify-center text-center bg-transparent ${styles.paddingY} `}>
        <h2 className={`${styles.heading2} text-primary-foreground `}>
            نسعد بتواصلك معنا
        </h2>
        <h2 className={`${styles.heading2} text-gold `}>
            966566633161
        </h2>

         <div className='flex flex-row justify-between mt-5 w-full sm:w-[50%]'>
            <Image 
                src={whatsappIcon} 
                alt='whatsapp' 
                width={75}
                className={`object-contain cursor-pointer transition-transform duration-300 hover:scale-125 hover:shadow-2xl`}
                onClick={(e) => {e.stopPropagation(); quickBookHandler(`مرحباً, هل يمكنك مساعدتي في عملية الحجز `)}}
            />
            <a href="tel:+966566633161" target="_blank" rel="noopener noreferrer">
            <Image 
                src={callIcon} 
                alt='call' 
                width={75}
                className={`object-contain cursor-pointer transition-transform duration-300 hover:scale-125 hover:shadow-2xl`}
                onClick={(e) => {e.stopPropagation();}}
            />
            </a>
        </div>
    </section>
  )
}

export default Contact