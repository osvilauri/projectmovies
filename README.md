# Projectmovies

Ejercicio Basico generado en Angular version 9.1.4, 
con una API basica en express con conexion a mongodb.
Esta App consume a su vez de la API https://api.themoviedb.org/3/

## Run Development

Run `yarn install`.

Run `yarn start`. 

## Build

Run `yarn build`

## Caracteristicas del ejercicio basico

- Se muestra un layout generico con un menu personalizable. Permite cambiar el nombre del menu
y su visibilidad. Cada link del menu redirige a una nueva seccion, manteniendo el mismo estilo.

* Se muestra un buscador principal comun para todas las secciones, los resultados son mostrados
en cada seccion donde se realizo la busqueda.

* Se muestra el listado de peliculas en cada seccion. Inicialmente se muestra su poster y titulo 
de la pelicula. En caso de no tener poster la pelicula se refleja una imagen generica.

* Detalles de la pelicula. Al dar click sobre la pelicula se muestra un modal con los detalles requeridos 
en el ejercicio. Tambien se muestra un boton para adicionar la pelicula como favorita. Al dar click,
si la pelicula no ha sido adicionada previamente, se muestra una notificacion de operacion satisfactoria,
en caso de haber sido adicionada, se muestra una notificacion de alerta.

Ejercicio realizado por Osvaldo Morgan Hdez. email: <a href="mailto:osvilauri@gmail.com">osvilauri@gmail.com</a>
