'use client'

import styles from '@/app/style';
import { logo, logoDark } from '@/public/assets';
import { footerLinks, socialMedia } from '../constants';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {

  const handleClick = (link) => {
    window.open(link, "_blank");
  }

  return(
    <section className={` ${styles.flexCenter} ${styles.paddingY} flex-col mt-10`}>
      <div className={` ${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className='flex flex-1 flex-col justify-center ml-10 w-full'>
          <Image src={logoDark} alt='logo' className='w-[360px] h-[160px] object-contain'/>
          <p className={` font-poppins text-[18px] leading-[30.8px] mt-4 max-w-[310px] text-dimWhite font-bold`}>
          طريقة جديدة لجعل رحلتك إلى الأراضي المقدسة سهلة وموثوقة وآمنة.
          </p>
        </div>
        
        <div className='flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10'>
          {footerLinks.map((footerLink) => (
            <div key={footerLink.key} className='flex flex-col ss:my-0 my-4 min-w-[150px] '>
              <h4 className="font-poppins font-bold text-[18px] leading-[27px] text-primary-foreground">{footerLink.title}</h4>
              <ul className="list-none mt-4 mb-4">
                {footerLink.links.map((link, index) => (
                  <li key={link.name} className={`font-poppins font-bold text-[16px] leading-[24px] text-dimWhite hover:text-light-200 ${//#808080 text-[#3F3E45] hover:text-[#292D32]
                    index !== footerLink.links.length - 1 ? "mb-4" : "mb-0"
                  }`}>
                   { 
                    <div className='flex flex-row '>
                      <Image key={link.name} src={link.image} alt={link.name} className={`object-contain cursor-pointer ${index !== footerLink.links.length-1 ? 'ml-6' : 'ml-0'} transition-transform duration-300 hover:scale-105 hover:shadow-2xl`}/>
                      <p>{link.name}</p>
                    </div>
                       
                    }
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className=' w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-dimWhite'>
        <p className="font-poppins font-bold text-center text-[18px] leading-[27px] text-dimWhite">
          {/* text-[#3F3E45] */}
        © 2024 مسار الغربية . جميع الحقوق محفوظة
        </p>
        <div className='flex flex-row md:mt-0 mt-6' >
          {socialMedia.map((social, index) => (
            // <Link  href={social.link}>
              <Image 
                key={social.id} 
                src={social.icon} 
                alt={social.id} 
                className={`w-[32px] h-[32px] object-contain cursor-pointer ${index !== socialMedia.length-1 ? 'ml-6' : 'ml-0'} transition-transform duration-300 hover:scale-105 hover:shadow-2xl`}
                onClick={() => handleClick(social.link)}
              />
            // </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Footer