## Bienvenido/a al curso de React !

 
⚛️🖥️👩🏽‍💻👨🏼‍💻🖥️⚛️

-------------
### Conocimientos previos

- HTML y CSS
- Javascript
- Git (opcional)
#### Instalaciones

-  VSCode
- Node


------
### Qué es React ?

React (también llamada ReactJS) es la librería Javascript de UI más usada actualmente en el entorno del desarrollo web. Fue creada por Meta en 2012 y nos ayuda a crear sitios webs reactivos, en los que podemos ver cambios en tiempo real sin recargar toda la página. Esto crea una experencia más cercana a una aplicación nativa. También es una **arquitectura**, es decir: *una manera de estructurar las partes y el funcionamiento un software* 


-----
### Componentes

React se basa en el uso de componentes para la creación de una interfaz de usuario. Los componentes son **funciones que devuelven HTML**. Como cualquier función, pueden tomar parámetros. Llamamos a estas parámetros **propiedades** o **props**. 
	El objetivo de usar componentes es la reutilización, por ejemplo:


-  -----


![[Gear-Twitter-Side-navigation-Expanded-Home-gb.webp]]

-----

### Iniciando un proyecto de React

Si bien se puede incluir React en una sola parte de un sitio web, lo más normal es crear toda nuestra aplicación desde el principio. Para eso usamos alguna herramienta que nos genere la plantilla inicial y nos instale las dependencias necesarias. 

-----

Hasta hace un año, la norma era usar *create-react-app*, una herramienta de línea de comando (CLI). Recientemente esta herramienta fue deprecada, o sea, deja de recibir mantenimiento y actualizaciones. La forma recomendada de crear un proyecto de React hoy en día es Vite


```bash
npm create vite@latest
```

-----------
### Transpiling, bundling y JSX

Cuando iniciamos nuestro proyecto, Vite nos proporciona una plantilla para iniciar el desarrollo. Lo primero que notamos es que la extensión de los archivos no .js, sino .jsx.

**JSX** es una extensión de Javascript que permite incluir HTML. En React se usa para definir la estructura de los componentes. 

-----
### Reglas de JSX

1. Devolver un solo elemento
2. Cerrar todas las etiquetas
3. Usar camelCase para atributos
4. Interpolar Javascript con {<expresión>} 
