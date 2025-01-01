'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
// import { Button } from "@/components/ui/button"

import { Input } from "@/components/ui/input"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import CustomFormField from "../CustomFormFeild"

import { Label } from "../ui/label"
import { RadioGroup, RadioGroupItem } from "../ui/radio-group"
import FileUploader from "../FileUploadr"
import { useState } from "react"
import { SelectItem } from "../ui/select"
import Button from "../Button"
import { quickBookHandler } from "@/constants"
import { useOrders } from "@/context/AppContext"
import { useRouter } from "next/navigation"


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
    
    const form = useForm();
    const router = useRouter();
    const [payment, setPayment] = useState('تحويل مصرفي مباشر')
    const [totalCost, setTotalCost] = useState(0)
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [notes, setNotes] = useState('');
    const [days, setDays] = useState(0);

    const { addOrder } = useOrders();
    
    const handleAddOrder = () => {
      const newOrder = {
        id: Date.now(),
        type: 'hotel',
        product: "الفندق "+ item.name,
        name: name,
        phone: phone,
        email: email,
        date: date,
        days: days,
        notes: notes,
        payment: payment,
        price: '0',
        quantity: '1',
      };
      addOrder(newOrder);
      router.push('/orders')
    };

    const onSubmit = (data) => {
      console.log(data);
    };
    const handlePhoneChange = (value) => {
      setPhone(value);
    };
    const handleDateChange = (value) => {
      setDate(value);
    };
    const daysHandler = (value) => {
      const d = Number(value) || 0; // Ensure value is a number
      setDays(d);
      console.log(d)
  
      // // Update total cost based on waiting hours
      // setTotalCost((prev) => {
      //   const previousWaitingCost = waitingHours *  item.hours;
      //   const newWaitingCost = hours * item.hours;
  
      //   return prev - previousWaitingCost + newWaitingCost;
      // });
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
            onChange={(e) => setName(e.target.value)}
          />

          {/* EMAIL & PHONE */}
          <CustomFormField
              fieldType={FormFieldType.PHONE_INPUT}
              control={form.control}
              name="phone"
              label="رقم الجوال"
              placeholder="(555) 123-4567"
              onChange={handlePhoneChange} 
          /> 

          <CustomFormField
              fieldType={FormFieldType.INPUT}
              control={form.control}
              name="email"
              label="البريد الالكترني(اختياري)"
              placeholder="johndoe@gmail.com"
              iconSrc="/assets/email.svg"
              iconAlt="email"
              onChange={(e) => setEmail(e.target.value)}
          />

          {/* HOURS & DATE */}
          <CustomFormField
            fieldType={FormFieldType.DATE_PICKER}
            control={form.control}
            name="bookDate"
            label="تاريخ الحجز"
            showTimeSelect
            dateFormat="MM/dd/yyyy  -  h:mm aa"
            selected={date}
            onChange={handleDateChange} 
          />

          
          <CustomFormField
              fieldType={FormFieldType.NUMRICINPUT}
              control={form.control}
              name="days"
              label="عدد الأيام"
              placeholder="12"
              iconSrc="/assets/clock.svg"
              iconAlt="hours"
              onChange={(e) => daysHandler(e.target.value)}
          />
                

          {/* NOTES & DRIVER */}
          <CustomFormField
            fieldType={FormFieldType.TEXTAREA}
            control={form.control}
            name="details"
            label="معلومات إضافية(إختياري)"
            placeholder="ملاحظات حول الطلب."
            onChange={(e) => setNotes(e.target.value)}
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
        {/* <div className="flex flex-1 justify-center items-center w-full text-primary">
          <h2>الكلفة الإجمالية: {totalCost}</h2>
        </div> */}
        <div className="flex flex-1 justify-center items-center w-full gap-6">
            <Button styles='w-[50%]' title='إتمام' onClickHandler={handleAddOrder}/>
            {/* <Button styles='w-[50%]' title='حجز سريع' onClickHandler={() => quickBookHandler(`مرحباً, هل يمكنك مساعدتي في حجز الفندق ${item.name}؟`)}/> */}
         </div>
          
      </form>
    </Form>

    )
  }

export default CarReservationForm;
