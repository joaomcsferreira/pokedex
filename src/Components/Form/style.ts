import styled from "styled-components"

interface ButtonProps {
  color: string
  radius?: number
  full?: boolean
}

const InputContainer = styled.input`
  border: none;
  outline: none;
  padding: 1.5rem 2rem;
  width: 100%;
  font-size: 1.2rem;
  background-color: var(--g-colorGray250);
  color: var(--g-colorGray150);
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
  cursor: pointer;

  &:hover {
    background-color: ${({ color }) => `var(${color}-hover)`};
  }

  &:active {
    transform: scale(0.95);
  }
`

export { InputContainer, ButtonContainer }
