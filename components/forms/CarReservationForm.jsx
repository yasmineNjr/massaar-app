'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import CustomFormField from "../CustomFormFeild"

import { Label } from "../ui/label"
import { RadioGroup, RadioGroupItem } from "../ui/radio-group"
import FileUploader from "../FileUploadr"
import { useState } from "react"
import Button from "../Button"
import { quickBookHandler } from "@/constants"


export const FormFieldType = {
  INPUT: 'input',
  TEXTAREA: 'textarea',
  PHONE_INPUT: 'phoneInput',
  CHECKBOX: 'checkbox',
  DATE_PICKER: 'datePicker',
  SELECT: 'select',
  SKELETON: 'skeleton',
};

const formSchema = z.object({
    username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
  })

  const PaymentOptions = [ 'الدفع باستخدام بطاقة ائتمان أو خصم عبر المدفوعات عبر الانترنت' , 'الدفع أثناء التوصيل' , 'تحويل مصرفي مباشر', ]

  const CarReservationForm = ( {item} ) => {

    console.log(item.name)
    
    const form = useForm();
    const [payment, setPayment] = useState('تحويل مصرفي مباشر')
    const [totalCost, setTotalCost] = useState(0)

    const onSubmit = (data) => {
      console.log(data);
    };
   
    return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="font-bold space-y-6 flex-1 w-full text-dimWhite">
       
          <CustomFormField
            fieldType={FormFieldType.INPUT}
            control={form.control}
            name="name"
            label="الاسم الكامل"
            placeholder="John Doe"
            iconSrc="/assets/user.svg"
            iconAlt="user"
          />

        
          <CustomFormField
              fieldType={FormFieldType.PHONE_INPUT}
              control={form.control}
              name="phone"
              label="رقم الجوال"
              placeholder="(555) 123-4567"
          /> 

          <CustomFormField
              fieldType={FormFieldType.INPUT}
              control={form.control}
              name="email"
              label="البريد الالكترني(اختياري)"
              placeholder="johndoe@gmail.com"
              iconSrc="/assets/email.svg"
              iconAlt="email"
          />

          {/* HOURS & DATE */}
            <CustomFormField
              fieldType={FormFieldType.DATE_PICKER}
              control={form.control}
              name="bookDate"
              label="تاريخ الحجز"
              showTimeSelect
              dateFormat="MM/dd/yyyy  -  h:mm aa"
          />
            
          <CustomFormField
              fieldType={FormFieldType.NUMRICINPUT}
              control={form.control}
              name="hours"
              label="عدد الساعات"
              placeholder="12"
              iconSrc="/assets/clock.svg"
              iconAlt="hours"
          />
               
          {/* NOTES & DRIVER */}
          <CustomFormField
            fieldType={FormFieldType.TEXTAREA}
            control={form.control}
            name="details"
            label="معلومات إضافية(إختياري)"
            placeholder="ملاحظات حول الطلب."
          />

          <CustomFormField
            fieldType={FormFieldType.CHECKBOX}
            control={form.control}
            name="treatmentConsent"
            label="مع سائق"
          />

          {/* Payment */}
          <CustomFormField
              fieldType={FormFieldType.SKELETON}
              control={form.control}
              name="payment"
              label="طريقة الدفع"
              renderSkeleton={(field) => (
            <FormControl>
              <RadioGroup
                className="flex flex-col space-y-4"
                onValueChange={setPayment}
                defaultValue={payment}
              >
                {PaymentOptions.map((option, i) => (
                  <div key={option + i} 
                  className="flex flex-row-reverse items-center space-x-reverse space-x-2">
                    <RadioGroupItem value={option} id={option} 
                      className="relative w-5 h-5 border-2 border-customSecondary rounded-full checked:border-customSecondary" >
                      <span
                        className="absolute w-2.5 h-2.5 bg-transparent rounded-full transform scale-0 data-[state=checked]:scale-100"
                      />
                    </RadioGroupItem>
                    <Label htmlFor={option} className="cursor-pointer text-customSecondary font-semibold">
                      {option}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </FormControl>
          )}
        />
       
        {/* File Upload */}
        {payment === 'تحويل مصرفي مباشر' && 
        <CustomFormField
            fieldType={FormFieldType.SKELETON}
            control={form.control}
            name="identificationDocument"
            label="الرجاء إرفاق صورة التحويل"
            renderSkeleton={(field) => (
                <FormControl>
                <FileUploader files={field.value} onChange={field.onChange} />
                </FormControl>
            )}
            />
          }
          <div className="flex flex-1 justify-center items-center w-full text-primary">
            <h2>الكلفة الإجمالية: {totalCost}</h2>
         </div>
         <div className="flex flex-1 justify-center items-center w-full gap-6">
            <Button styles='w-[50%]' title='التقدم لإتمام الطلب'/>
            <Button styles='w-[50%]' title='حجز سريع' onClickHandler={() => quickBookHandler(`مرحباً, هل يمكنك مساعدتي في حجز السيارة ${item.name}؟`)}/>
         </div>
          

      </form>
    </Form>

    )
  }

export default CarReservationForm;
