import styles from '@/app/style'
import { logoDark, saudiBussiness, zakatax } from '@/public/assets'
import Image from 'next/image'
import React from 'react'

const Licenses = () => {

    const handleZakataxClick = () => {
        window.open('/zakatax.pdf', '_blank');
    }
    const handleSaudiBussinessClick = () => {
        window.open('/bussiness.jpg', '_blank');
    }

    return (
        <section 
        className={`flex flex-1 flex-col  bg-transparent ${styles.paddingY} `}>
           <div className={`flex flex-col md:flex-row w-full justify-between gap-5 sm:gap-10 items-center`}>
            <Image src={saudiBussiness} alt='saudiBussiness' className='cursor-pointer' onClick={handleSaudiBussinessClick}/>
            <Image src={logoDark} alt='algharbia' className='w-[200px] md:w-[280px]'/>
            <Image src={zakatax} alt='zakatax' className='cursor-pointer' onClick={handleZakataxClick}/>
           </div>
        </section>
      )
}

export default Licenses