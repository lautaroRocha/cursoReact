import './App.css'
import {useEffect, useState} from 'react'
import MovieContainer from "./components/MovieContainer/MovieContainer"
import MovieCard from "./components/MovieCard/MovieCard"


const ENDPOINT = `https://api.themoviedb.org/3/discover/movie?api_key=89be792ea6306278c870e8ce473ab886&language=es&sort_by=popularity.desc`

function App() {

  const [movies, setMovies] = useState([]);
  const [favMovies, setFavMovies] = useState([]);

  useEffect( () => {
    fetch(ENDPOINT)
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

  return (
    <>
      <MovieContainer>
        TENGO {favMovies.length} PELÍCULAS FAVORITAS
        {
          !movies.length ? 
          'Cargando películas...' 
          : 
          movies.map( (movie) => <MovieCard movie={movie} isFav={isFav} key={movie.id} toogleFav={toogleFav}/>)
        }
      </MovieContainer>
    </>
  )
}

export default App
