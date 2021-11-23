# Inventario de vacunación de empleados

- [Inventario de vacunación de empleados](#inventario-de-vacunación-de-empleados)
  - [Roles en la aplicación](#roles-en-la-aplicación)
  - [Frontend](#frontend)
    - [Arquitectura](#arquitectura)
    - [Diseño](#diseño)
    - [Árbol de archivos](#árbol-de-archivos)

## Roles en la aplicación

* Administrador
* Empleado

## Frontend

* Framework: Angular 13
* Librerías: 

### Arquitectura

Angular es una arquitectura MVC (Modelo Vista Modelo)

### Diseño

Se diseño la aplicación con módulos de funciones de carga diferida, o como se le conoce cómo *Lazy Loading*. Ya que por defecto, los módulos en Angular se cargan todos al momento de iniciar la página provocando esto una carga excesiva en la red de los usuarios haciendo la página más lenta al inicio, este patrón se utiliza para aplicaciones grandes con una gran cantidad de rutas y es ahí donde se visualiza la eficiencia en la navegación de la página.

Se utilizaron servicios para la comunicación de la *FakeAPI* creada para este proyecto enlazando los datos recibidos y enviados a través de interfaces que definían la estructura de datos resuelta por el API creado.

### Árbol de archivos

* pages: Páginas en donde contendrán los componentes para cada ruta especificada
* shared: Recursos compartidos para todos los componentes y archivos creados
  * models: Interfaces de las estructuras resueltas por la FakeAPI
  * services: Servicios para conectar la aplicación web con el FakeAPI
  * utils: Recursos de utiliadad para completar el funcionamiento del proyecto