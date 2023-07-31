import React from "react"

import {
  PokemonPreviewContainer,
  PokemonPreviewImage,
  PokemonPreviewInfo,
} from "./style"

import useService from "../../Api/api"

import Text from "../Form/Text"
import { BasicPokemonPros } from "../../Api/apiTypes"

interface PokemonPreviewProps {
  url: string
}

const PokemonPreview = ({ url }: PokemonPreviewProps) => {
  const [pokemon, setPokemon] = React.useState<BasicPokemonPros>()

  const { getBasicPokemon } = useService()

  React.useEffect(() => {
    const getPokemon = async () => {
      const pokemonResponse = await getBasicPokemon(url)

      setPokemon(pokemonResponse)
    }

    getPokemon()
  }, [])

  return (
    <>
      {pokemon && (
        <PokemonPreviewContainer>
          <PokemonPreviewInfo>
            <PokemonPreviewImage
              src={pokemon.sprite.animated || pokemon.sprite.normal}
            />
            <Text capitalize size={1.1}>
              {pokemon.name.replaceAll("-", " ")}
            </Text>
          </PokemonPreviewInfo>
        </PokemonPreviewContainer>
      )}
    </>
  )
}

export default PokemonPreview
