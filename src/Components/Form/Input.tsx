import React from "react"
import { InputContainer } from "./style"

interface InputProps {
  type: string
  value: string
  placeholder: string
  onChange: ({ target }: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = ({ type, value, placeholder, onChange }: InputProps) => {
  return (
    <InputContainer
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  )
}

export default Input
