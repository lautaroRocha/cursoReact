import './App.css'
import MovieCard from "./components/MovieCard/MovieCard"

const MOVIES = [
  {title:"La comunidad del Anillo",
  poster:"https://th.bing.com/th/id/R.800a59c55f866d8e6e249eb545258936?rik=FIsVV9PICDNmhQ&riu=http%3a%2f%2f3.bp.blogspot.com%2f-0REq_eGpZ-8%2fTbKeVe2wBrI%2fAAAAAAAAA7w%2fe4cmju2h6N4%2fs1600%2fThe_Lord_of_the_Rings_The_Fellowship_of_the_Ring_6426d3da.jpg&ehk=%2fQg9Zmov8u6XObLJI4WNM864C6kiIXojaPrZGZusCzs%3d&risl=&pid=ImgRaw&r=0"
},
{title: "Harry Potter y la Cámara de los secretos",
  poster: "https://th.bing.com/th/id/OIP.pQLi58iyY-Eqxvv1sHewwwAAAA?pid=ImgDet&rs=1"
},
{title:"Harry Potter y el Prisionero de Azkaban",
  poster: "https://infoforumworld.files.wordpress.com/2020/04/r6sqepunmkhlbnx8cizvzxckhp.jpg"
},
{title:"500 días con ella",
  poster:"https://th.bing.com/th/id/OIP.2cxy9LNDiwTfF8z3oSMjAwHaLH?pid=ImgDet&rs=1"
},
]

function App() {

  return (
    <>
    <div style={{
      display: 'flex',
      flexWrap: 'wrap'
    }}>
      <MovieCard movie={MOVIES[1]}/>
      <MovieCard movie={MOVIES[1]}/>
      <MovieCard movie={MOVIES[2]}/>
      <MovieCard movie={MOVIES[3]}/>
    </div>
    </>
  )
}

export default App
