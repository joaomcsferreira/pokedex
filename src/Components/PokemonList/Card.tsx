import React from "react"
import useService from "../../Api/api"
import Text from "../Form/Text"
import Title from "../Form/Title"
import PokemonType from "../Helper/PokemonType"
import { PokemonLinksProps } from "../PokemonSpecs/Pokemon"
import { CardContainer, CardPokemonIcon } from "./style"

interface CardProps {
  url: string
  setModal: React.Dispatch<React.SetStateAction<string | null>>
  setLinks: React.Dispatch<React.SetStateAction<PokemonLinksProps | null>>
}

const Card = ({ url, setModal, setLinks }: CardProps) => {
  const { pokemonPreview, getPokemonPreview } = useService()

  React.useEffect(() => {
    getPokemonPreview(url)
  }, [])

  return (
    <>
      {pokemonPreview && (
        <CardContainer
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
        </CardContainer>
      )}
    </>
  )
}

// 4.5 / 2.5

export default Card
