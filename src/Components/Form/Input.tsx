import React from "react"
import { InputContainer } from "./style"

interface InputProps {
  inputRef?: React.RefObject<HTMLInputElement> | null
  type: string
  value: string
  placeholder: string
  width?: number
  size?: number
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void
  onChange: ({ target }: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = ({
  inputRef,
  type,
  value,
  placeholder,
  width,
  size,
  onKeyDown,
  onChange,
}: InputProps) => {
  return (
    <InputContainer
      ref={inputRef}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      width={width}
      size={size}
      onKeyDown={onKeyDown}
    />
  )
}

export default Input
