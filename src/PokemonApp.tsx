import { useEffect } from "react"

import { getPokemons } from "./store/slices/pokemon"
import { useAppDispatch, useAppSelector } from "./store/hooks"

export const PokemonApp = () => {

  const dispatch = useAppDispatch()
  const { page, pokemons, isLoading }  = useAppSelector((state) => state.pokemons)

  useEffect(() => {
    dispatch(getPokemons())
  }, [])


  const goToNextPage = (page: number) => {

    dispatch(getPokemons( page ))
  }

  const goToPrevPage = (page: number) => {

    if(page == 1) return
    dispatch(getPokemons( page - 2 ))
  }
  return (
    <>
      <h1>PokemonApp</h1>
      <hr />
      {
        isLoading ? <span>Loading...</span> : ''
      }
      <ul>
        {
          pokemons.map( pokemon => ( 
            <li key={pokemon.url}>
              {pokemon.name}
            </li>
          ))
        }
      </ul>

      <section style={{
        display: "flex",
        alignItems: "center",
        gap: "1rem"
      }}>
        <button disabled={isLoading || page == 1 } onClick={ () => goToPrevPage(page) }>
          Prev
        </button>
        <span>Página {page}</span>
        <button disabled={isLoading} onClick={ () => goToNextPage(page) }>
          Next
        </button>
      </section>

    </>
  )
}