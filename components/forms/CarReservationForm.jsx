'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"

import { Input } from "@/components/ui/input"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import CustomFormField from "../CustomFormFeild"

import { Label } from "../ui/label"
import { RadioGroup, RadioGroupItem } from "../ui/radio-group"
import FileUploader from "../FileUploadr"
import { useState } from "react"

const formSchema = z.object({
    username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
  })

  export const FormFieldType = {
    INPUT: 'input',
    TEXTAREA: 'textarea',
    PHONE_INPUT: 'phoneInput',
    CHECKBOX: 'checkbox',
    DATE_PICKER: 'datePicker',
    SELECT: 'select',
    SKELETON: 'skeleton',
  };

  const DriverOptions = [ 'مع سائق', 'بدون سائق']
  const PaymentOptions = [ 'الدفع باستخدام بطاقة ائتمان أو خصم عبر المدفوعات عبر الانترنت' , 'الدفع أثناء التوصيل' , 'تحويل مصرفي مباشر', ]

  const CarReservationForm = ( ) => {

    const form = useForm();

    const [payment, setPayment] = useState('تحويل مصرفي مباشر')
    const [driver, setDriver] = useState('بدون سائق')

    const onSubmit = (data) => {
      console.log(data);
    };
   
    return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-12 flex-1 w-full">
       
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
          <div className='flex flex-row gap-6 xl:flex-row'>
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
          </div>

          {/* HOURS & DATE */}
          <div className='flex flex-row gap-6 xl:flex-row'>
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
               
          </div>

          {/* NOTES & DRIVER */}
          <div className='flex flex-row gap-6 xl:flex-row'>
              <CustomFormField
                fieldType={FormFieldType.TEXTAREA}
                control={form.control}
                name="details"
                label="معلومات إضافية(إختياري)"
                placeholder="ملاحظات حول الطلب."
              />
              <CustomFormField
                    fieldType={FormFieldType.SKELETON}
                    control={form.control}
                    name="driver"
                    label="سائق"
                    renderSkeleton={(field) => (
                  <FormControl>
                    <RadioGroup
                      className="flex h-11 gap-6 xl:justify-between justify-end"
                      onValueChange={setDriver}
                      defaultValue={driver}
                    >
                      {DriverOptions.map((option, i) => (
                        <div key={option + i} className="flex flex-row-reverse items-center justify-end">
                          <RadioGroupItem value={option} id={option} />
                          <Label htmlFor={option} className="cursor-pointer">
                            {option}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </FormControl>
                )}
              />
              
          </div>

          {/* Payment */}
          <div>
            <div className='flex flex-col gap-6 xl:flex-row'>
                    
                    <CustomFormField
                        fieldType={FormFieldType.SKELETON}
                        control={form.control}
                        name="payment"
                        label="طريقة الدفع"
                        renderSkeleton={(field) => (
                    <FormControl>
                        <RadioGroup
                        className="flex h-11 gap-2 xl:justify-between justify-end"
                        onValueChange={setPayment}
                        defaultValue={payment}
                        >
                        {PaymentOptions.map((option, i) => (
                            <div key={option + i} className="flex flex-row-reverse items-center justify-end">
                            <RadioGroupItem value={option} id={option} />
                            <Label htmlFor={option} className="cursor-pointer">
                                {option}
                            </Label>
                            </div>
                        ))}
                        </RadioGroup>
                    </FormControl>
                    )}
                />
            </div>
            {/* File Upload */}
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
          </div>
         


      </form>
    </Form>

    )
  }

export default CarReservationForm;


 {/* <FormField
          name="example"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Example Field</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="bg-gold-gradient ">Submit</Button> */}