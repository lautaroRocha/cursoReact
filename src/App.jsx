import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Nav, Card, Detail, Container, Welcome } from './components'
import useMovies from './hooks/useMovies'


function App() {

  const {movies, favMovies, isFav, toogleFav} = useMovies()

  return (
    <>
    <BrowserRouter>
    <Nav favs={favMovies.length}/>
      <Routes>
        <Route path='/' element={<Welcome/>}/>
        <Route path='/movies' element={
            <Container>
            {
              !movies.length ? 
              'Cargando películas...' 
              : 
              movies.map( (movie) => <Card movie={movie} isFav={isFav} key={movie.id} toogleFav={toogleFav}/>)
            }
            </Container> 
        }/>
        <Route path='/favs'element={
           <Container>
           {
             !movies.length ? 
             'Cargando películas...' 
             : 
             favMovies.map( (movie) => <Card movie={movie} isFav={isFav} key={movie.id} toogleFav={toogleFav}/>)
           }
         </Container> 
        }/>
        <Route path='/movie/:id'element={<Detail />}/>
      </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
