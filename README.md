
### Hooks

Los hooks son funciones especiales de React que nos permiten manipular el *ciclo de vida de un componente* y sincronizar con sistemas externos. En esta clase usaremos los hooks useState y useEffect.

#### useState

Lo usamos para crear un estado, o sea: una variable que se mantiene a tráves de los rerenders de un componente y nos ayuda a escribir componentes con los que es el usuario puede interectuar en tiempo real y siempre estarán sincronizados con la informacón real.
Leer [la documentacion](https://es.react.dev/learn/state-a-components-memory)

Para crear un estado invocamos el hook la parte superior de un componente. Toma como parámetro el valor inicial que tendrá el estado. Al invocarlo, devuelve una array que contiene el estado y la función que nos permite modificarlo.

```js
const [movies, setMovies] = useState([])

///console.log(movies) ===> Array(0)
///setMovies([1, 2])
///console.log(movies) ===> [1, 2]
```


### useEffect

Este hook nos permite definir un *efecto secundario* que nos permita sincronizarnos con un sistema externo. En esta clase simulamos la sincronización con una API externa. Leer [la documentación](https://es.react.dev/learn/synchronizing-with-effects)

Se invoca pasando dos parámetros, uno es el callback a ejecutar, y el otro es el **array de dependencias**, donde indicamos valores que queremos que, al cambiar, disparen el efecto. Si queremos que solo se ejecute una vez. cuando monta el componente, lo dejamos vacío. Siempre debe estar presente.


```jsx
const App = () => {
  const [message, setMessage] = useState('Hi there, how are you?');

  useEffect(() => {
    console.log('trigger use effect hook');

    setTimeout(() => {
      setMessage("I'm fine, thanks for asking.");
    }, 1000)
  })

  return <h1>{message}</h1>
};


```


### Otros hooks 
 - useRef
 - useContext
 - useMemo
 - useCallback
