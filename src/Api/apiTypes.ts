export interface SpriteSmallProps {
  normal: string
  animated: string
}

export interface SpriteLargeProps {
  normal: string
  alternative: string
}

export interface PokemonEvolutionsItemProps {
  name: string
  url: string
}

export interface PokemonStatsProps {
  healthPoints: number
  attack: number
  defense: number
  specialAttack: number
  specialDefense: number
  speed: number
}

export interface PokemonEvolutionsProps {
  basicEvolution: PokemonEvolutionsItemProps
  intermediateEvolution: PokemonEvolutionsItemProps
  finalEvolution: PokemonEvolutionsItemProps
}

export interface BasicPokemonPros {
  id: string
  name: string
  types: Array<string>
  sprite: SpriteSmallProps
  url: string
}

export interface PokemonProps {
  id: string
  name: string
  types: Array<string>
  spriteSmall: SpriteSmallProps
  spriteLarge: SpriteLargeProps
  abilities: Array<string>
  stats: PokemonStatsProps
  height: number
  weight: number
  baseExperience: number
  description: string
  color: string
  shape: string
  habitat: string
  evolutions: Array<PokemonEvolutionsProps>
}

export interface ListPokemonProps {
  previus: string
  next: string
  list: Array<BasicPokemonPros>
}
