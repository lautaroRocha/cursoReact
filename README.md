
### Routing

En esta clase agregamos rutas a nuestra aplicación usando [react-router-dom](https://reactrouter.com/es/main). En la documentación incluyen muchas más maneras de navegar y detalla las particularidades de cada router.


#### Router, Routes, Route

Para crear el router en nuestra aplicación, usamos tres componentes. Podemos mantener un componente fuera de la navegación, o sea, presente en todas las páginas, incluyendolo en el Router pero no en las Routes.

```jsx
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App(){
    return(
        <BrowserRouter>
            <NavigationComponent />
            <Routes>
            {
                //cada Route lleva un path que es la ultima parte de la url ('/' reprensenta el índice de la aplicación) y un element, el componente a mostrar en esa ruta
            }
                <Route path="/" element={<SomeComponent />}>
                <Route path="/other" element={<OtherComponent />}>
            </Routes>
        </BrowserRouter>
    )
}
```

#### Link

Para navegar, podemos usar el componente *Link*

```jsx
import { Link } from 'react-router-dom'

const NavigationComponent = () => {
    return(
        <nav>
            <Link to="/">Inicio</Link>
            <Link to="/movies">Películas</Link>
            <Link to="/fav">Favoritos</Link>
        </nav>
    )
}


```


