'use client'

import styles from '@/app/style'
import SettingsForm from '@/components/forms/SettingsForm'
import React from 'react'

const Settings = () => {
  return (
    <div className="w-full overflow-hidden">
  
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <div className="text-center">
                    <h2 className={`${styles.heading2} text-right text-primary`}>
                    إعدادات عامة
                    </h2>
                </div>
            <section className='mx-auto flex flex-col space-y-14 w-full'> 
                <main className='admin-main'>
                    <section className='w-full sm:py-10 py-0 shadow-customGray shadow-2xl overflow-hidden rounded-xl text-customGray transition-transform duration-300 bg-gradient-to-r from-transparent via-gray-400 to-transparent'> 
                        <SettingsForm/>
                    </section> 
                </main>
            </section> 
        </div>
    </div>
</div>
  )
}

export default Settings