import React from "react"
import {
  HomeContainer,
  Icon,
  LogoContainer,
  LogoIcon,
  PaginationContainer,
  SearchContainer,
} from "./style"

import Pokemon, { PokemonLinksProps } from "./PokemonSpecs/Pokemon"

import useService from "../Api/api"

import Input from "./Form/Input"
import useForm from "../Hooks/useForm"
import Button from "./Form/Button"
import FillMode from "./Helper/FillMode"
import Loading from "./Helper/Loading"
import PokemonsList from "./PokemonList/PokemonsList"

import logo from "../assets/pokemon_logo.svg"
import previous from "../assets/previous.svg"
import next from "../assets/next.svg"

const Home = () => {
  const [modal, setModal] = React.useState<string | null>(null)
  const [links, setLinks] = React.useState<PokemonLinksProps | null>(null)
  const [currentPage, setCurrentPage] = React.useState(0)

  const { loading, pokemons, getPokemons, searchPokemon } = useService()

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

  const handleSearchPokemon = () => {
    if (search.value) searchPokemon(search.value)
  }

  React.useEffect(() => {
    getPokemons(21, currentPage * 21)

    pageInput.setInitialValue(currentPage)
  }, [currentPage])

  return (
    <HomeContainer>
      <LogoContainer>
        <LogoIcon src={logo} onClick={() => setCurrentPage(0)} />
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
        <PokemonsList
          pokemons={pokemons}
          setLinks={setLinks}
          setModal={setModal}
        />
      )}

      <PaginationContainer>
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
          onKeyDown={handleInputKeyDown}
          {...pageInput}
        />
        <Icon
          disabled={currentPage >= 42 ? true : false}
          src={next}
          onClick={handleNextPage}
        />

        {modal && links && (
          <>
            <FillMode setModal={setModal} />

            <Pokemon
              urlPokemon={links.urlPokemon}
              urlSpecies={links.urlSpecies}
              setModal={setModal}
            />
          </>
        )}
      </PaginationContainer>
    </HomeContainer>
  )
}

export default Home
