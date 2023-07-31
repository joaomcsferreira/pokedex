import React from "react"

import {
  IdTextContainer,
  PageAboutContainer,
  PageAboutMenuInfo,
  PageAboutSectionItem,
  PageInfoContainer,
  PokemonXP,
} from "./style"

import Text from "../Form/Text"
import PokemonType from "../Helper/PokemonType"
import { PokemonProps } from "../../Api/apiTypes"

interface AboutProps {
  pokemon: PokemonProps
}

const About = ({ pokemon }: AboutProps) => {
  return (
    <PageInfoContainer>
      <IdTextContainer>
        <Text weight={700} size={0.9}>{`Nº${("00000" + pokemon.id).slice(
          -5
        )}`}</Text>
      </IdTextContainer>

      <PageAboutContainer>
        <PageAboutSectionItem>
          <Text size={1.5} weight={700}>
            About it
          </Text>
          <Text size={1.25} weight={500}>
            {`"${pokemon.description}"` || "-"}
          </Text>
        </PageAboutSectionItem>

        <PageAboutSectionItem>
          <Text size={1.5} weight={700}>
            Morphometry
          </Text>
          <PageAboutMenuInfo columns={"3"} rows={"2"}>
            <Text size={1.1}>Weigth</Text>
            <Text size={1.1}>Height</Text>
            <Text size={1.1}>Habitat</Text>
            <Text>{`${pokemon.weight}Kg` || "-"}</Text>
            <Text>{`${pokemon.height}m` || "-"}</Text>
            <Text capitalize>{pokemon.habitat || "-"}</Text>
          </PageAboutMenuInfo>
        </PageAboutSectionItem>

        <PageAboutSectionItem>
          <Text size={1.5} weight={700}>
            Abilities
          </Text>
          <PageAboutMenuInfo columns={`${pokemon.abilities.length}`} rows={"1"}>
            {pokemon.abilities.map((ability) => (
              <Text key={ability} size={1.1} capitalize>
                {ability}
              </Text>
            ))}
          </PageAboutMenuInfo>
        </PageAboutSectionItem>

        <PageAboutSectionItem>
          <Text size={1.5} weight={700}>
            Type
          </Text>
          <PageAboutMenuInfo columns={"2"} rows={"2"}>
            <Text size={1.1}>Base Experience</Text>
            <Text size={1.1}>Type</Text>

            <PokemonXP>
              <Text weight={900}>{pokemon.baseExperience}</Text>
              <Text>XP</Text>
            </PokemonXP>
            <PokemonType size={40} types={pokemon.types} />
          </PageAboutMenuInfo>
        </PageAboutSectionItem>
      </PageAboutContainer>
    </PageInfoContainer>
  )
}

export default About
