import React from "react"
import { TitleContainer } from "./style"

interface TitleProps {
  size?: number
  weight?: number
  color?: string
  capitalize?: boolean
  children: React.ReactNode
  justify?: string
}

const Title = ({
  size,
  weight,
  color,
  capitalize,
  justify,
  children,
}: TitleProps) => {
  return (
    <TitleContainer
      size={size}
      weight={weight}
      color={color}
      capitalize={capitalize}
      justify={justify}
    >
      {children}
    </TitleContainer>
  )
}

export default Title
