import React from "react"
import { TextContainer } from "./style"

interface TextProps {
  size?: number
  weight?: number
  color?: string
  capitalize?: boolean
  padding?: string
  children: React.ReactNode
  justify?: string
  isLink?: boolean
  onClick?: () => void
}

const Text = ({
  size,
  weight,
  color,
  capitalize,
  padding,
  justify,
  isLink,
  onClick,
  children,
}: TextProps) => {
  return (
    <TextContainer
      size={size}
      weight={weight}
      color={color}
      capitalize={capitalize}
      padding={padding}
      justify={justify}
      isLink={isLink}
      onClick={() => onClick && onClick()}
    >
      {children}
    </TextContainer>
  )
}

export default Text
