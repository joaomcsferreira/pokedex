import React from "react"
import useService from "../../Api/api"
import Text from "../Form/Text"
import Title from "../Form/Title"
import PokemonType from "../Helper/PokemonType"
import { CardContainer, CardPokemonIcon } from "./style"

interface CardProps {
  url: string
}

const Card = ({ url }: CardProps) => {
  const { pokemon, getPokemon } = useService()

  React.useEffect(() => {
    getPokemon(url)
  }, [])

  return (
    <>
      {pokemon && (
        <CardContainer>
          <CardPokemonIcon src={pokemon.sprite || pokemon.spriteAlternative} />
          <Text weight={900} color="--g-color-white">
            Nº{("00000" + pokemon.id).slice(-5)}
          </Text>
          <Title size={2.8} weight={900} capitalize color="--g-color-white">
            {pokemon.name}
          </Title>
          <PokemonType types={pokemon.types} />
        </CardContainer>
      )}
    </>
  )
}

export default Card
