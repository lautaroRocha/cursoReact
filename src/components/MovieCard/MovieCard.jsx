import style from "./movieCard.module.css"
import { useState } from "react"

function MovieCard ({movie}) {
    const {title, poster} = movie
    const [isFav, setIsFav] = useState(false)
    
    return(
        <div className={style.card}>
            <img src={poster} alt="poster de la película" />
            <h2>{title}</h2>
            <button className={isFav ? '' : style['fav']}
            onClick={()=>{setIsFav(!isFav)}}>
                {isFav ? 'Quitar de favoritos' : 'Añadir a favoritos'}
            </button>
        </div>
    )
}

export default MovieCard