
### Componentes

Los componentes son las unidades a partir de las cuáles creamos nuestra interfaz. Son funciones de Javascript que devuelven HTML gracias a usar JSX. Al ser funciones, pueden tomar parámetros, llamados *propiedades* o más normalmente *props*.

------------

### En esta clase vamos a ver cómo

1. Darle estilos a nuestros componentes 
2. Consumir props
3. Renderear condicionalmente según props
4. Hacer que nuestro componente *recuerde* a través del estado.

------

#### CSS Modules

Vite viene preparado para usar CSSModules, una tecnología que nos permite definir el *scope* de los estilos y asociarlos a un solo componente. El bundler detecta como módulos todos los archivos de CSS que siguen esta convención:
```
<nombreDelModulo>.module.css
```
Los consumimos en el componente como un objeto, donde las clases de CSS son sus propiedades

```css
/* nav.module.css */
.nav{
    display: flex;
    /*...*/
}

```


```javascript
import style from 'nav.module.css'

const Nav = () => {
    return (
        <nav className={style.nav}>
            // ...
        </nav>
    )
}
```

#### Props

Los componentes son funciones, y los parámetros que puedan recibir se definen propiedades. Se transmite un objeto props, que puede desestructurarse al momento de declararlo. <br>
Se transmiten como atributos cuando se usa el componente

```jsx
<ButtonComponent label='Guardar cambios'/>
```

Y se consumen con el objeto props, o desestructurandolo al declarar. 
```jsx
///objeto props
const Button = (props) => <button>{ props.label }</button>
///desestructurando
const Button = ({label}) => <button>{label}</button>

```

#### Conditional Rendering

Podemos controlar que se renderea dentro de un componente, o que componente renderear, en baso a una condición. 
```jsx

const StatusLabel = ({status}) => {
    return (
        <label> 
            Su usariio se encuentra {status === 'active' ? 'listo para operar' : 'desactivado.' }.
        </label>
    )
}

<StatusLabel status={'active'}/> //==> "Su usario se encuentra listo para operar"
<StatusLabel status={false}/> //==> "Su usario se encuentra listo desactivad."

```