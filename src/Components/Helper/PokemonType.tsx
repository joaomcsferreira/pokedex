import React from "react"

import bug from "../../assets/bug.svg"
import dark from "../../assets/dark.svg"
import dragon from "../../assets/dragon.svg"
import electric from "../../assets/electric.svg"
import fairy from "../../assets/fairy.svg"
import fighting from "../../assets/fighting.svg"
import fire from "../../assets/fire.svg"
import flying from "../../assets/flying.svg"
import ghost from "../../assets/ghost.svg"
import grass from "../../assets/grass.svg"
import ground from "../../assets/ground.svg"
import ice from "../../assets/ice.svg"
import normal from "../../assets/normal.svg"
import poison from "../../assets/poison.svg"
import psychic from "../../assets/psychic.svg"
import rock from "../../assets/rock.svg"
import steel from "../../assets/steel.svg"
import water from "../../assets/water.svg"
import { TypeContainer, TypeIcon, TypeName, TypesListContainer } from "./style"

interface PokemonTypeProps {
  types: Array<{
    slot: number
    type: {
      name: string
      url: string
    }
  }>
  size?: number
}

const PokemonType = ({ types, size }: PokemonTypeProps) => {
  const typesList = {
    bug: { src: bug, color: "--g-color-bug" },
    dark: { src: dark, color: "--g-color-dark" },
    dragon: { src: dragon, color: "--g-color-dragon" },
    electric: { src: electric, color: "--g-color-electric" },
    fairy: { src: fairy, color: "--g-color-fairy" },
    fighting: { src: fighting, color: "--g-color-fighting" },
    fire: { src: fire, color: "--g-color-fire" },
    flying: { src: flying, color: "--g-color-flying" },
    ghost: { src: ghost, color: "--g-color-ghost" },
    grass: { src: grass, color: "--g-color-grass" },
    ground: { src: ground, color: "--g-color-ground" },
    ice: { src: ice, color: "--g-color-ice" },
    normal: { src: normal, color: "--g-color-normal" },
    poison: { src: poison, color: "--g-color-poison" },
    psychic: { src: psychic, color: "--g-color-psychic" },
    rock: { src: rock, color: "--g-color-rock" },
    steel: { src: steel, color: "--g-color-steel" },
    water: { src: water, color: "--g-color-water" },
  }
  return (
    <TypesListContainer>
      {types.map((type) => (
        <TypeContainer key={type.type.name}>
          <TypeIcon
            size={size}
            src={typesList[`${type.type.name as keyof typeof typesList}`].src}
          />
          <TypeName
            size={size}
            color={
              typesList[`${type.type.name as keyof typeof typesList}`].color
            }
          >
            {type.type.name}
          </TypeName>
        </TypeContainer>
      ))}
    </TypesListContainer>
  )
}

export default PokemonType
