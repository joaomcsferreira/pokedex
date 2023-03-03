import React from "react"

export interface useFormProps {
  value: string
  onChange: ({ target }: React.ChangeEvent<HTMLInputElement>) => void
  clearValue: () => void
  setInitialValue: (value: number) => void
}

const useForm = () => {
  const [value, setValue] = React.useState("")

  const onChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setValue(target.value)
  }

  const clearValue = () => {
    setValue("")
  }

  const setInitialValue = (value: number) => {
    setValue(`${value}`)
  }

  return {
    value,
    onChange,
    clearValue,
    setInitialValue,
  }
}

export default useForm
