// 

import { AppDispatch, RootState } from "@/store/store"
import { setPokemons, startLoadingPokemons } from "./pokemonSlice"
import { PokeAPIData } from "./types"
import { pokemonApi } from "@/api/pokemonApi"


export const getPokemons = (page: number = 0 ) => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    dispatch(startLoadingPokemons())

    // TODO: hacer peticion http

    // const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${ page * 10}`)
    // const data = await response.json() as PokeAPIData
    const { data } = await pokemonApi.get<PokeAPIData>(`pokemon?limit=10&offset=${ page * 10}`)

    const { results: pokemons } = data


    dispatch( setPokemons({ pokemons, page: page + 1 }) )
  }
}