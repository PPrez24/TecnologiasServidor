# NewsAPI Express API

API desarrollada en Node.js + Express para listar noticias desde NewsAPI.

## Tecnologías
- Node.js
- Express
- Axios
- Dotenv
- Nodemon

## Instalación
1. Clonar el repositorio.
2. Ejecutar `npm install` para instalar dependencias.
3. Crear un archivo `.env` con `NEWS_API_KEY=tu_api_key_aqui`.
4. Ejecutar `npm run dev` para iniciar el servidor.

## Endpoints
- `GET /api/news/sources` - Lista de fuentes de noticias.
- `GET /api/news/top-headlines` - Top headlines (soporta `country`, `category`, `sources`, `q`).
- `GET /api/news/everything` - Noticias con búsqueda por `q` (query).

## Observaciones
- Asegurarse de tener una API Key válida de [NewsAPI](https://newsapi.org/).
- Invitar a `fsevilla` al repositorio en GitHub.
- Crear carpeta `tarea1` en la rama principal y colocar los archivos dentro.