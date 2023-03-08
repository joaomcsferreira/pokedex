import React from "react"

import { ListContainer } from "./style"

import useService from "../../Api/api"

import Card from "./Card"

import { useFormProps } from "../../Hooks/useForm"
import FillMode from "../Helper/FillMode"
import Pokemon, { PokemonLinksProps } from "../PokemonSpecs/Pokemon"
import Loading from "../Helper/Loading"

interface ListProps {
  currentPage: number
  pageInput: useFormProps
}

const List = ({ currentPage, pageInput }: ListProps) => {
  const [modal, setModal] = React.useState<string | null>(null)
  const [links, setLinks] = React.useState<PokemonLinksProps | null>(null)
  const { loading, pokemons, getPokemons } = useService()

  React.useEffect(() => {
    getPokemons(21, currentPage * 21)

    pageInput.setInitialValue(currentPage)
  }, [currentPage])

  if (loading)
    return (
      <>
        <FillMode />
        <Loading />
      </>
    )
  else if (pokemons)
    return (
      <>
        <ListContainer>
          {pokemons.map((pokemon) => (
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
  else return null
}

export default List
