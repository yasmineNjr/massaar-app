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

const CarAddForm = () => {

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
                            placeholder="BMW"
                            iconSrc="/assets/model.svg"
                            iconAlt="car"
                        />
                        <CustomFormField
                            fieldType={FormFieldType.INPUT}
                            control={form.control}
                            name="model"
                            label="الموديل"
                            placeholder="2023"
                            iconSrc="/assets/carName.svg"
                            iconAlt="model"
                        />
                        <CustomFormField
                            fieldType={FormFieldType.TEXTAREA}
                            control={form.control}
                            name="description"
                            label="الوصف(إختياري)"
                            placeholder="وصف عن السيارة."
                        />
                        <CustomFormField
                            fieldType={FormFieldType.NUMRICINPUT}
                            control={form.control}
                            name="price"
                            label="سعر الساعة"
                            placeholder="100"
                            iconSrc="/assets/dolar.svg"
                            iconAlt="price"
                        />
                        <CustomFormField
                            fieldType={FormFieldType.NUMRICINPUT}
                            control={form.control}
                            name="passengers"
                            label="عدد الركاب"
                            placeholder="4"
                            iconSrc="/assets/person.svg"
                            iconAlt="passengers"
                        />
                        <div className="flex flex-1 w-full flex-row justify-between mt-3">
                            <CustomFormField
                                fieldType={FormFieldType.CHECKBOX}
                                control={form.control}
                                name="automatic"
                                label="أوتوماتيك"
                            />
                            <CustomFormField
                                fieldType={FormFieldType.CHECKBOX}
                                control={form.control}
                                name="gps"
                                label="GPS"
                            />
                        </div>
                    </div>

                    <div className="lg:w-[50%] w-[100%] space-y-6 px-3 items-start">
                        <CustomFormField
                            fieldType={FormFieldType.SKELETON}
                            control={form.control}
                            name="mainImg"
                            label="الرجاء اختيار الصورة الرئيسية للسيارة"
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
                            label="الرجاء اختيار الصور الثانوية للسيارة"
                            renderSkeleton={(field) => (
                                <FormControl>
                                    <FileUploader files={field.value} onChange={field.onChange} />
                                </FormControl>
                            )}
                        />
                    
                    </div>
               </div>
                
               <div className="flex flex-1 justify-center items-center w-full mt-6">
                    <Button styles='lg:w-[50%] w-[100%]' title='إدخال'/>
                </div>
            </form>
        </Form>
    )
}

export default CarAddForm