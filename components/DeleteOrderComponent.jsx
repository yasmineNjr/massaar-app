import { useOrders } from '@/context/AppContext';
import React from 'react'

import { IoClose } from "react-icons/io5";

const DeleteOrderComponent = ({ id }) => {
    
  const { deleteOrder } = useOrders();

  return (
    <div className='flex justify-center cursor-pointer transition-transform duration-300 hover:scale-125 hover:shadow-2xl'
         onClick={() => deleteOrder(id)}
    >
        <IoClose color='red' size={24}/>
    </div>
  )
}

export default DeleteOrderComponent