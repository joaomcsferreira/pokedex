import styled from "styled-components"

interface TypeNameProps {
  color: string
}

const TypesListContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`

const TypeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.2rem;
`

const TypeIcon = styled.img`
  width: 30px;
`

const TypeName = styled.p<TypeNameProps>`
  font-size: 0.7rem;
  text-transform: uppercase;
  font-weight: 700;
  background-color: var(--g-color-white);
  color: ${({ color }) => `var(${color})`};
  padding: 0 0.5rem;
  border-radius: 1rem;
`

export { TypesListContainer, TypeContainer, TypeIcon, TypeName }
