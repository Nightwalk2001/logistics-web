import React, {HTMLProps} from "react"
import {DatePicker} from "@/widgets/DatePicker"
import {FieldProps, useField} from "formik"

type InputProps = HTMLProps<HTMLInputElement>

export const Input = ({name, className, label, ...rest}: InputProps) => {
  const [field, meta] = useField(name!)
  const hasError = !!(meta.touched && meta.error)

  return <div className={"flex flex-col space-y-1"}>
    <div className={"flex space-x-2"}>
      <label htmlFor={name} className={"w-14 text-sm"}>{label}</label>
      <input
        id={name}
        className={` h-9 pl-2.5 pr-1.5 py-1 ring-1.1 ring-inset ring-gray-300 rounded-md transition-all focus:outline-none focus:ring-indigo-300 ${className}`}
        {...field}
        {...rest}
      />
    </div>
    <span className={"text-sm text-error"}>{hasError && meta.error}</span>
  </div>
}

type DateProps = {
  name: string
}

export const DateField = ({
                            field, // { name, value, onChange, onBlur }
                            form: {touched, errors}, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                            ...props
                          }: FieldProps) => {

  return <DatePicker date={field.value} onChange={date => field.onChange(date)}/>
}
