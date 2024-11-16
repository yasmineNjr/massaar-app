'use client'

import { useForm } from "react-hook-form";
import { Form, FormControl } from "../ui/form"
import CustomFormField from "../CustomFormFeild";
import FileUploader from "../FileUploadr"
import Button from "../Button";

export const FormFieldType = {
    INPUT: 'input',
    TEXTAREA: 'textarea',
    PHONE_INPUT: 'phoneInput',
    CHECKBOX: 'checkbox',
    DATE_PICKER: 'datePicker',
    SELECT: 'select',
    SKELETON: 'skeleton',
  };

const HotelAddForm = () => {

    const form = useForm();

    const onSubmit = (data) => {
        console.log(data);
      };
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="font-bold space-y-6 flex flex-1 flex-col w-full text-dimWhite">
               <div className="flex lg:flex-row flex-col">
                    <div className="lg:w-[50%] w-[100%] px-3 space-y-6">
                        <CustomFormField
                            fieldType={FormFieldType.INPUT}
                            control={form.control}
                            name="name"
                            label="الاسم"
                            placeholder="Makkah Clock Royal Tower"
                            iconSrc="/assets/hotel.svg"
                            iconAlt="hotel"
                        />
                        <CustomFormField
                            fieldType={FormFieldType.INPUT}
                            control={form.control}
                            name="location"
                            label="الموقع"
                            placeholder="مكة"
                            iconSrc="/assets/location.svg"
                            iconAlt="location"
                        />
                        <CustomFormField
                            fieldType={FormFieldType.TEXTAREA}
                            control={form.control}
                            name="description"
                            label="الوصف(إختياري)"
                            placeholder="وصف عن الفندق."
                        />
                        <CustomFormField
                            fieldType={FormFieldType.NUMRICINPUT}
                            control={form.control}
                            name="price"
                            label="سعر الليلة"
                            placeholder="100"
                            iconSrc="/assets/dolar.svg"
                            iconAlt="price"
                        />
                        <CustomFormField
                            fieldType={FormFieldType.NUMRICINPUT}
                            control={form.control}
                            name="persons"
                            label="عدد الأشخاص"
                            placeholder="4"
                            iconSrc="/assets/passenger.svg"
                            iconAlt="passengers"
                        />
                        <div className="flex flex-1 w-full flex-row justify-between mt-3">
                            <CustomFormField
                                fieldType={FormFieldType.CHECKBOX}
                                control={form.control}
                                name="wifi"
                                label="Wi-Fi"
                            />
                            <CustomFormField
                                fieldType={FormFieldType.CHECKBOX}
                                control={form.control}
                                name="heat"
                                label="تدفئة/تبريد"
                            />
                             <CustomFormField
                                fieldType={FormFieldType.CHECKBOX}
                                control={form.control}
                                name="dining"
                                label="غداء"
                            />
                             <CustomFormField
                                fieldType={FormFieldType.CHECKBOX}
                                control={form.control}
                                name="breakfast"
                                label="فطور"
                            />
                             <CustomFormField
                                fieldType={FormFieldType.CHECKBOX}
                                control={form.control}
                                name="tv"
                                label="TV"
                            />
                        </div>
                    </div>

                    <div className="lg:w-[50%] w-[100%] space-y-6 px-3 items-start">
                        <CustomFormField
                            fieldType={FormFieldType.SKELETON}
                            control={form.control}
                            name="mainImg"
                            label="الرجاء اختيار الصورة الرئيسية للفندق"
                            renderSkeleton={(field) => (
                                <FormControl>
                                    <FileUploader files={field.value} onChange={field.onChange} />
                                </FormControl>
                            )}
                        />

                        <CustomFormField
                            fieldType={FormFieldType.SKELETON}
                            control={form.control}
                            name="identificationDocument"
                            label="الرجاء اختيار الصور الثانوية للفندق"
                            renderSkeleton={(field) => (
                                <FormControl>
                                    <FileUploader files={field.value} onChange={field.onChange} />
                                </FormControl>
                            )}
                        />
                    
                    </div>
               </div>
                
               <div className="flex flex-1 justify-center items-center w-fill mt-6">
                    <Button styles='lg:w-[50%] w-[100%]' title='إدخال'/>
                </div>
            </form>
        </Form>
        )
}

export default HotelAddForm