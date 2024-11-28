import React from 'react'
import Image from 'next/image';
import ReactStars from "react-rating-stars-component";
import { useRouter } from 'next/navigation';
import { MdGpsFixed } from "react-icons/md";
import { MdOutlineHdrAuto } from "react-icons/md";
import { FaPerson } from "react-icons/fa6";
import { PiMoneyWavyFill } from "react-icons/pi";

const CarListItem = ({item}) => {
  
    const router = useRouter();
    const {id, name, model, description, pricePerHour,rating, passengers, GPS, automatic, mainImg, imgs}  = item;
       
    const clickHandler = (id) => {
        const path = `/cars/${id}`
        router.push(path);
        }   

    return (
     <div 
        key={id} 
        className='flex flex-col mt-10 w-[315px] h-[600px] shadow-customGray overflow-hidden rounded-xl text-customGray cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-2xl bg-gradient-to-r from-transparent via-gray-400 to-transparent'
        onClick={() => clickHandler(id)}
    >
        <div className='rounded-xl relative min-w-[301px] h-[370px]'>
            <Image src={mainImg} alt={name} layout="fill"/>
        </div>
        <div className='p-5'>
            <div className='truncate'>
                <h1 className='text-xl font-bold text-[#ffd700]'>{model} - {name}</h1>
            </div>
           
            <div className='flex flex-row gap-2 mt-2'>
                <PiMoneyWavyFill  size={20}/>
                <h1 className='text-primary font-bold'>{pricePerHour}</h1>
            </div>
            
            <ReactStars
                count={5}
                size={30}
                activeColor="#ffd700"
                value={rating}
            />
           

            <div className='truncate'>
                <p className='ttext-customSecondary font-semibold'>{description}</p>
            </div>

            <div className='flex flex-row gap-2 mt-2'>
                <FaPerson size={22}/>
                <p className='text-customSecondary font-semibold'>{passengers}</p>
            </div>

            <div className='flex flex-row items-center justify-start mt-5 gap-2'>
                {GPS && <MdGpsFixed  size={24}/>}
                {automatic && <MdOutlineHdrAuto  size={24}/>}
            </div>
        </div>
    </div>
  )
}

export default CarListItem
