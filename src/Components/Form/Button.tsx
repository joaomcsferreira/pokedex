import React from "react"
import { ButtonContainer } from "./style"

interface ButtonProps {
  color: string
  radius?: number
  full?: boolean
  children: React.ReactNode
  onClick?: () => void
}

const Button = ({ color, radius, full, children, onClick }: ButtonProps) => {
  return (
    <ButtonContainer
      radius={radius}
      full={full}
      color={color}
      onClick={onClick}
    >
      {children}
    </ButtonContainer>
  )
}

export default Button
