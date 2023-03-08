import styled from "styled-components"

const PokemonsListContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
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
