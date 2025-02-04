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

    dispatch(getPokemons( page + 1))
  }

  const goToPrevPage = (page: number) => {

    if(page == 1) return
    dispatch(getPokemons(page - 1))
  }
  return (
    <>
      <h1>PokemonApp</h1>
      <hr />
   
      <ul style={{
        minHeight: "250px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}>
        {
          isLoading 
          ? <div style={{ height: "100%", display: "flex", alignContent: "center", alignSelf: "center" }}><span>Loading...</span></div>
          : pokemons.map( pokemon => ( 
            <li key={pokemon.url}>
              {pokemon.name}
            </li>
          ))
        }
   
      </ul>

      <section style={{
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        justifyContent: "center"
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