import React from "react"

import {
  PageInfoContainer,
  PageStatsContainer,
  PageStatsItem,
  PageStatsSection,
  StatBar,
} from "./style"

import Text from "../Form/Text"
import Graph from "../Helper/Graph"
import { PokemonStatsProps } from "../../Api/apiTypes"

interface StatsProps {
  stats: PokemonStatsProps
  color: string
}

const Stats = ({ stats, color }: StatsProps) => {
  const MaxStats = [
    ["HP", 255],
    ["Attack", 180],
    ["Defense", 230],
    ["Special Attack", 180],
    ["Special Defense", 230],
    ["Speed", 160],
  ]

  return (
    <PageInfoContainer>
      <Text size={1.5} weight={700}>
        Skills Chart
      </Text>
      <PageStatsContainer>
        <Graph
          color={`--g-type-${color}`}
          stats={Object.values(stats).map((stat) => Number(stat))}
        />
        <PageStatsSection>
          {Object.entries(stats).map((stat, index) => (
            <PageStatsItem key={index}>
              <Text weight={500} size={1}>
                {stat[0]}
              </Text>
              <StatBar
                color={`--g-type-${color}`}
                width={(Number(stat[1]) * 100) / Number(MaxStats[index][1])}
              />
              <Text weight={500} size={1.1}>
                {stat[1]}
              </Text>
            </PageStatsItem>
          ))}
        </PageStatsSection>
      </PageStatsContainer>
    </PageInfoContainer>
  )
}

export default Stats
