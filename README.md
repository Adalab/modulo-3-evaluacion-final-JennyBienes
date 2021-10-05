## Buscador de personajes de Rick and Morty 

El proyecto ha consistido en desarrollar una aplicación web con un listado de personajes de Rick and Morty en el que el usuario puede filtrar por nombre del personaje y especie. Al hacer la búsqueda pueden suceder 2 eventos, una de ellos es que el personaje exista y a continuación se muestre más información en la tarjeta o por el contrario que el personaje no exista y aparezca un mensaje que debe realizar otra búsqueda.

### Tecnologías utilizadas 🔭

Este proyecto ha sido llevado a cabo utilizando React, JavaScript, HTML, Sass, Node JS. He trabajado con el React Starter Kit dividiendo el JavaScript en varios componentes hijos e importándolos luego cada uno en el componente principal App.js. En el caso de Sass he hecho algo similar, he añadido varios ficheros uno por cada componente. He añadido 7 componentes hijos a los cuales brevemente me referiré a continuación:

1.- El componente CharacterCard es el que se encarga de pintar la información de cada personaje que luego será importada a CharacterList y a través de este componente se devolverá un listado con cada una de las cartas de los personajes, cuya información recibimos de la llamada a la Api.

2.- El componente CharacterDetail es el que se encargará de recoger una información más detallada sobre cada personaje y aparecerá en pantalla cuando el usuario haga click sobre uno de ellos.

3.- El componente CharacterList es el que se encarga de pintar el listado de todos los personajes en el navegador, en este caso cuando se ha hacho la llamada a la API, la misma ha devuelto 20 resultados pero es importante hacer énfasis que cuando se hace la búsqueda filtrando bien sea por nombre de personaje o por especie trae todos los resultados que coincidan con ese parámetro en la API no sólo los 20.

4.- El componente CharacterNotFound es el que se encarga de devolver el mensaje de personaje inexistente.

5.- El componente Filters es el que se encarga de llevar a cabo las funciones de filtrar la búsqueda hecha por el usuario. Lo que se pedía en el ejercicio era hacer un filtrado de personajes por nombre el cual se llevaría a cabo añadiendo un input de forma que al ir escribiendo un nombre queden en la interfaz sólo los personajes cuyo nombre completo contiene esas letras. Además ha sido añadido otro filtro para hacer la búsqueda por especie.

6.- El componente Header es el que se encarga de mostrar el logo y el formulario contentivo de los 2 input, el input tipo text para filtrar por nombre de personaje y el input tipo select para filtrar por especie.

7.- El componente ModalWindows es el que se encarga de mostrar la información detallada de cada personaje cuando el usuario clickea en uno de ellos.

### Bonus 🌱

Como tareas adicionales he agregado el fitro para hacer la búsqueda por especie y he añadido una imagen con un texto para que el mismo se muestre cuando no haya ninǵun resultado que coincida con la búsqueda.

### Traducción de la información 📝

Se pedía en el ejercicio implementar una nueva funcionalidad: al hacer click sobre la tarjeta de un personaje, su informacion debe aparecer a pantalla completa; para esto debemos utilizar rutas y React Router DOM. En la pantalla de detalle debe aparecer la foto, nombre y especie, el planeta de origen, el número de episodios en los que aparece y si está vivo o muerto; ésta información aparece en inglés por lo que la he traducido al español.

### Reto superado 👨‍💻

Trabajar con React para mi ha representado un gran reto que con propiedad puedo decir que lo he superado, me queda aún mucho por aprender pero me siento muy orgullosa de lo que he podido hacer en este proyecto, me he retado como nunca a mi misma, he trabajado muchas horas frente al ordenador pero siento que ha dado sus frutos: este hermoso trabajo!!

### Cómo arrancar el proyecto 📄

Nos clonamos el repositorio y ejecutamos en la terminal npm install para cargar las dependencias que necesitamos para trabajar con el proyecto y hacemos npm start para arrancar el servidor.
