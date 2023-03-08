import React from "react"

import {
  PokemonPreviewContainer,
  PokemonPreviewImage,
  PokemonPreviewInfo,
} from "./style"

import useService from "../../Api/api"

import Text from "../Form/Text"

interface PokemonPreviewProps {
  url: string
}

const PokemonPreview = ({ url }: PokemonPreviewProps) => {
  const { pokemonPreview, getPokemonPreview } = useService()

  React.useEffect(() => {
    const urlPokemon = url.replace("-species", "")
    getPokemonPreview(urlPokemon)
  }, [])

  return (
    <>
      {pokemonPreview && (
        <PokemonPreviewContainer>
          <PokemonPreviewInfo>
            <PokemonPreviewImage
              src={pokemonPreview.sprite || pokemonPreview.spriteAlternative}
            />
            <Text capitalize size={1.1}>
              {pokemonPreview.name.replaceAll("-", " ")}
            </Text>
          </PokemonPreviewInfo>
        </PokemonPreviewContainer>
      )}
    </>
  )
}

export default PokemonPreview
