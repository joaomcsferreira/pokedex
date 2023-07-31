import React from "react"

import { PokemonCardContainer, CardPokemonIcon } from "./style"

import Text from "../Form/Text"
import Title from "../Form/Title"
import PokemonType from "../Helper/PokemonType"
import { BasicPokemonPros } from "../../Api/apiTypes"

interface CardProps {
  pokemon: BasicPokemonPros
  setModal: React.Dispatch<React.SetStateAction<string | null>>
}

const Card = ({ pokemon, setModal }: CardProps) => {
  return (
    <>
      {pokemon && (
        <PokemonCardContainer
          onClick={() => {
            setModal(pokemon.url)
          }}
        >
          <CardPokemonIcon
            src={pokemon.sprite.animated || pokemon.sprite.normal}
          />

          <Text weight={900} color="--g-color-white">
            Nº{("00000" + pokemon.id).slice(-5)}
          </Text>
          <Title
            size={7 / Math.sqrt(pokemon.name.length)}
            weight={900}
            capitalize
            color="--g-color-white"
          >
            {pokemon.name.replaceAll("-", " ")}
          </Title>
          <PokemonType types={pokemon.types} />
        </PokemonCardContainer>
      )}
    </>
  )
}

export default Card
