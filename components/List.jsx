'use client';

import React from 'react'
import styles from '@/app/style'
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { PinContainer } from './ui/3d-pin';
import Image from 'next/image';
import { FaLocationArrow } from "react-icons/fa6";

const List = ({items, destination}) => {
    
    const router = useRouter();
    const lst = items;
    let path = '';
    if(destination === 'car'){
        path = `/cars`
    }else if(destination === 'hotel'){
        path = `/hotels`
    }
    console.log(path)
    const viewDetails = (id) => {
        
        if(destination === 'car'){
            path = `/cars/${id}`
        }else if(destination === 'hotel'){
            path = `/hotels/${id}`
        }
        router.push(path);
        // console.log(path)
    }

  return (
    // <div className='text-white flex flex-wrap gap-10 items-center p-4 mt-10 justify-center w-full'>
    // <div className="text-dimWhite flex flex-wrap gap-4 items-center justify-center p-4 gap-x-24 gap-y-8 bg-gold">
    <div className="flex flex-wrap items-center justify-center gap-x-24 gap-y-8">
        {lst.map(({id, img, name, model, description, pricePerHour, rating, passengers, GPS, automatic, mainImg, imgs}) => (//sm:w-[570px] w-[50vw]
            <div key={id} 
            // className="sm:h-[36rem] h-[25rem] lg:min-h-[32.5rem] flex items-center justify-center bg-white shadow w-80"
            className="sm:h-[41rem] h-[36rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]  text-dimWhite"
            >
                <PinContainer title={name} href={`${path}/${id}`}>
                    <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10">
                        {/* sm:w-[570px] w-[80vw]  */}
                        <div className="relative w-full h-full overflow-hidden lg:rounded-3xl" style={{ backgroundColor: "#13162D" }}>
                            <Image src={mainImg} alt={name}/>
                        </div>
                        <Image src={mainImg} alt={name} className='z-10 absolute bottom-0'/>
                    </div>
                    <h1 className='font-bold lg:text-3xl md:text-xl text-base line-clamp-1'>
                        {name} - {model}
                    </h1>
                    <h1 className='font-bold lg:text-3xl md:text-xl text-base line-clamp-1'>
                        {pricePerHour}
                    </h1>
                    {destination === 'car' &&
                        <h2 className='font-bold lg:text-3xl md:text-xl text-base line-clamp-1'>
                            {passengers} شخص
                        </h2>
                    }
                    <p className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2'>
                        {description}
                    </p>
                    <div className="flex items-center justify-between mt-7 mb-3">
                        {/* <div className="flex items-center">
                        {iconLists.map((icon, index) => (
                            <div
                            key={index}
                            className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                            style={{
                                transform: `translateX(-${5 * index + 2}px)`,
                            }}
                            >
                            <img src={icon} alt="icon5" className="p-2" />
                            </div>
                        ))}
                        </div> */}

                        <div className="flex justify-center items-center">
                        <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                            عرض التفاصيل
                        </p>
                        <FaLocationArrow className="ms-3" color="#CBACF9" />
                        </div>
                    </div>
                </PinContainer>
            </div>
        ))
        }
    </div>
    // <div>xxx</div>
  )
}

export default List