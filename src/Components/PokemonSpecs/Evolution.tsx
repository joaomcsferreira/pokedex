import React from "react"

import {
  EvolutionContainer,
  PageEvolutionContainer,
  PageInfoContainer,
} from "./style"

import PokemonPreview from "./PokemonPreview"

interface EvolutionProps {
  evolutions: Array<PokemonEvolutionsProps>
}

import arrow from "../../assets/arrow-right.svg"
import Text from "../Form/Text"
import { PokemonEvolutionsProps } from "../../Api/apiTypes"
import { url } from "inspector"

const Evolution = ({ evolutions }: EvolutionProps) => {
  return (
    <PageInfoContainer>
      {evolutions && (
        <PageEvolutionContainer>
          <Text size={1.5} weight={700}>
            Evolution chain
          </Text>
          {evolutions.map((evolution, index) => (
            <EvolutionContainer src={arrow} key={index}>
              {Object.values(evolution).map(
                (pokemon) =>
                  pokemon && (
                    <PokemonPreview key={pokemon.name} url={pokemon.url} />
                  )
              )}
            </EvolutionContainer>
          ))}
        </PageEvolutionContainer>
      )}
    </PageInfoContainer>
  )
}

export default Evolution
