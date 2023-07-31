import React from "react"

import {
  ButtonCloseMobile,
  MenuSectionContainer,
  MenuSectionItem,
  PokemonContainer,
  PokemonImg,
  PokemonNameContainer,
  PokemonSection,
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
  modal: string
  setModal?: React.Dispatch<React.SetStateAction<string | null>>
}

const Pokemon = ({ modal, setModal }: PokemonLinksProps) => {
  const { loading, pokemon, getPokemon } = useService()

  const [currentPage, setCurrentPage] = React.useState<string>("about")

  const handleChildClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation()
  }

  React.useEffect(() => {
    getPokemon(modal)
  }, [])

  React.useEffect(() => {
    document.body.style.overflow = "hidden"

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [])

  if (loading)
    return (
      <FillMode>
        <Loading />
      </FillMode>
    )
  else if (pokemon)
    return (
      <PokemonContainer
        color={`--g-type-${pokemon?.color}`}
        src={pokeball}
        onClick={handleChildClick}
      >
        <ButtonCloseMobile onClick={() => setModal && setModal(null)}>
          <svg viewBox="0 0 348.333 348.334">
            <path
              fill="#fff"
              d="M336.559,68.611L231.016,174.165l105.543,105.549c15.699,15.705,15.699,41.145,0,56.85c-7.844,7.844-18.128,11.769-28.407,11.769c-10.296,0-20.581-3.919-28.419-11.769L174.167,231.003L68.609,336.563c-7.843,7.844-18.128,11.769-28.416,11.769c-10.285,0-20.563-3.919-28.413-11.769c-15.699-15.698-15.699-41.139,0-56.85l105.54-105.549L11.774,68.611c-15.699-15.699-15.699-41.145,0-56.844c15.696-15.687,41.127-15.687,56.829,0l105.563,105.554L279.721,11.767c15.705-15.687,41.139-15.687,56.832,0C352.258,27.466,352.258,52.912,336.559,68.611z"
            />
          </svg>
        </ButtonCloseMobile>

        <PokemonSection>
          <PokemonNameContainer>
            <PokemonImg
              src={
                pokemon.spriteLarge.normal || pokemon.spriteLarge.alternative
              }
            />
            <Title
              capitalize
              weight={900}
              color={`${pokemon.color}-hover`}
              justify="center"
            >
              {pokemon.name.replaceAll("-", " ")}
            </Title>
          </PokemonNameContainer>
        </PokemonSection>

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

        {currentPage === "about" && <About pokemon={pokemon} />}
        {currentPage === "stats" && (
          <Stats stats={pokemon.stats} color={pokemon.color} />
        )}
        {currentPage === "evolution" && (
          <Evolution evolutions={pokemon.evolutions} />
        )}
      </PokemonContainer>
    )
  else return null
}

export default Pokemon
