'use client'

import { useForm } from "react-hook-form";
import { Form, FormControl } from "../ui/form"
import CustomFormField from "../CustomFormFeild";
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

  return (
    <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="font-bold space-y-6 flex flex-1 flex-col w-full text-dimWhite ">
            <div className="flex lg:flex-row flex-col">
                <div className="w-[100%] px-3 space-y-6">
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
                        name="message"
                        label='الرسالة'
                        placeholder='أكتب رسالتك هنا'
                    />
                    
                  
                </div>

            </div>
            
            <div className="flex flex-1 justify-center items-center w-full mt-6">
                <Button styles='w-[50%]' title='أرسل'/>
            </div>
        </form>
    </Form>
  )
}

export default ClientEvaluationForm