import styles from '@/app/style';
import { logo } from '@/public/assets';
import { footerLinks, socialMedia } from '../constants';
import Image from 'next/image';

const Footer = () => (
    <section className={` ${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={` ${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className='flex flex-1 flex-col justify-start ml-10'>
          <Image src={logo} alt='hoobank' className='w-[300px] h-[100px] object-contain'/>
          <p className={` ${styles.paragraph} mt-4 max-w-[310px]`}>
          طريقة جديدة لجعل رحلتك إلى الأراضي المقدسة سهلة وموثوقة وآمنة.
          </p>
        </div>
        
        <div className='flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10'>
          {footerLinks.map((footerLink) => (
            <div key={footerLink.key} className='flex flex-col ss:my-0 my-4 min-w-[150px]'>
              <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-dimWhite">{footerLink.title}</h4>
              <ul className="list-none mt-4">
                {footerLink.links.map((link, index) => (
                  <li key={link.name} className={`font-poppins font-normal text-[16px] leading-[24px] text-[#6d6d6d] hover:text-secondary ${
                    index !== footerLink.links.length - 1 ? "mb-4" : "mb-0"
                  }`}>
                   { 
                        link.image === '' ?
                        <p>{link.name}</p> :
                        <Image key={link.name} src={link.image} alt={link.name} className={`object-contain cursor-pointer ${index !== footerLink.links.length-1 ? 'ml-6' : 'ml-0'}`}/>
                    }
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className=' w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]'>
        <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-dimWhite">
        © 2024 مسار الغربية . جميع الحقوق محفوظة
        </p>
        <div className='flex flex-row md:mt-0 mt-6'>
          {socialMedia.map((social, index) => (
            <Image key={social.id} src={social.icon} alt={social.id} className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length-1 ? 'ml-6' : 'ml-0'}`}/>
          ))}
        </div>
      </div>
    </section>
  )

export default Footer