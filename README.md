
### APIS y mapeo de datos

En esta clase vamos a consumir datos de una API y guardarlos en un estado para poder mapear esos datos y mostrarlos al usuario.

#### La API

Estamos trabajando con [TMDB](https://developer.themoviedb.org/docs) para recuperar data de películas. Tenés que hacerte una cuenta para consultar tu api key y lograr hacer consultas. 


#### Consumir una API con un efecto

Usamos un efecto para disparar la petición una vez que carga la página. Guardamos el resultado de la petición en nuestro estado

```jsx

const [movies, setMovies] = useState([])

useEffect(()=>{
    fetch(ENDPOINT)
        .then(res => res.json())
        .then(data => setMovies(data))
        .catch(error => console.error(error))
}, [])

```


#### Crear listas mapeando datos

Cuando  necesitamos renderear muchas veces el mismo componente, o iterar cualquier array mostrando algo en pantalla, usamos el método map. Es importante añadir la propiedad *key*, que React usa para mantener el orden de los elementos.

```jsx
return(
    {movies.map( (movie) => <MovieCard movie={movie} key={movie.id} />)}
)
```
