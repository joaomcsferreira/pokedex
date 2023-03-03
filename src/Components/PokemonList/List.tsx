import React from "react"

import { Icon, ListActions, ListContainer } from "./style"

import useService from "../../Api/api"

import Card from "./Card"

import previous from "../../assets/previous.svg"
import next from "../../assets/next.svg"
import Input from "../Form/Input"
import useForm from "../../Hooks/useForm"

interface ListProps {
  pages: number
  setPages: React.Dispatch<React.SetStateAction<number>>
}

const List = ({ pages, setPages }: ListProps) => {
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

      setPages(newPage)

      if (inputRef.current) {
        inputRef.current.blur()
      }
    }
  }

  const handlePreviousPage = () => {
    if (!(pages <= 0)) setPages((pages) => pages - 1)
  }

  const handleNextPage = () => {
    if (!(pages >= 60)) setPages((pages) => pages + 1)
  }

  React.useEffect(() => {
    getPokemons(21, pages * 21)

    page.setInitialValue(pages)
  }, [pages])

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
          disabled={pages <= 0 ? true : false}
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
          disabled={pages >= 60 ? true : false}
          src={next}
          onClick={handleNextPage}
        />
      </ListActions>
    </>
  )
}

export default List
