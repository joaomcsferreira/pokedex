import styled from "styled-components"

interface IconProps {
  disabled?: boolean
}

const ListContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
`

const ListActions = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
`

const CardContainer = styled.div`
  min-width: 15.5rem;
  width: 100%;
  height: 15rem;
  padding: 2rem;
  background-color: var(--g-colorGray150);
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  transition: background-color 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: var(--g-colorGray200);
  }
`

const CardPokemonIcon = styled.img``

const Icon = styled.img<IconProps>`
  width: 4rem;
  background-color: ${({ disabled }) =>
    disabled ? "var(--g-colorGray100)" : "var(--g-color-primary)"};
  padding: 0.2rem;
  border-radius: 50%;
  cursor: ${({ disabled }) => (disabled ? "no-drop" : "pointer")};

  &:hover {
    background-color: ${({ disabled }) =>
      !disabled && "var(--g-color-primary-hover)"};
  }
`

export { ListContainer, ListActions, CardContainer, CardPokemonIcon, Icon }
