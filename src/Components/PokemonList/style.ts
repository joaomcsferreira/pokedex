import styled from "styled-components"

const PokemonsListContainer = styled.div`
  width: 100%;
  display: grid;
  gap: 1rem;

  @media (min-width: 668px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1068px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

const PokemonCardContainer = styled.div`
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

export { PokemonsListContainer, PokemonCardContainer, CardPokemonIcon }
