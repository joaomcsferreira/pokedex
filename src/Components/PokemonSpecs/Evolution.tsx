import React from "react"

import { EvolutionContainer, PageEvolutionContainer } from "./style"

import { EvolutionChainProps, SpeciesProps } from "../../Api/api"
import PokemonPreview from "./PokemonPreview"

interface EvolutionProps {
  evolutions: EvolutionChainProps | null
  currentPokemon: string
}

import arrow from "../../assets/arrow-right.svg"
import Text from "../Form/Text"

const Evolution = ({ evolutions, currentPokemon }: EvolutionProps) => {
  const [evolutionsMap, setEvolutionsMap] = React.useState<
    Array<Array<SpeciesProps | undefined>> | undefined
  >([])

  const getEvolutions = () => {
    const intermediateSize = evolutions?.intermediateStage?.length || 0
    const finalSize = evolutions?.finalStage?.length || 0

    const evolutionsSorted: Array<Array<SpeciesProps | undefined>> = []

    const { index, stage } = getPokemonStage()

    if (stage === "basic") {
      if (intermediateSize === 0) {
        evolutionsSorted.push([evolutions?.basicStage])
      } else {
        if (intermediateSize === finalSize) {
          for (let i = 0; i < finalSize; i++) {
            evolutionsSorted.push([
              evolutions?.basicStage,
              evolutions?.intermediateStage![i],
              evolutions?.finalStage![i],
            ])
          }
        } else if (finalSize === 0) {
          for (let i = 0; i < intermediateSize; i++) {
            evolutionsSorted.push([
              evolutions?.basicStage,
              evolutions?.intermediateStage![i],
              evolutions?.finalStage![i],
            ])
          }
        } else if (intermediateSize === 1 && finalSize >= 1) {
          for (let i = 0; i < finalSize; i++) {
            evolutionsSorted.push([
              evolutions?.basicStage,
              evolutions?.intermediateStage![0],
              evolutions?.finalStage![i],
            ])
          }
        }
      }
    } else if (stage === "intermediate") {
      if (intermediateSize === 1 && finalSize >= 1) {
        for (let i = 0; i < finalSize; i++) {
          evolutionsSorted.push([
            evolutions?.basicStage,
            evolutions?.intermediateStage![0],
            evolutions?.finalStage![i],
          ])
        }
      } else if (intermediateSize === finalSize) {
        evolutionsSorted.push([
          evolutions?.basicStage,
          evolutions?.intermediateStage![index],
          evolutions?.finalStage![index],
        ])
      } else {
        evolutionsSorted.push([
          evolutions?.basicStage,
          evolutions?.intermediateStage![index],
        ])
      }
    } else {
      if (intermediateSize === 1) {
        evolutionsSorted.push([
          evolutions?.basicStage,
          evolutions?.intermediateStage![0],
          evolutions?.finalStage![index],
        ])
      } else {
        evolutionsSorted.push([
          evolutions?.basicStage,
          evolutions?.intermediateStage![index],
          evolutions?.finalStage![index],
        ])
      }
    }

    return evolutionsSorted
  }

  const getPokemonStage = (): { stage: string; index: number } => {
    let stage: string = ""
    let index: number | undefined = -1

    if (evolutions?.basicStage.name === currentPokemon) {
      stage = "basic"
      index = 0
    }

    evolutions?.intermediateStage?.map((evolution) => {
      if (evolution.name === currentPokemon) {
        stage = "intermediate"
        index = evolutions.intermediateStage?.findIndex(
          (pokemon) => pokemon.name === evolution.name
        )
      }
    })

    evolutions?.finalStage?.map((evolution) => {
      if (evolution.name === currentPokemon) {
        ;(stage = "final"),
          (index = evolutions.finalStage?.findIndex(
            (pokemon) => pokemon.name === evolution.name
          ))
      }
    })

    return { stage, index }
  }

  const sortedEvolutions = () => {
    const evolutionsSorted = getEvolutions()

    setEvolutionsMap(evolutionsSorted)
  }

  React.useEffect(() => {
    sortedEvolutions()
  }, [evolutions])

  return (
    <>
      {evolutionsMap && (
        <PageEvolutionContainer>
          <Text size={1.5} weight={700}>
            Evolution chain
          </Text>
          {evolutionsMap.map((evolution, index) => (
            <EvolutionContainer src={arrow} key={index}>
              {evolution.map(
                (pokemon) =>
                  pokemon?.url && (
                    <PokemonPreview key={pokemon.name} url={pokemon.url} />
                  )
              )}
            </EvolutionContainer>
          ))}
        </PageEvolutionContainer>
      )}
    </>
  )
}

export default Evolution
