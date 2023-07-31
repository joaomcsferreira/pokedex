import React from "react"
import {
  HomeContainer,
  Icon,
  LogoContainer,
  LogoIcon,
  PaginationContainer,
  SearchContainer,
} from "./style"

import Pokemon from "./PokemonSpecs/Pokemon"

import useService from "../Api/api"

import Input from "./Form/Input"
import useForm from "../Hooks/useForm"
import Button from "./Form/Button"
import FillMode from "./Helper/FillMode"
import Loading from "./Helper/Loading"
import PokemonsListPage from "./PokemonList/PokemonsListPage"

import logo from "../assets/pokemon_logo.svg"
import previous from "../assets/previous.svg"
import next from "../assets/next.svg"

const Home = () => {
  const [modal, setModal] = React.useState<string | null>(null)
  const [currentPage, setCurrentPage] = React.useState(0)

  const POKEMON_COUNT = import.meta.env.VITE_POKEMON_COUNT
  const SIZE_LIST = import.meta.env.VITE_SIZE_LIST

  const LAST_PAGE = Math.ceil(POKEMON_COUNT / SIZE_LIST)
  const FIRST_PAGE = 0

  const { loading, listPokemons, getListPokemons, searchPokemon } = useService()

  const inputRef = React.useRef<HTMLInputElement>(null)
  const searchRef = React.useRef<HTMLInputElement>(null)

  const pageInput = useForm()

  const search = useForm()

  function handleSearchKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter" && search.value) {
      searchPokemon(search.value)
    }
  }

  function handleInputKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      let newPage = FIRST_PAGE

      if (/^\d+(?:\.\d+)?$/.test(pageInput.value)) {
        if (Number(pageInput.value) * SIZE_LIST > POKEMON_COUNT)
          newPage = LAST_PAGE
        else if (Number(pageInput.value) < FIRST_PAGE) newPage = FIRST_PAGE
        else newPage = Math.trunc(Number(pageInput.value))
      } else {
        newPage = FIRST_PAGE
      }

      pageInput.setInitialValue(newPage)

      setCurrentPage(newPage)

      if (inputRef.current) {
        inputRef.current.blur()
      }
    }
  }

  const handlePreviousPage = () => {
    if (!(currentPage <= FIRST_PAGE))
      setCurrentPage((currentPage) => currentPage - 1)
  }

  const handleNextPage = () => {
    if (!(currentPage >= LAST_PAGE))
      setCurrentPage((currentPage) => currentPage + 1)
  }

  const handleSearchPokemon = () => {
    if (search.value) searchPokemon(search.value)
  }

  React.useEffect(() => {
    getListPokemons(SIZE_LIST, currentPage * SIZE_LIST)

    pageInput.setInitialValue(currentPage)
  }, [currentPage])

  return (
    <HomeContainer>
      <LogoContainer>
        <LogoIcon src={logo} onClick={() => setCurrentPage(FIRST_PAGE)} />
      </LogoContainer>

      <SearchContainer>
        <Input
          inputRef={searchRef}
          onKeyDown={handleSearchKeyDown}
          type="text"
          placeholder="Search your Pokemon..."
          {...search}
        />
        <Button onClick={() => handleSearchPokemon()} color="--g-color-primary">
          Search
        </Button>
      </SearchContainer>

      {loading ? (
        <>
          <FillMode />
          <Loading />
        </>
      ) : (
        <PokemonsListPage listPokemons={listPokemons} setModal={setModal} />
      )}

      <PaginationContainer>
        <Icon
          disabled={currentPage <= FIRST_PAGE ? true : false}
          src={previous}
          onClick={handlePreviousPage}
        />
        <Input
          inputRef={inputRef}
          type="text"
          placeholder=""
          width={pageInput.value.length || 1}
          size={2}
          onKeyDown={handleInputKeyDown}
          {...pageInput}
        />
        <Icon
          disabled={currentPage >= LAST_PAGE ? true : false}
          src={next}
          onClick={handleNextPage}
        />

        {modal && (
          <>
            <FillMode setModal={setModal} />

            <Pokemon setModal={setModal} modal={modal} />
          </>
        )}
      </PaginationContainer>
    </HomeContainer>
  )
}

export default Home
