import { useState, useEffect } from "react";
import { movieLink } from "../utils/endpoints";

const useDetails = (id) => {

    const [movie, setMovie] = useState(null)
    const [error, setError] = useState(null)

    useEffect(()=>{
        fetch(movieLink(id, import.meta.env.VITE_API_KEY))
            .then(res => res.json())
            .then(data => setMovie(data))
            .catch(error => setError(error))
    }, [])
    
    return{
        movie,
        error
    }
}

export default useDetails;