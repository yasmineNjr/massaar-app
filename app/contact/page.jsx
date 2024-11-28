'use client';

import Image from 'next/image'
import React from 'react'
import styles from '../style'
import { contactus, hero1 } from '@/public/assets'
import ContactUsForm from '@/components/forms/ContactUsForm'
import { socialMedia } from '@/constants'

const ContactUs = () => {

  const handleClick = (link) => {
    window.open(link, "_blank");
  }

  return (
    <div className="bg-transparent w-full overflow-hidden">
      <div className={`bg-transparent ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <div className="text-center my-5 lg:my-10">
            <h2 className={`${styles.heading2} text-right text-primary`}>
                اتصل بنا
            </h2>
          </div>
          
          <section className={`flex flex-col`}>
            
          <div className="overflow-hidden w-full bg-transparent mt-5">
            <div className="flex flex-wrap flex-row items-center justify-center gap-x-24 gap-y-8 w-full">
            {
                socialMedia.map((media, idx) => (
                    <div key={media.id} className="relative group flex flex-col items-center mb-10 text-center  justify-center">
                        <Image 
                          key={media.id} 
                          src={media.icon} 
                          alt={media.id} 
                          className={`w-[81px] h-[81px] object-contain cursor-pointer ${idx !== socialMedia.length-1 ? 'ml-6' : 'ml-0'} transition-transform duration-300 hover:scale-105 hover:shadow-2xl`}
                          onClick={() => handleClick(media.link)}
                        />
                         <div className="absolute bottom-[-30px] w-full bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <span className="text-white text-sm">{media.title}</span>
                        </div>
                    </div>
                ))}
            </div>
          </div>
            {/* <div className='flex flex-col lg:flex-row  w-full shadow-customGray shadow-2xl overflow-hidden rounded-xl text-customGray transition-transform duration-300 bg-gradient-to-r from-transparent via-gray-400 to-transparent'>
              <div className="relative h-70 md:h-75 w-full lg:w-[50%]">
                <Image
                  src={contactus}
                  alt="contact us Image"
                  layout="fill"
                  objectFit="cover"
                  // className="rounded-lg"
                />
              </div>
              <div className={`${styles.flexCenter} xl:px-0 sm:px-16 px-6 py-10 md:my-0 my-10 w-full lg:w-[50%]`}>
                <ContactUsForm/>             
              </div>
            </div>    */}


          </section>
        </div>
      </div>
  </div>

  )
}

export default ContactUs

{/* 
{
                 socialMedia.map((social, index) => (
                    <Image 
                      key={social.id} 
                      src={social.icon} 
                      alt={social.id} 
                      className={`w-[81px] h-[81px] object-contain cursor-pointer ${index !== socialMedia.length-1 ? 'ml-6' : 'ml-0'} transition-transform duration-300 hover:scale-105 hover:shadow-2xl`}
                      onClick={() => handleClick(social.link)}
                    />
                ))
              }*/}
           