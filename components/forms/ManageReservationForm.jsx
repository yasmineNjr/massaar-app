'use client'

import React from 'react'
import { Button } from '../ui/button'

const ManageReservationForm = ({ type, clientId, setOpen }) => {

    const handleClick = () => {
        setOpen && setOpen(false);
    }
  return (
   <div className='flex w-full justify-center gap-4'>
    <Button onClick={handleClick}>
        موافق
    </Button>
    <Button onClick={handleClick}>
        إلغاء الأمر
    </Button>
   </div>
  )
}

export default ManageReservationForm
