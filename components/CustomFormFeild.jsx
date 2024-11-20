"use client"
import { E164Number } from "libphonenumber-js/core";
import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
import { Input } from "./ui/input";
import { Control } from "react-hook-form"

import Image from "next/image";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Select, SelectContent, SelectTrigger, SelectValue } from "./ui/select";
import { Textarea } from "./ui/textarea";
import { Checkbox } from "./ui/checkbox";
import { FormFieldType } from "./forms/CarReservationForm";

const RenderField= ({field, props}) => {
    
    const { fieldType, iconSrc, iconAlt, placeholder, showTimeSelect, dateFormat, renderSkeleton } = props;
    
    switch(fieldType){
        case FormFieldType.INPUT:
            return(
                <div className="flex rounded-md border border-customGray bg-transparent">
                    {iconSrc && (
                        <Image
                            src={iconSrc}
                            alt={iconAlt || 'icon'}
                            width={24}
                            height={24}
                            className="mr-2"
                        />
                    )}
                    <FormControl>
                        <Input
                            placeholder={placeholder}
                            {...field}
                            className="shad-input border-0 text-customSecondary"
                        />
                    </FormControl>
                </div>
            )

        case FormFieldType.NUMRICINPUT:
            return(
                <div className="flex rounded-md border border-customGray bg-transparent">
                    {iconSrc && (
                        <Image
                            src={iconSrc}
                            alt={iconAlt || 'icon'}
                            width={24}
                            height={24}
                            className="mr-2"
                        />
                    )}
                    <FormControl>
                        <Input
                            placeholder={placeholder}
                            {...field}
                            className="shad-input border-0 text-customSecondary"
                            type="number"
                        />
                    </FormControl>
                </div>
            )

        case FormFieldType.TEXTAREA:
            return(
                <FormControl>
                   <Textarea
                    placeholder={placeholder}
                    {...field}
                    className="shad-textArea text-customSecondary"
                    disabled={props.disabled}
                   />
                </FormControl>
            )
            
        case FormFieldType.PHONE_INPUT:
            return(
                <FormControl>
                    <PhoneInput
                        defaultCountry='US'
                        placeholder={placeholder}
                        international
                        withCountryCallingCode
                        value={field.value}
                        onChange={field.onChange}
                        className="input-phone bg-transparent text-customSecondary"
                    />
                </FormControl>
            )
            
        case FormFieldType.DATE_PICKER:
            return(
                <div className="flex rounded-md border border-customGray bg-transparent text-customSecondary">
                    <Image
                        src='/assets/calendar.svg'
                        width={24}
                        height={24}
                        alt='calender'
                        className="mr-2"
                    />
                    <FormControl>
                        <DatePicker selected={field.value} 
                                    onChange={(date) => field.onChange(date)} 
                                    dateFormat={dateFormat ?? 'MM/dd/yyyy'}
                                    showTimeSelect={showTimeSelect ?? false}
                                    timeInputLabel="Time:"
                                    wrapperClassName='date-picker bg-transparent'
                                    />
                    </FormControl>
                </div>
            )

        case FormFieldType.SKELETON:
            return(
                renderSkeleton ? renderSkeleton(field) : null
            )
            
        case FormFieldType.SELECT:
            return(
                <FormControl>
                    <Select
                        defaultValue={field.value}
                        onValueChange={field.onChange}
                    >
                        <FormControl>
                           <SelectTrigger className="shad-select-trigger text-customSecondary">
                            <SelectValue placeholder={placeholder}/>
                           </SelectTrigger> 
                        </FormControl>
                        <SelectContent className="shad-select-content ">{props.children}</SelectContent>
                    </Select>
                </FormControl>
            )
        case FormFieldType.CHECKBOX:
            return (
                <FormControl>
                <div className="flex items-center gap-4">
                    <Checkbox
                    id={props.name}
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    className="w-5 h-5 bg-transparent border-customSecondary hover:border-customSecondary focus:ring-2 focus:ring-customSecondary checked:bg-transparent checked:border-customSecondary"
                    />
                    <label htmlFor={props.name} className="checkbox-label text-customSecondary">
                    {props.label}
                    </label>
                </div>
                </FormControl>
            );
        default:
            break;
    }
  }
  
const CustomFormField = ( props) => {

    const { control, fieldType, name, label } = props; 
    
  return (
    <FormField
        control={control}
        name={name}
        render={({ field }) => (
        <FormItem className="flex-1">
           {fieldType !== FormFieldType.CHECKBOX && label &&(
            <FormLabel className='text-primary font-semibold text-lg'>{label}</FormLabel>
           )}

           <RenderField field={field} props={props}/>

           <FormMessage className="shad-error"/>
        </FormItem>
        )}
    />
  )
}

export default CustomFormField
