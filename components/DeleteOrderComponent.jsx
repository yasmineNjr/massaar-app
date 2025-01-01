import { orders } from '@/constants';
import React from 'react'

import { IoClose } from "react-icons/io5";

const DeleteOrderComponent = ({ id }) => {
    
    const deleteHandler = () => {
        const newOrders = orders.filter((order) => order.id !== id)
        console.log(newOrders)
    }
  return (
    <div className='flex justify-center cursor-pointer transition-transform duration-300 hover:scale-125 hover:shadow-2xl'
         onClick={deleteHandler}
    >
        <IoClose color='red' size={24}/>
    </div>
  )
}

export default DeleteOrderComponent