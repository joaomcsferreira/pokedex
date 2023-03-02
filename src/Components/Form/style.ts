import styled from "styled-components"

interface ButtonProps {
  color: string
  radius?: number
  full?: boolean
}

interface TextProps {
  size?: number
  weight?: number
  color?: string
  capitalize?: boolean
  padding?: string
  animation?: string
  justify?: string
  isLink?: boolean
}

interface TitleProps {
  size?: number
  weight?: number
  color?: string
  capitalize?: boolean
  animation?: string
  justify?: string
}

const InputContainer = styled.input`
  border: none;
  outline: none;
  padding: 1.5rem 2rem;
  width: 100%;
  font-size: 1.2rem;
  background-color: var(--g-colorGray250);
  color: var(--g-colorGray100);
  border-radius: 3.125rem;

  &:hover,
  :focus {
    outline: 2px solid var(--g-colorGray100);
  }
`

const ButtonContainer = styled.button<ButtonProps>`
  padding: 1.5rem;
  border-radius: ${({ radius }) => (radius ? `${radius}rem` : "1.875rem")};
  width: ${({ full }) => full && "100%"};
  color: var(--g-color-white);
  background-color: ${({ color }) => `var(${color})`};
  display: grid;
  align-items: center;
  border: none;
  font-weight: 600;
  font-size: 1.2rem;
  white-space: nowrap;
  position: relative;
  z-index: 5;
  transition: background-color 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: ${({ color }) => `var(${color}-hover)`};
  }

  &:active {
    transform: scale(0.95);
  }
`

const TextContainer = styled.p<TextProps>`
  font-size: ${({ size }) => (size ? `${size}rem` : "1rem")};
  font-weight: ${({ weight }) => (weight ? weight : "normal")};
  color: ${({ color }) => (color ? `var(${color})` : "var(--g-color-black)")};
  text-transform: ${({ capitalize }) => capitalize && "capitalize"};
  padding: ${({ padding }) => padding && padding};
  text-align: ${({ justify }) => justify && justify};
  text-justify: inter-word;

  cursor: ${({ isLink }) => (isLink ? "pointer" : "text")};

  &:hover {
    text-decoration: ${({ isLink }) => (isLink ? "underline" : "none")};
  }
`

const TitleContainer = styled.h2<TitleProps>`
  font-size: ${({ size }) => (size ? `${size}rem` : "3rem")};
  font-weight: ${({ weight }) => (weight ? weight : "500")};
  color: ${({ color }) => (color ? `var(${color})` : "var(--g-color-black)")};
  text-transform: ${({ capitalize }) => capitalize && "capitalize"};
  text-align: ${({ justify }) => justify && justify};
`

export { InputContainer, ButtonContainer, TextContainer, TitleContainer }
