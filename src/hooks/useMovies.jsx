import { useEffect, useState } from "react";
import { moviesLink } from "../utils/endpoints";

const useMovies = () => {

    const [movies, setMovies] = useState([]);
    const [favMovies, setFavMovies] = useState([]);
  
    useEffect( () => {
      fetch(moviesLink(import.meta.env.VITE_API_KEY))
        .then(res => res.json())
        .then(data => setMovies(data.results))
        .catch(error => console.error(error))
    }, [])
  
    const toogleFav = (movie) => {
      const {id} = movie
      const IS_FAV = favMovies.find((movie) => movie.id === id)
      if(IS_FAV){
        const indexToRemove = favMovies.indexOf(IS_FAV)
        favMovies.splice(indexToRemove, 1)
        setFavMovies([...favMovies])
      }else{
        setFavMovies([...favMovies, movie])
      }
    } 
  
    const isFav = (id) => favMovies.find((movie) => movie.id === id)

    return{
        movies,
        favMovies,
        toogleFav,
        isFav
    }
}

export default useMovies;