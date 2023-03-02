import axios, { AxiosError } from "axios"
import React from "react"

const VITE_API_URL = import.meta.env.VITE_API_URL
const api = axios.create({ baseURL: VITE_API_URL })

interface pokemonsProps {
  name: string
  url: string
}

export interface pokemonProps {
  id: string
  name: string
  types: Array<{
    slot: number
    type: {
      name: string
      url: string
    }
  }>
  species: string
  imgFull: string
  imgFullAlternative: string
  sprite: string
  spriteAlternative: string
  abilities: Array<{
    ability: {
      name: string
      url: string
    }
    is_hidden: boolean
    slot: number
  }>
  stats: {
    HP: string
    ATK: string
    DEF: string
    SpA: string
    SpD: string
    SPD: string
  }
  height: number
  weight: number
  base_experience: number
}

const useService = () => {
  const [error, setError] = React.useState<string | null>(null)
  const [pokemons, setPokemons] = React.useState<Array<pokemonsProps>>([])
  const [pokemon, setPokemon] = React.useState<pokemonProps | null>(null)

  const getPokemons = async (limit: number, offset: number) => {
    try {
      const response = await api.get(
        `/pokemon/?limit=${limit}&offset=${offset}`
      )

      setPokemons(response.data.results)
    } catch (error) {
      const err = (error as AxiosError).response?.data as { error: string }

      setError(err.error)
    }
  }

  const getPokemon = async (url: string) => {
    try {
      const response = await api.get(url)

      const pokemon: pokemonProps = {
        id: response.data.id,
        name: response.data.name,
        types: response.data.types,
        species: response.data.species.url,
        imgFull: response.data.sprites.other.dream_world.front_default,
        imgFullAlternative:
          response.data.sprites.other["official-artwork"].front_default,
        sprite:
          response.data.sprites.versions["generation-v"]["black-white"]
            .animated["front_default"],
        spriteAlternative: response.data.sprites.front_default,
        abilities: response.data.abilities,
        stats: {
          HP: response.data.stats[0].base_stat,
          ATK: response.data.stats[1].base_stat,
          DEF: response.data.stats[2].base_stat,
          SpA: response.data.stats[3].base_stat,
          SpD: response.data.stats[4].base_stat,
          SPD: response.data.stats[5].base_stat,
        },
        height: Number(response.data.height) / 10,
        weight: Number(response.data.weight) / 10,
        base_experience: response.data.base_experience,
      }

      setPokemon(pokemon)
    } catch (error) {
      const err = (error as AxiosError).response?.data as { error: string }

      setError(err.error)
    }
  }

  return { pokemons, pokemon, error, getPokemons, getPokemon }
}

export default useService
