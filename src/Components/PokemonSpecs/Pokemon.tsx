import React from "react"

import {
  MenuSectionContainer,
  MenuSectionItem,
  PokemonContainer,
  PokemonImg,
  PokemonNameContainer,
  PokemonSection,
  PokemonStatsContainer,
} from "./style"

import useService from "../../Api/api"

import pokeball from "../../assets/pokeball.svg"
import Title from "../Form/Title"
import About from "./About"
import Stats from "./Stats"
import Evolution from "./Evolution"
import FillMode from "../Helper/FillMode"
import Loading from "../Helper/Loading"

export interface PokemonLinksProps {
  urlPokemon: string
  urlSpecies: string
}

const Pokemon = ({ urlPokemon, urlSpecies }: PokemonLinksProps) => {
  const { loading, pokemonFull, evolution, getEvolution, getPokemonFull } =
    useService()
  const [currentPage, setCurrentPage] = React.useState<string>("about")

  const handleChildClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation()
  }

  React.useEffect(() => {
    getPokemonFull(urlPokemon, urlSpecies)
  }, [])

  React.useEffect(() => {
    if (pokemonFull?.evolutionChainURL)
      getEvolution(pokemonFull.evolutionChainURL)
  }, [pokemonFull])

  if (loading)
    return (
      <>
        <FillMode>
          <Loading />
        </FillMode>
      </>
    )
  else if (pokemonFull)
    return (
      <>
        {
          <PokemonContainer
            color={pokemonFull?.color}
            src={pokeball}
            onClick={handleChildClick}
          >
            <PokemonSection>
              <PokemonNameContainer>
                <PokemonImg
                  src={pokemonFull.imgFull || pokemonFull.imgFullAlternative}
                />
                <Title
                  capitalize
                  size={14 / Math.sqrt(pokemonFull.name.length)}
                  weight={900}
                  color={`${pokemonFull.color}-hover`}
                  justify="center"
                >
                  {pokemonFull.name.replaceAll("-", " ")}
                </Title>
              </PokemonNameContainer>
            </PokemonSection>
            <PokemonStatsContainer>
              <MenuSectionContainer>
                <MenuSectionItem
                  onClick={() => setCurrentPage("about")}
                  active={currentPage === "about" && true}
                >
                  About
                </MenuSectionItem>
                <MenuSectionItem
                  onClick={() => setCurrentPage("stats")}
                  active={currentPage === "stats" && true}
                >
                  Stats
                </MenuSectionItem>
                <MenuSectionItem
                  onClick={() => setCurrentPage("evolution")}
                  active={currentPage === "evolution" && true}
                >
                  Evolution
                </MenuSectionItem>
              </MenuSectionContainer>
              {currentPage === "about" && <About pokemon={pokemonFull} />}
              {currentPage === "stats" && (
                <Stats stats={pokemonFull.stats} color={pokemonFull.color} />
              )}
              {currentPage === "evolution" && (
                <Evolution
                  evolutions={evolution}
                  currentPokemon={pokemonFull.name}
                />
              )}
            </PokemonStatsContainer>
          </PokemonContainer>
        }
      </>
    )
  else return null
}

export default Pokemon
