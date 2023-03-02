import React from "react"

import useService from "../../Api/api"

import Card from "./Card"
import { ListContainer } from "./style"

interface ListProps {
  pages: number
}

const List = ({ pages }: ListProps) => {
  const { pokemons, getPokemons } = useService()

  React.useEffect(() => {
    getPokemons(21, pages)
  }, [])

  return (
    <ListContainer>
      {pokemons &&
        pokemons.map((pokemon) => <Card url={pokemon.url} key={pokemon.url} />)}
    </ListContainer>
  )
}

export default List
