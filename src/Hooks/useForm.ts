import React from "react"

export interface useFormProps {
  value: string
  onChange: ({ target }: React.ChangeEvent<HTMLInputElement>) => void
  clearValue: () => void
}

const useForm = () => {
  const [value, setValue] = React.useState("")

  const onChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setValue(target.value)
  }

  const clearValue = () => {
    setValue("")
  }

  return {
    value,
    onChange,
    clearValue,
  }
}

export default useForm
