import React from "react"

import { PokemonCardContainer, CardPokemonIcon } from "./style"

import { PokemonLinksProps } from "../PokemonSpecs/Pokemon"

import useService from "../../Api/api"

import Text from "../Form/Text"
import Title from "../Form/Title"
import PokemonType from "../Helper/PokemonType"

interface CardProps {
  url: string
  setModal: React.Dispatch<React.SetStateAction<string | null>>
  setLinks: React.Dispatch<React.SetStateAction<PokemonLinksProps | null>>
}

const Card = ({ url, setModal, setLinks }: CardProps) => {
  const { pokemonPreview, getPokemonPreview } = useService()

  React.useEffect(() => {
    if (url) getPokemonPreview(url)
  }, [])

  return (
    <>
      {pokemonPreview && (
        <PokemonCardContainer
          onClick={() => {
            setLinks({ urlPokemon: url, urlSpecies: pokemonPreview.species })
            setModal(pokemonPreview.name)
          }}
        >
          <CardPokemonIcon
            src={pokemonPreview.sprite || pokemonPreview.spriteAlternative}
          />
          <Text weight={900} color="--g-color-white">
            Nº{("00000" + pokemonPreview.id).slice(-5)}
          </Text>
          <Title
            size={7 / Math.sqrt(pokemonPreview.name.length)}
            weight={900}
            capitalize
            color="--g-color-white"
          >
            {pokemonPreview.name.replaceAll("-", " ")}
          </Title>
          <PokemonType types={pokemonPreview.types} />
        </PokemonCardContainer>
      )}
    </>
  )
}

export default Card
