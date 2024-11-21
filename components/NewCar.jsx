import styles, { layout } from '@/app/style'
import React from 'react'
import CarAddForm from './forms/CarAddForm'

const NewCar = () => {
  return (
    <div className="w-full overflow-hidden">
  
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <div className="text-center">
                    <h2 className={`${styles.heading2} text-right text-customSecondary`}>
                        إضافة سيارة جديدة
                    </h2>
                </div>
            
            <section className='sm:py-10 py-0'> 
                <CarAddForm/>
            </section> 
      </div>
    </div>
  </div>
  )
}

export default NewCar

