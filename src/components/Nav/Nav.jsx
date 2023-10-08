import style from "./nav.module.css"
import { Link } from "react-router-dom"

const Nav = ({favs}) => {

    return(
        <header className={style.nav}>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>
                            Inicio
                        </Link>
                    </li>
                    <li>
                        <Link to='/movies'>
                            Películas
                        </Link>
                    </li>
                    <li>
                        <Link to='/favs'>
                            Favoritos {favs > 0 && favs}
                        </ Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav