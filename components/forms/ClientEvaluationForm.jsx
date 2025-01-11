'use client'

import { useForm } from "react-hook-form";
import { Form, FormControl } from "../ui/form"
import CustomFormField from "../CustomFormFeild";
import ReactStars from "react-rating-stars-component";
import Button from "../Button";
import { useState } from "react";
import { formatDateTime } from "@/constants";

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
    const [name, setName]   = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [text, setText]   = useState('');
    const [client, setClient]   = useState('');
    const { dateTime } = formatDateTime(Date.now());

    const handleRatingChange = (newRating) => {
        setRating(newRating);
        console.log("New rating:", newRating);
    };
    const handlePhoneChange = (value) => {
        setPhone(value);
    };
    
    const getClientId = async () => {
        
        console.log("Sended data for insert:", { name, phone, email });
        try {
            const response = await fetch("/api/clients", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ name, email, phone }),
            });
        
            if (response.ok) {
              const data = await response.json();
              console.log("Client added or exists:", data);
              return data.id; // Return the client's ID (new or existing)
            } else {
              const errorData = await response.json();
              console.error("Error adding client:", errorData.error);
              return null; // Handle error case
            }
          } catch (error) {
            console.error("Error during addNewClient:", error.message);
            return null; // Handle fetch error
          }
    }; 

    const addNewEvaluation = async (e_date,	level,	text,	is_approved,	client_id) => {
        try {
            const response = await fetch("/api/evaluations", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ e_date,	level,	text,	is_approved,	client_id }),
            timeout: 10000, // Set the timeout to 10 seconds
            });
            if (response.ok) {
            const result = await response.json();
            console.log("Evaluation created:", result);
            } else {
            const error = await response.json();
            console.error("Error creating Evaluation:", error);
            }
        } catch (error) {
            console.error("Network error:", error.message);
        }
    }

    const addNewEvaluationHandler = async () => {
        
        const client_id = await getClientId(); // Get the client ID
        const is_approved = 0, e_date = dateTime, level = rating;
        console.log("Sended data for insert:", { e_date,	level,	text,	is_approved,	client_id });

        if (client_id) {
            await addNewEvaluation(e_date,	level,	text,	is_approved,	client_id);
        }
       
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
                        label="الاسم الثلاثي (أدخل نفس الاسم الذي حجزت الخدمة من خلاله)"
                        placeholder="أكتب اسمك الثلاثي هنا"
                        iconSrc="/assets/user.svg"
                        iconAlt="user"
                        onChange={(e) => setName(e.target.value)}
                    />
                     <CustomFormField
                        fieldType={FormFieldType.PHONE_INPUT}
                        control={form.control}
                        name="phone"
                        label="رقم الجوال (أدخل نفس رقم الجوال الذي حجزت الخدمة من خلاله)"
                        placeholder="(555) 123-4567"
                        value={phone}
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
                    <CustomFormField
                        fieldType={FormFieldType.TEXTAREA}
                        control={form.control}
                        name="description"
                        label="الوصف"
                        placeholder="أكتب ملاحظاتك عن خدماتنا"
                        onChange={(e) => setText(e.target.value)}
                    />
                  
                </div>

            </div>
            
            <div className="flex flex-1 justify-center items-center w-full mt-6">
                <Button styles='lg:w-[50%] md:w-[50%] w-[100%]' title='إدخال' onClickHandler={addNewEvaluationHandler}/>
            </div>
        </form>
    </Form>
  )
}

export default ClientEvaluationForm