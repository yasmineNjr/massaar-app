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
            
            <section className='sm:py-10 py-0'> 
                <HotelAddForm/>
            </section> 
      </div>
    </div>
  </div>
  )
}

export default NewHotel

