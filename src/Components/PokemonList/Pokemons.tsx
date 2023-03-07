import React from "react"
import { Icon, ListActions } from "./style"

import previous from "../../assets/previous.svg"
import next from "../../assets/next.svg"

import useForm from "../../Hooks/useForm"
import Input from "../Form/Input"
import List from "./List"

const Pokemons = () => {
  const [currentPage, setCurrentPage] = React.useState(0)
  const inputRef = React.useRef<HTMLInputElement>(null)

  const pageInput = useForm()

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      let newPage = 0

      if (/^\d+(?:\.\d+)?$/.test(pageInput.value)) {
        if (Number(pageInput.value) * 21 > 883) newPage = 42
        else if (Number(pageInput.value) < 0) newPage = 0
        else newPage = Math.trunc(Number(pageInput.value))
      } else {
        newPage = 0
      }

      pageInput.setInitialValue(newPage)

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
    if (!(currentPage >= 42)) setCurrentPage((currentPage) => currentPage + 1)
  }

  return (
    <>
      <List currentPage={currentPage} pageInput={pageInput} />

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
          width={pageInput.value.length || 1}
          size={2}
          onKeyDown={handleKeyDown}
          {...pageInput}
        />
        <Icon
          disabled={currentPage >= 42 ? true : false}
          src={next}
          onClick={handleNextPage}
        />
      </ListActions>
    </>
  )
}

export default Pokemons
