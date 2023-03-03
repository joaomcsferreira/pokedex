import React from "react"

import { ListContainer } from "./style"

import useService from "../../Api/api"

import Card from "./Card"

import useForm, { useFormProps } from "../../Hooks/useForm"

interface ListProps {
  currentPage: number
  pageInput: useFormProps
}

const List = ({ currentPage, pageInput }: ListProps) => {
  const { pokemons, getPokemons } = useService()

  React.useEffect(() => {
    getPokemons(21, currentPage * 21)

    pageInput.setInitialValue(currentPage)
  }, [currentPage])

  return (
    <ListContainer>
      {pokemons &&
        pokemons.map((pokemon) => <Card url={pokemon.url} key={pokemon.url} />)}
    </ListContainer>
  )
}

export default List
