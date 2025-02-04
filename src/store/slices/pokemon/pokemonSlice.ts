// import { RootState } from '...'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { PokemonResult } from './types';




export interface PokemonsState {
  page: number;
  pokemons: PokemonResult[];
  isLoading: boolean;
}

const initialState: PokemonsState = {
  page: 0,
  pokemons: [],
  isLoading: false
} 

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    startLoadingPokemons: (state) => {
      state.isLoading = true
    },
    setPokemons: (state, action: PayloadAction<{ page: number,  pokemons: PokemonResult[] }>) => {
      state.isLoading = false
      state.page = action.payload.page
      state.pokemons = action.payload.pokemons
    }
  },
})

// Action creators are generated for each case reducer function
export const { startLoadingPokemons, setPokemons } = pokemonSlice.actions
// export const selectTemplate = (state: RootState) => state.