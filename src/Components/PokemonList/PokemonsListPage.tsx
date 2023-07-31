import React, { SetStateAction } from "react"

import { PokemonsListContainer } from "./style"

import PokemonCard from "./PokemonCard"
import Text from "../Form/Text"
import { ListPokemonProps } from "../../Api/apiTypes"

interface PokemonsListPageProps {
  listPokemons: ListPokemonProps
  setModal: React.Dispatch<SetStateAction<string | null>>
}

const PokemonsListPage = ({
  listPokemons,
  setModal,
}: PokemonsListPageProps) => {
  return (
    <>
      {listPokemons.list ? (
        <PokemonsListContainer>
          {listPokemons.list.map(
            (pokemon) =>
              pokemon && (
                <PokemonCard
                  pokemon={pokemon}
                  setModal={setModal}
                  key={pokemon.url}
                />
              )
          )}
        </PokemonsListContainer>
      ) : (
        <Text>{"Sorry, no Pokemon found."}</Text>
      )}
    </>
  )
}

export default PokemonsListPage
