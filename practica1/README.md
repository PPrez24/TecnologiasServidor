# API de Publicaciones

Este es un API desarrollada con **Node.js**, **Express**, **TypeScript** y **MongoDB** para gestionar usuarios y publicaciones. La aplicación sigue la arquitectura **MVC** y utiliza **JWT** para la autenticación de usuarios.

---

## **Características Principales**

- **Registro de usuarios**: Los usuarios pueden registrarse proporcionando un nombre, email y contraseña.
- **Autenticación de usuarios**: Los usuarios pueden iniciar sesión y obtener un token JWT para acceder a endpoints protegidos.
- **Creación de publicaciones**: Los usuarios autenticados pueden crear publicaciones.
- **Listado de publicaciones**: Los usuarios pueden ver una lista de todas las publicaciones, incluyendo los datos del autor.
- **Protección de endpoints**: Algunos endpoints están protegidos y requieren autenticación mediante JWT.
- **Validación de roles**: Algunos endpoints solo están disponibles para usuarios con el rol de administrador.

---

## **Tecnologías Utilizadas**

- **Node.js**: Entorno de ejecución de JavaScript.
- **Express**: Framework para construir aplicaciones web y APIs.
- **TypeScript**: Lenguaje que añade tipos estáticos a JavaScript.
- **MongoDB**: Base de datos NoSQL para almacenar datos.
- **Mongoose**: Librería para modelar objetos MongoDB.
- **JWT (JSON Web Tokens)**: Para la autenticación de usuarios.
- **Dotenv**: Para gestionar variables de entorno.
- **Postman**: Para probar los endpoints de la API.

---

## **Instalación y ejecución**

- Utiliza el comando "npm install" para instalar todas las dependencias necesarias.
- Ejecuta el comando "npm run dev" para ejecutar el servidor en modo de desarrollo utilizando nodemon.
