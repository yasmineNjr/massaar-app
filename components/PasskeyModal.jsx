'use client'

import React, { useState } from 'react'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { usePathname, useRouter } from "next/navigation";
import Image from 'next/image';

const PasskeyModal = () => {

  const router = useRouter();
  const path = usePathname();
  const [open , setOpen] = useState(true);
  const [passkey , setPasskey] = useState('');
  const [error , setError] = useState('');

  const closeModal = () => {
    setOpen(false);
    router.push('/');
  }

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger className='text-gold font-extrabold text-[100px]'>Open</AlertDialogTrigger>
      <AlertDialogContent className='shad-alert-dialog'>
        <AlertDialogHeader>
          <AlertDialogTitle className='flex items-start justify-between text-white'>
          التحقق من وصول المسؤول
            <Image
                src='/assets/close.svg'
                alt='close'
                width={20}
                height={20}
                onClick={() => closeModal()}
                className='cursor-pointer'
            />
          </AlertDialogTitle>
          <AlertDialogDescription className='text-right text-dimWhite'>
          للوصول إلى صفحة الإدارة، يرجى إدخال مفتاح المرور.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div>
          otp
          {/* <InputOTP maxLength={6} value={passkey} onChange={(value) => setPasskey(value)}>
              <InputOTPGroup className='shad-otp'>
                  <InputOTPSlot className='shad-otp-slot' index={0} />
                  <InputOTPSlot className='shad-otp-slot' index={1} />
                  <InputOTPSlot className='shad-otp-slot' index={2} />
                  <InputOTPSlot className='shad-otp-slot' index={3} />
                  <InputOTPSlot className='shad-otp-slot' index={4} />
                  <InputOTPSlot className='shad-otp-slot' index={5} />
              </InputOTPGroup>
          </InputOTP>
          {error && <p className='shad-error text-14-regular mt-4 flex justify-center'>
                      {error}
                    </p>
          } */}
        </div>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default PasskeyModal