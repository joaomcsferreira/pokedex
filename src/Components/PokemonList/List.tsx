import React from "react"

import { ListContainer } from "./style"

import useService from "../../Api/api"

import Card from "./Card"

import useForm, { useFormProps } from "../../Hooks/useForm"
import FillMode from "../Helper/FillMode"
import Pokemon, { PokemonLinksProps } from "../PokemonSpecs/Pokemon"

interface ListProps {
  currentPage: number
  pageInput: useFormProps
}

const List = ({ currentPage, pageInput }: ListProps) => {
  const [modal, setModal] = React.useState<string | null>(null)
  const [links, setLinks] = React.useState<PokemonLinksProps | null>(null)
  const { pokemons, getPokemons } = useService()

  React.useEffect(() => {
    getPokemons(21, currentPage * 21)

    pageInput.setInitialValue(currentPage)
  }, [currentPage])

  return (
    <>
      <ListContainer>
        {pokemons &&
          pokemons.map((pokemon) => (
            <Card
              setLinks={setLinks}
              setModal={setModal}
              url={pokemon.url}
              key={pokemon.url}
            />
          ))}
      </ListContainer>

      {modal && links && (
        <FillMode setModal={setModal}>
          <Pokemon
            urlPokemon={links.urlPokemon}
            urlSpecies={links.urlSpecies}
          />
        </FillMode>
      )}
    </>
  )
}

export default List
