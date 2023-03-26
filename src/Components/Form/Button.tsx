import React from "react"
import { ButtonContainer } from "./style"

interface ButtonProps {
  color: string
  full?: boolean
  children: React.ReactNode
  onClick?: () => void
}

const Button = ({ color, full, children, onClick }: ButtonProps) => {
  return (
    <ButtonContainer full={full} color={color} onClick={onClick}>
      {children}
    </ButtonContainer>
  )
}

export default Button
