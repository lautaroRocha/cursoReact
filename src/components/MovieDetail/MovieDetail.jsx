import style from "./movieDetail.module.css"
import { useParams } from "react-router-dom"
import useDetails from "../../hooks/useDetail"


const MovieDetail = () => {
    
    const {id}= useParams()
    
    const {movie, error} = useDetails(id)

    return(
        <div className={style.detail}>
            {
                !error ?
                <>
                    <img src={movie && `https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`} alt="" />
                    <div className={style.detailText}>
                        <h1>
                            {movie && movie.title}
                        </h1>
                        <p>
                            {movie && movie.overview}
                        </p>
                    </div>
                </> :
                'Hubo en error trayendo la película'
            }
        </div>
    )
}

export default MovieDetail