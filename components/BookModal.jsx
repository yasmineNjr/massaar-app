'use client'

import React, { useState } from 'react'

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Button } from './ui/button'
import ManageReservationForm from './forms/ManageReservationForm'

const BookModal = ({ type, patientId, userId, appointment, title, description }) => {

  const [open, setOpen] = useState(false)
  let typeText = '';
  if(type === 'schedule'){
    typeText = 'تثبيت'
  }else if(type === 'cancel'){
    typeText = 'إلغاء'
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
            <Button variant='ghost' className={`capitalize ${type === 'schedule' ? 'text-green-500 hover:text-green-500' : 'text-red-700 hover:text-red-700'} hover:bg-transparent`}>
                {typeText}
            </Button>
        </DialogTrigger>
        {/* <DialogContent>
            <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
                This action cannot be undone. This will permanently delete your account
                and remove your data from our servers.
            </DialogDescription>
            </DialogHeader>
        </DialogContent> */}


        <DialogContent className='shad-dialog sm:max-w-md'>
            <DialogHeader className='mb-4 space-y-3'>
            <DialogTitle className='capitalize text-center text-white'>{typeText} الطلب</DialogTitle>
            <DialogDescription className='text-center text-dimWhite'>
               هل أنت متأكد من {typeText} الطلب؟
            </DialogDescription>
            </DialogHeader>

            <ManageReservationForm
                // userId={userId}
                // clientId={patientId}
                // type={type}
                // appointment={appointment}
                setOpen={setOpen}
            />
        </DialogContent>
    </Dialog>
  )
}

export default BookModal