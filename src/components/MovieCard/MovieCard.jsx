import style from "./movieCard.module.css"
import { Link } from "react-router-dom"

const POSTER_PATH = 'https://www.themoviedb.org/t/p/w220_and_h330_face'


function MovieCard ({movie, isFav, toogleFav}) {

    const {title, poster_path, id} = movie

    const limitText = (title) => {
        if(title.length < 22){
            return title
        }else{
            return title.slice(0, 12)+'...'
        }
    }

    return(
        <div className={style.card}>
            <Link to={`/movie/${id}`} >
                <img src={POSTER_PATH + poster_path} alt="poster de la película" />
                <h2>{limitText(title)}</h2>
            </Link>
            <button className={isFav(id) ? '' : style['fav']}
                onClick={()=>{toogleFav(movie)}}>
                    {isFav(id) ? 'Quitar de favoritos' : 'Añadir a favoritos'}
            </button>
        </div>
    )
}

export default MovieCard