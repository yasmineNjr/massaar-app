'use client'

import styles from '@/app/style'
import { ourServices } from '@/constants'

const OurServices = () => {

  return (
    <section 
    className={`flex flex-1 flex-col  bg-transparent ${styles.paddingY} `}>
            <h2 className={`${styles.heading2} text-gold`}>
                خدماتنا
            </h2>
        {/* </div> */}

        <div className="overflow-hidden w-full bg-transparent mt-5">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 p-4">
            {
                ourServices.map((service, idx) => (
                    <div key={service.id} className="flex flex-col items-center text-center ">
                      {/* hover:animate-circularShake */}
                        <div className="text-5xl mb-2 ">{service.icon}</div>
                        <p className="text-lg text-dimWhite">{service.text}</p>
                    </div>
                ))}
            </div>

      </div>

    </section>
  )
}

export default OurServices