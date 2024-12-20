'use client'

import { useForm } from "react-hook-form";
import { Form, FormControl } from "../ui/form"
import CustomFormField from "../CustomFormFeild";
import ReactStars from "react-rating-stars-component";
import Button from "../Button";
import { useState } from "react";

export const FormFieldType = {
    INPUT: 'input',
    TEXTAREA: 'textarea',
    PHONE_INPUT: 'phoneInput',
    CHECKBOX: 'checkbox',
    DATE_PICKER: 'datePicker',
    SELECT: 'select',
    SKELETON: 'skeleton',
  };

const ClientEvaluationForm = () => {

    const form = useForm();

    const onSubmit = (data) => {
        console.log(data);
      };

      const [rating, setRating] = useState(0);

      const handleRatingChange = (newRating) => {
        setRating(newRating);
        console.log("New rating:", newRating);
      };

  return (
    <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="font-bold space-y-6 flex flex-1 flex-col w-full text-dimWhite ">
            <div className="flex lg:flex-row flex-col">
                <div className="w-[100%] px-3 space-y-6">
                    <div className="text-primary font-semibold text-lg">
                        تقييمك لخدماتنا
                        <ReactStars
                            count={5}
                            onChange={handleRatingChange}
                            size={30}
                            activeColor="#ffd700"
                            value={rating}
                            classNames='mt-5'
                        />
                    </div>
                    
                    <CustomFormField
                        fieldType={FormFieldType.INPUT}
                        control={form.control}
                        name="name"
                        label="الاسم الثلاثي"
                        placeholder="أكتب اسمك الثلاثي هنا"
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
                    <CustomFormField
                        fieldType={FormFieldType.TEXTAREA}
                        control={form.control}
                        name="description"
                        label="الوصف(إختياري)"
                        placeholder="أكتب ملاحظاتك عن خدماتنا"
                    />
                    
                  
                </div>

            </div>
            
            <div className="flex flex-1 justify-center items-center w-full mt-6">
                <Button styles='lg:w-[50%] w-[100%]' title='تقييم'/>
            </div>
        </form>
    </Form>
  )
}

export default ClientEvaluationForm