import axios, { AxiosError } from "axios"
import React from "react"
import { PokemonProps, ListPokemonProps } from "./apiTypes"

const VITE_API_URL = import.meta.env.VITE_API_URL
const api = axios.create({ baseURL: VITE_API_URL })

const useService = () => {
  const [error, setError] = React.useState<string | null>(null)
  const [loading, setLoading] = React.useState(false)
  const [listPokemons, setListPokemons] = React.useState<ListPokemonProps>(
    {} as ListPokemonProps
  )
  const [pokemon, setPokemon] = React.useState<PokemonProps | null>(null)

  const getListPokemons = async (limit: number, step: number) => {
    try {
      setLoading(true)
      setError(null)

      const response = await api.get(
        `/pokemon/list?limit=${limit}&step=${step}`
      )

      setListPokemons(response.data)
    } catch (error) {
      const err = (error as AxiosError).response?.data as { error: string }

      setError(err.error)
    } finally {
      setLoading(false)
    }
  }

  const getPokemon = async (urlPokemon: string) => {
    try {
      setLoading(true)
      setError(null)
      const pokemon = await api.get(urlPokemon)

      setPokemon(pokemon.data)
    } catch (error) {
      const err = (error as AxiosError).response?.data as { error: string }

      setError(err.error)
    } finally {
      setLoading(false)
    }
  }

  const getBasicPokemon = async (url: string) => {
    try {
      const pokemon = await api.get(url)

      return pokemon.data
    } catch (error) {
      const err = (error as AxiosError).response?.data as { error: string }

      setError(err.error)
    }
  }

  const searchPokemon = async (name: string) => {
    try {
      setLoading(true)
      setError(null)

      const matchPokemons = await api.get(`/pokemon/search/${name}`)

      setListPokemons(matchPokemons.data)
    } catch (error) {
      const err = (error as AxiosError).response?.data as { error: string }

      setError(err.error)
    } finally {
      setLoading(false)
    }
  }

  return {
    listPokemons,
    pokemon,
    error,
    loading,
    getListPokemons,
    getPokemon,
    getBasicPokemon,
    searchPokemon,
  }
}

export default useService
