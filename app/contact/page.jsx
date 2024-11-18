import Image from 'next/image'
import React from 'react'
import styles from '../style'
import { contactus, hero1 } from '@/public/assets'
import ContactUsForm from '@/components/forms/ContactUsForm'

const ContactUs = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <div className="text-center my-5 lg:my-10">
            <h2 className={`${styles.heading2} text-right`}>
                اتصل بنا
            </h2>
          </div>
          
          <section className={`${styles.paddingY} flex flex-col`}>

            <div className='flex flex-col lg:flex-row  w-full'>
                  <div className="relative h-70 md:h-75 w-full lg:w-[50%]">
                    <Image
                      src={contactus}
                      alt="contact us Image"
                      layout="fill"
                      objectFit="cover"
                      // className="rounded-lg"
                    />
                  </div>
              <div className={`${styles.flexCenter} xl:px-0 sm:px-16 px-6 md:my-0 my-10 w-full lg:w-[50%]`}>
                <ContactUsForm/>             
              </div>
            </div>

          </section>
        </div>
      </div>
  </div>

  )
}

export default ContactUs