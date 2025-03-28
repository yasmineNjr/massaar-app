import React from 'react'
import Image from 'next/image';
import ReactStars from "react-rating-stars-component";
import { useRouter } from 'next/navigation';
import { FaWifi } from "react-icons/fa6";
import { TbAirConditioning } from "react-icons/tb";
import { MdFreeBreakfast } from "react-icons/md";
import { IoRestaurant } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { PiMoneyWavyFill } from "react-icons/pi";

const ListItem = ({item}) => {
  
    const router = useRouter();
  const {id, name, location, description, pricePerHour, rating, wifi, conditioning, breakfast, meal, mainImg, imgs}  = item;

  const clickHandler = (id) => {
    const path = `/hotels/${id}`
    router.push(path);
    }   

    return (
     <div 
        key={id} //bg-gradient-to-r from-transparent via-gray-400 to-transparent
        className='flex flex-col mt-10 w-[340px] h-[600px]  overflow-hidden rounded-xl text-customGray cursor-pointer  bg-gradient-to-r from-gray-500 to-white'
        // transition-transform duration-300 hover:scale-105 hover:shadow-2xl shadow-customGray
        onClick={() => clickHandler(id)}
    >
        <div className='rounded-xl relative min-w-[301px] h-[370px]'>
            <Image src={mainImg} alt={name} layout="fill"/>
        </div>
        <div className='p-5'>
            <div className='truncate'>
                <h1 className='text-xl font-bold text-primary'>{name}</h1>
            </div>
            <div className='flex flex-row gap-2 mt-2'>
                <FaLocationDot/>
                <p className='text-customSecondary font-semibold'>{location}</p>
            </div>
            {/* <div className='flex flex-row gap-2 mt-2'>
                <PiMoneyWavyFill  size={20}/>
                <h1 className='text-primary font-bold'>{pricePerHour}</h1>
            </div> */}
            
            <ReactStars
                count={5}
                size={30}
                activeColor="#ffd700"
                value={rating}
            />
           

            <div className='truncate'>
                <p className='ttext-customSecondary font-semibold'>{description}</p>
            </div>
            <div className='flex flex-row items-center justify-start mt-5 gap-2'>
                {wifi && <FaWifi size={24}/>}
                {conditioning && <TbAirConditioning size={24}/>}
                {breakfast && <MdFreeBreakfast size={24}/>}
                {meal && <IoRestaurant size={24}/>}
            </div>
        </div>
    </div>
  )
}

export default ListItem
