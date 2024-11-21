import styles, { layout } from '@/app/style'
import React from 'react'
import HotelAddForm from './forms/HotelAddForm'

const NewHotel= () => {
  return (
    <div className="w-full overflow-hidden">
  
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <div className="text-center">
                    <h2 className={`${styles.heading2} text-right`}>
                        إضافة فندق جديد
                    </h2>
                </div>
            
            <section className='sm:py-10 py-0 shadow-customGray shadow-2xl overflow-hidden rounded-xl text-customGray transition-transform duration-300 bg-gradient-to-r from-transparent via-gray-400 to-transparent'> 
                <HotelAddForm/>
            </section> 
      </div>
    </div>
  </div>
  )
}

export default NewHotel

