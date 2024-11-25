import React from 'react'
import { useForm } from 'react-hook-form';
import { Form } from '../ui/form';
import CustomFormField from '../CustomFormFeild';
import Button from '../Button';

export const FormFieldType = {
    INPUT: 'input',
    TEXTAREA: 'textarea',
    PHONE_INPUT: 'phoneInput',
    CHECKBOX: 'checkbox',
    DATE_PICKER: 'datePicker',
    SELECT: 'select',
    SKELETON: 'skeleton',
  };

const SettingsForm = () => {

    const form = useForm();

    const onSubmit = (data) => {
        console.log(data);
      };

  return (
    <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="font-bold space-y-6 flex flex-1 flex-col w-full text-dimWhite">
            <div className="flex lg:flex-row flex-col">
                <div className="px-3 space-y-6 w-full">
                    <div className="mb-4 flex flex-1 w-full flex-col md:flex-row justify-between mt-3 gap-6">
                        <CustomFormField
                            fieldType={FormFieldType.INPUT}
                            control={form.control}
                            name="code"
                            label="شيفرة المدير"
                            placeholder="AD%K&1"
                            iconSrc="/assets/adminCode.svg"
                            iconAlt="code"
                        />
                        <CustomFormField
                            fieldType={FormFieldType.NUMRICINPUT}
                            control={form.control}
                            name="driverFare"
                            label="أجرة السائق بالساعة"
                            placeholder="100"
                            iconSrc="/assets/price.svg"
                            iconAlt="price"
                        />
                    </div>
                    <div className="mb-4 flex flex-1 w-full flex-col md:flex-row justify-between mt-3 gap-6">
                        <CustomFormField
                            fieldType={FormFieldType.NUMRICINPUT}
                            control={form.control}
                            name="hotelNumToGetOffer"
                            label="عدد حجوزات الفنادق للاشتراك في عرض"
                            placeholder="5"
                            iconSrc="/assets/hotelOffer.svg"
                            iconAlt="hotel get offer"
                        />
                        <CustomFormField
                            fieldType={FormFieldType.NUMRICINPUT}
                            control={form.control}
                            name="hotelNumOffer"
                            label="عدد حجوزات الفنادق المتاحة في العرض"
                            placeholder="1"
                            iconSrc="/assets/hotelOffer.svg"
                            iconAlt="hotel offer"
                        />
                    </div>
                    <div className="mb-4 flex flex-1 w-full flex-col md:flex-row justify-between gap-6">
                        <CustomFormField
                            fieldType={FormFieldType.NUMRICINPUT}
                            control={form.control}
                            name="carNumToGetOffer"
                            label="عدد حجوزات السيارات للاشتراك في عرض"
                            placeholder="5"
                            iconSrc="/assets/carOffer.svg"
                            iconAlt="car get offer"
                        />
                        <CustomFormField
                            fieldType={FormFieldType.NUMRICINPUT}
                            control={form.control}
                            name="carNumOffer"
                            label="عدد حجوزات السيارات المتاحة في العرض"
                            placeholder="1"
                            iconSrc="/assets/carOffer.svg"
                            iconAlt="car offer"
                        />
                    </div>
                </div>

            </div>
            
            <div className="flex flex-1 justify-center items-center w-full mt-6 p-3">
                <Button styles='w-[100%] md:w-[50%]' title='حفظ'/>
            </div>
        </form>
    </Form>
  )
}

export default SettingsForm