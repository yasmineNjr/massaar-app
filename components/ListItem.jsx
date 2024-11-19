import React from 'react'
import Image from 'next/image';
import ReactStars from "react-rating-stars-component";
import { useRouter } from 'next/navigation';
import { breakfastIcon, conditioningIcon, mealIcon, wifiIcon } from '@/public/assets';
import { FaWifi } from "react-icons/fa6";
import { TbAirConditioning } from "react-icons/tb";
import { MdFreeBreakfast } from "react-icons/md";
import { IoRestaurant } from "react-icons/io5";

const ListItem = ({item}) => {
  
    const router = useRouter();
  const {id, name, model, description, pricePerHour, rating, wifi, conditioning, breakfast, meal, mainImg, imgs}  = item;

  const clickHandler = (id) => {
    const path = `/hotels/${id}`
    router.push(path);
    }   

    return (
     <div 
        key={id} 
        className='flex flex-col mt-10 w-[330px] h-[600px] shadow-customGray overflow-hidden rounded-xl text-customGray cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-2xl bg-gradient-to-r from-transparent via-gray-400 to-transparent'
        onClick={() => clickHandler(id)}
    >
        <div className='rounded-xl relative min-w-[301px] h-[370px]'>
            <Image src={mainImg} alt={name} layout="fill"/>
        </div>
        <div className='p-5'>
            <div className='truncate'>
                <h1 className='text-xl text-customGold'>{name}</h1>
            </div>
            <h1 className='text-primary font-bold'>{pricePerHour}</h1>
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
