# App

# 🎬 Movie API

A RESTful API built with **Node.js**, **Express**, and **PostgreSQL** for retrieving and filtering a list of movies.

This project is deployed live using **Render**, and all database credentials are securely handled with environment variables.

---

## 📁 Project Structure

```
App/
├── .env                 # Local environment variables (not pushed to GitHub)
├── db.js                # PostgreSQL connection using pg + dotenv
├── server.js            # Express server with routing
└── src/
    └── movies/
        ├── controller.js  # Controller logic for API endpoints
        ├── routes.js      # Express routes
        └── queries.js     # SQL queries
```

---

## 🌐 Live API URL

> Replace this with your actual Render deployment URL:

```
https://movies-api-4s7l.onrender.com
```

---

## 🚀 Available Endpoints

### 🔹 GET all movies
```
GET /api/v1/movies
```
Returns all movie records.

### 🔹 GET filtered movies by title
```
GET /api/v1/movies/search?title=dark
```
Returns movies matching the partial title (case-insensitive).

---

## ⚙️ Environment Variables

These variables should be stored in a `.env` file locally and defined in Render's Environment tab:

```
DB_USER=mlmartin
DB_HOST=dpg-d007dpk9c44c73fan8m0-a.oregon-postgres.render.com
DB_NAME=movies_2wmm
DB_PASSWORD=**eneter the password here**
DB_PORT=5432
PORT=3000
```

> 🔒 Note: `.env` is included in `.gitignore` and should **never be pushed to GitHub**.

---

## 🧪 How to Test Locally

1. Clone the repo
2. Install dependencies

```bash
npm install
```

3. Add your `.env` file with the correct DB credentials

4. Start the server

```bash
node server.js
```

5. Test routes in Postman or browser:

```
GET http://localhost:3000/api/v1/movies
GET http://localhost:3000/api/v1/movies/search?title=matrix
```
## 🔄 How It Works

Express Server Setup: server.js loads environment variables and sets up routes, middleware, and the port.

Routing: All requests to /api/v1/movies are routed to the files in src/movies/routes.js.

Controller Logic:

getMovies: queries the database for all records in the movieInfo table.

getFilteredMovies: uses query parameters (e.g., ?title=dark) to filter results with a SQL LIKE clause.

SQL Layer: All SQL queries are stored in queries.js and passed to pool.query() from the pg package.

Database Connection: db.js establishes a secure connection to the PostgreSQL database using credentials from .env or Render environment settings.

Deployment: Code is pushed to GitHub, and Render automatically deploys and runs node server.js, exposing the API publicly.
---

## 📦 Deployment Notes

- Deployed on **Render** using GitHub integration
- Uses `process.env.PORT` to support dynamic port assignment
- PostgreSQL hosted on Render with SSL enabled

---
## 🌐 Live API URL

https://movies-api-4s7l.onrender.com

yaml
Copy
Edit

Example filtered request:
https://movies-api-4s7l.onrender.com/api/v1/movies/search?title=dark

yaml
Copy
Edit

---

## 🚀 Available Endpoints

### 🔹 GET all movies
GET /api/v1/movies

pgsql
Copy
Edit
Returns all movie records in the database.

### 🔹 GET filtered movies by title
GET /api/v1/movies/search?title=dark

pgsql
Copy
Edit
Returns movies where the title contains the query string. Search is case-insensitive and supports partial matches.

---

## 🔄 How It Works

- **Express Server**: `server.js` sets up middleware, CORS, and mounts `/api/v1/movies` route.
- **Routing**: `routes.js` connects endpoint logic to controller functions.
- **Controller Logic**:
  - `getMovies` → returns all movies from the `movieInfo` table.
  - `getFilteredMovies` → filters movies by partial title match using `LIKE`.
- **Queries Layer**: All SQL is organized in `queries.js` for clean separation.
- **Database Connection**: `db.js` securely connects to PostgreSQL using `pg` and environment variables.
- **Deployment**: Code is pushed to GitHub, auto-deployed by Render, and publicly exposed.


## 🧑‍💻 Author
Mariah Martin — [@mlmartin44](https://github.com/mlmartin44)

---



