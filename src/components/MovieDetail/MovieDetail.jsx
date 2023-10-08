import { useEffect, useState } from "react"
import style from "./movieDetail.module.css"
import { useParams } from "react-router-dom"




const MovieDetail = () => {
    
    const {id}= useParams()
    
    const ENDPOINT = `https://api.themoviedb.org/3/movie/${id}?api_key=89be792ea6306278c870e8ce473ab886&language=es`

    const [movie, setMovie] = useState(null)

    useEffect(()=>{
        fetch(ENDPOINT)
            .then(res => res.json())
            .then(data => setMovie(data))
            .catch(error => console.error(error))
    }, [])

    return(
        <div className={style.detail}>
            <img src={movie && `https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`} alt="" />
            <div className={style.detailText}>
                <h1>
                    {movie && movie.title}
                </h1>
                <p>
                    {movie && movie.overview}
                </p>
            </div>
        </div>
    )
}

export default MovieDetail