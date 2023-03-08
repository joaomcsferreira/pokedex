import axios, { AxiosError } from "axios"
import React from "react"

const VITE_API_URL = import.meta.env.VITE_API_URL
const api = axios.create({ baseURL: VITE_API_URL })

export interface PokemonsProps {
  name: string
  url: string
}

interface PokemonPreviewProps {
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
  sprite: string
  spriteAlternative: string
}

export interface PokemonFullProps {
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
  description: string
  color: string
  shape: string
  habitat: string
  eggs: {
    name: string
    url: string
  }
  evolutionChainURL: string
}

export interface SpeciesProps {
  name: string
  url: string
}

export interface EvolveToProps {
  evolves_to: Array<EvolveToProps>
  is_baby: boolean
  species: SpeciesProps
}

export interface EvolutionChainProps {
  basicStage: SpeciesProps
  intermediateStage: Array<SpeciesProps> | null
  finalStage: Array<SpeciesProps> | null
}

const useService = () => {
  const [error, setError] = React.useState<string | null>(null)
  const [loading, setLoading] = React.useState(false)
  const [pokemons, setPokemons] = React.useState<Array<PokemonsProps>>([])
  const [pokemonPreview, setPokemonPreview] =
    React.useState<PokemonPreviewProps | null>(null)
  const [pokemonFull, setPokemonFull] = React.useState<PokemonFullProps | null>(
    null
  )
  const [evolution, setEvolution] = React.useState<EvolutionChainProps | null>(
    null
  )

  const getPokemons = async (limit: number, offset: number) => {
    try {
      setLoading(true)
      setError(null)

      const response = await api.get(
        `/pokemon/?limit=${limit}&offset=${offset}`
      )

      setPokemons(response.data.results)
    } catch (error) {
      const err = (error as AxiosError).response?.data as { error: string }

      setError(err.error)
    } finally {
      setLoading(false)
    }
  }

  const getPokemonPreview = async (url: string) => {
    try {
      setLoading(true)
      setError(null)
      const response = await api.get(url)

      const pokemon: PokemonPreviewProps = {
        id: response.data.id,
        name: response.data.name,
        types: response.data.types,
        species: response.data.species.url,
        sprite:
          response.data.sprites.versions["generation-v"]["black-white"]
            .animated["front_default"],
        spriteAlternative: response.data.sprites.front_default,
      }

      setPokemonPreview(pokemon)
    } catch (error) {
      const err = (error as AxiosError).response?.data as { error: string }

      setError(err.error)
    } finally {
      setLoading(false)
    }
  }

  const getPokemonFull = async (urlPokemon: string, urlSpecies: string) => {
    try {
      setLoading(true)
      setError(null)
      const responsePokemon = await api.get(urlPokemon)
      const responseSpecies = await api.get(urlSpecies)

      const pokemon: PokemonFullProps = {
        id: responsePokemon.data?.id,
        name: responsePokemon.data?.name,
        types: responsePokemon.data?.types,
        species: responsePokemon.data?.species?.url,
        imgFull:
          responsePokemon.data?.sprites?.other?.dream_world?.front_default,
        imgFullAlternative:
          responsePokemon.data?.sprites?.other?.["official-artwork"]
            ?.front_default,
        sprite:
          responsePokemon.data?.sprites?.versions?.["generation-v"]?.[
            "black-white"
          ]?.animated?.["front_default"],
        spriteAlternative: responsePokemon.data?.sprites?.front_default,
        abilities: responsePokemon.data?.abilities,
        stats: {
          HP: responsePokemon.data?.stats[0].base_stat,
          ATK: responsePokemon.data?.stats[1].base_stat,
          DEF: responsePokemon.data?.stats[2].base_stat,
          SpA: responsePokemon.data?.stats[3].base_stat,
          SpD: responsePokemon.data?.stats[4].base_stat,
          SPD: responsePokemon.data?.stats[5].base_stat,
        },
        height: Number(responsePokemon.data?.height) / 10,
        weight: Number(responsePokemon.data?.weight) / 10,
        base_experience: responsePokemon.data?.base_experience || "-",
        description: responseSpecies.data?.flavor_text_entries
          .filter(
            (flavor: {
              language: { name: string }
              version: { name: string }
            }) => flavor.language.name === "en"
          )[0]
          ?.flavor_text.replaceAll("\f", " "),
        color: `--g-type-${responseSpecies.data?.color.name}`,
        eggs: responseSpecies.data?.egg_groups,
        evolutionChainURL: responseSpecies.data?.evolution_chain?.url,
        habitat: responseSpecies.data?.habitat?.name || "-",
        shape: responseSpecies.data?.shape?.name,
      }

      setPokemonFull(pokemon)
    } catch (error) {
      const err = (error as AxiosError).response?.data as { error: string }

      setError(err.error)
    } finally {
      setLoading(false)
    }
  }

  const getEvolution = async (url: string) => {
    try {
      setLoading(true)
      setError(null)
      const response = await api.get(url)

      const basicStage: SpeciesProps = response.data.chain.species

      const intermediateStage: Array<SpeciesProps> =
        response.data.chain.evolves_to?.map(
          (value: EvolveToProps) => value.species
        )

      const finalStage: Array<SpeciesProps> = []

      response.data.chain.evolves_to?.map((values: EvolveToProps) =>
        values.evolves_to.map((subValue: EvolveToProps) =>
          finalStage.push(subValue.species)
        )
      )

      const evolutionChain = {
        basicStage,
        intermediateStage,
        finalStage,
      }

      setEvolution(evolutionChain)
    } catch (error) {
      const err = (await (error as AxiosError).response?.data) as {
        error: string
      }

      setError(err.error)
    } finally {
      setLoading(false)
    }
  }

  const searchPokemon = async (name: string) => {
    try {
      setLoading(true)
      setError(null)

      const response = await api.get(`/pokemon/?limit=883&offset=0`)

      const pokemonsFind: Array<PokemonsProps> = []

      for (let i = 0; i < response.data.results.length; i++) {
        const regex = new RegExp(`${name}`, "i")

        if (regex.test(response.data.results[i].name))
          pokemonsFind.push(response.data.results[i])
      }

      setPokemons(pokemonsFind)
    } catch (error) {
      const err = (error as AxiosError).response?.data as { error: string }

      setError(err.error)
    } finally {
      setLoading(false)
    }
  }

  return {
    pokemons,
    pokemonPreview,
    pokemonFull,
    evolution,
    error,
    loading,
    getPokemons,
    getPokemonPreview,
    getPokemonFull,
    getEvolution,
    searchPokemon,
  }
}

export default useService
