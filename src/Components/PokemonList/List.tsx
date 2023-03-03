import React from "react"

import { Icon, ListActions, ListContainer } from "./style"

import useService from "../../Api/api"

import Card from "./Card"

import previous from "../../assets/previous.svg"
import next from "../../assets/next.svg"
import Input from "../Form/Input"
import useForm from "../../Hooks/useForm"

interface ListProps {
  currentPage: number
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
}

const List = ({ currentPage, setCurrentPage }: ListProps) => {
  const { pokemons, getPokemons } = useService()
  const inputRef = React.useRef<HTMLInputElement>(null)

  const page = useForm()

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      let newPage = 0

      if (Number(page.value) * 21 > 1279) newPage = 60
      else if (Number(page.value) < 0) newPage = 0
      else newPage = Math.trunc(Number(page.value))

      page.setInitialValue(newPage)

      setCurrentPage(newPage)

      if (inputRef.current) {
        inputRef.current.blur()
      }
    }
  }

  const handlePreviousPage = () => {
    if (!(currentPage <= 0)) setCurrentPage((currentPage) => currentPage - 1)
  }

  const handleNextPage = () => {
    if (!(currentPage >= 60)) setCurrentPage((currentPage) => currentPage + 1)
  }

  React.useEffect(() => {
    getPokemons(21, currentPage * 21)

    page.setInitialValue(currentPage)
  }, [currentPage])

  return (
    <>
      <ListContainer>
        {pokemons &&
          pokemons.map((pokemon) => (
            <Card url={pokemon.url} key={pokemon.url} />
          ))}
      </ListContainer>
      <ListActions>
        <Icon
          disabled={currentPage <= 0 ? true : false}
          src={previous}
          onClick={handlePreviousPage}
        />
        <Input
          inputRef={inputRef}
          type="text"
          placeholder=""
          width={page.value.length || 1}
          size={2}
          onKeyDown={handleKeyDown}
          {...page}
        />
        <Icon
          disabled={currentPage >= 60 ? true : false}
          src={next}
          onClick={handleNextPage}
        />
      </ListActions>
    </>
  )
}

export default List
