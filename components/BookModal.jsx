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
import { formatDateTime } from '@/constants'

const formatOrder = (order) => {
  if (!order) {
    // Handle undefined order
    return "Order details are not available.";
  }
  const { dateTime } = formatDateTime(order.date);
  const trips = //Array.isArray(order.trips) && order.trips.length > 0 
                  //? order.trips.join(', ') 
                  //: 
                  'لا يوجد';
  const result = order.order_type === 'car'
    ? `
    المنتج: ${order.product || 'N/A'}
    الاسم: ${order.name || 'N/A'}
    الهاتف: ${order.phone || 'N/A'}
    البريد الإلكتروني: ${order.email || 'N/A'}
    التاريخ: ${dateTime || 'N/A'}
    ساعات الانتظار: ${order.hours || 'N/A'}
    الملاحظات: ${order.notes || 'N/A'}
    الدفع: ${order.payment || 'N/A'}
    الرحلات: 
    ${trips}
    الكمية: ${order.quantity || 'N/A'}
    السعر: ${order.price || 'N/A'}
    `
    : `
    المنتج: ${order.product || 'N/A'}
    الاسم: ${order.name || 'N/A'}
    الهاتف: ${order.phone || 'N/A'}
    البريد الإلكتروني: ${order.email || 'N/A'}
    التاريخ: ${dateTime || 'N/A'}
    الأيام: ${order.days || 'N/A'}
    الملاحظات: ${order.notes || 'N/A'}
    الدفع: ${order.payment || 'N/A'}
    الكمية: ${order.quantity || 'N/A'}
    السعر: ${order.price || 'N/A'}
    `;

  return result;
};


const BookModal = ({ type, description, order, source }) => {

  const [open, setOpen] = useState(false)
  
  const message = order ? formatOrder(order) : "Order details are not available.";
  const encodedMessage = encodeURIComponent(message);

  let typeText = '';
  if(type === 'schedule'){
    typeText = 'تثبيت'
  }else if(type === 'update'){
    typeText = 'تعديل'
  }else if(type === 'details'){
    typeText = 'تفاصيل';
  }else if(type === 'delete'){
    typeText = 'إلغاء'
  }
  else if(type === 'cancel'){
    typeText = 'إلغاء'
  }

  let style; 
  if(type === 'schedule') {
    style = 'text-green-500 hover:text-green-500'
  }else if(type === 'update') {
    style = 'text-green-500 hover:text-green-500'
  }else if(type === 'details') {
    style = 'text-blue-500 hover:text-blue-500'
  }else{
    style = 'text-red-700 hover:text-red-700';
  } 
  
  
  return (
    <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
            <Button variant='ghost' className={`capitalize ${style} hover:bg-transparent`}>
                {typeText}
            </Button>
        </DialogTrigger>
       
        <DialogContent className='shad-dialog sm:max-w-md'>
            <DialogHeader className='mb-4 space-y-3'>
            <DialogTitle className='capitalize text-center text-customSecondart'>{typeText} الطلب</DialogTitle>
            <DialogDescription
              className="text-right text-[16px] font-semibold text-customSecondary"
              dangerouslySetInnerHTML={{
                __html: type === 'details' ? decodeURIComponent(encodedMessage).replace(/\n/g, '<br>') : description,
              }}
            />
            </DialogHeader>

            <ManageReservationForm
              source={source}
              type={type}
              order={order}
              setOpen={setOpen}
            />
        </DialogContent>
    </Dialog>
  )
}

export default BookModal