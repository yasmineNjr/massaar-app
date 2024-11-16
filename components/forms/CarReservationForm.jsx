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

  const CarReservationForm = ( item ) => {
    
    const form = useForm();
    const [payment, setPayment] = useState('تحويل مصرفي مباشر')
    const [totalCost, setTotalCost] = useState(0)

    const onSubmit = (data) => {
      console.log(data);
    };
   
    return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="font-bold space-y-6 flex-1 w-full  text-dimWhite">
       
          <CustomFormField
            fieldType={FormFieldType.INPUT}
            control={form.control}
            name="name"
            label="الاسم الكامل"
            placeholder="John Doe"
            iconSrc="/assets/user.svg"
            iconAlt="user"
          />

          {/* EMAIL & PHONE */}
          {/* <div className='flex flex-col  gap-6 xl:flex-row'> */}
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
          {/* </div> */}

          {/* HOURS & DATE */}
          {/* <div className='flex flex-col  gap-6 xl:flex-row'> */}
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
               
          {/* </div> */}

          {/* NOTES & DRIVER */}
          {/* <div className='flex flex-col  gap-6 xl:flex-row'> */}
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
          {/* </div> */}

          {/* Payment */}
          {/* <div dir="rtl" className="flex flex-col gap-6 w-full"> */}
            {/* <div dir="rtl" className='flex gap-6'> */}
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
                        <div key={option + i} //className="flex items-center justify-end space-x-2">
                        className="flex flex-row-reverse items-center space-x-reverse space-x-2">
                          <RadioGroupItem value={option} id={option} //className="relative border-dimWhite hover:border-dimWhite focus:ring-2 focus:ring-dimWhite checked:border-dimWhite checked:bg-dimWhite"
                           className="relative w-5 h-5 border-2 border-gray-400 rounded-full checked:border-blue-500" >
                            {/* <span
                            className="absolute inset-1/2 w-2.5 h-2.5 bg-dimWhite hover:bg-dimWhite focus:bg-dimWhite rounded-full transform -translate-x-1/2 -translate-y-1/2"
                            data-state="checked"/> */}
                            <span
                              className="absolute w-2.5 h-2.5 bg-dimWhite rounded-full transform scale-0 data-[state=checked]:scale-100"
                            />
                          </RadioGroupItem>
                          <Label htmlFor={option} className="cursor-pointer">
                            {option}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </FormControl>
                )}
              />
                {/* <CustomFormField
                  fieldType={FormFieldType.SELECT}
                  control={form.control}
                  name="payment"
                  label="طريقة الدفع"
                  placeholder="اختر طريقة الدفع"
                >
                  {PaymentOptions.map((option) => (
                    <SelectItem key={option} value={option}>
                      <div className="rtl:text-right " >
                        <p>{option}</p>
                      </div>
                    </SelectItem>
                  ))} 
              </CustomFormField> */}
            {/* </div> */}
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
          {/* </div> */}
          <div className="flex flex-1 justify-center items-center w-fill">
            <h2>الكلفة الإجمالية: {totalCost}</h2>
         </div>
         <div className="flex flex-1 justify-center items-center w-fill">
            <Button styles='w-full' title='التقدم لإتمام الطلب'/>
         </div>
          

      </form>
    </Form>

    )
  }

export default CarReservationForm;
