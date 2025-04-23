# App


---
# Movies API

A simple RESTful API for managing movie records using Node.js, Express, and PostgreSQL.  
Deployed live on Render:  
[https://movies-api-4s7l.onrender.com/](https://movies-api-4s7l.onrender.com/)

---

## 📂 Table of Contents

- [Features](#features)
- [Endpoints](#endpoints)
- [How It Works](#how-it-works)
- [Usage Examples](#usage-examples)
- [Running Locally](#running-locally)
- [Deployment](#deployment)
- [Collaboration](#collaboration)

---

## 🚀 Features

- Get all movies
- Get a movie by **ID** (unique filter)
- Add a new movie
- Update a movie by ID

---

## 📌 Endpoints

All endpoints are prefixed with:  
`/api/v1/movies`

| Method | Endpoint                 | Description                              |
|--------|-------------------------|------------------------------------------|
| GET    | `/api/v1/movies`        | Get all movies                           |
| GET    | `/api/v1/movies/:id`    | Get a movie by ID                        |
| POST   | `/api/v1/movies`        | Add a new movie                          |
| PUT    | `/api/v1/movies/:id`    | Update a movie by ID                     |

---

## ⚙️ How It Works

- **GET /api/v1/movies**  
  Returns a list of all movies.

- **GET /api/v1/movies/:id**  
  Returns the movie with the specified `id` (integer).  
  Example: `/api/v1/movies/5` returns the movie with `id` = 5.

- **POST /api/v1/movies**  
  Adds a new movie.  
  **Body:**
  ```json
  {
    "id": 10,
    "title": "Barbie"
  }
  ```

- **PUT /api/v1/movies/:id**  
  Updates a movie’s title by its `id`.  
  **Body:**
  ```json
  {
    "title": "Barbie: Dreamhouse"
  }
  ```

---

## 📒 Usage Examples

### Get All Movies
```
GET https://movies-api-4s7l.onrender.com/api/v1/movies
```

### Get Movie by ID
```
GET https://movies-api-4s7l.onrender.com/api/v1/movies/2
```

### Add a Movie
```
POST https://movies-api-4s7l.onrender.com/api/v1/movies
Body (JSON):
{
  "id": 11,
  "title": "Wonka"
}
```

### Update a Movie
```
PUT https://movies-api-4s7l.onrender.com/api/v1/movies/11
Body (JSON):
{
  "title": "Wonka: Golden Ticket Edition"
}
```

---

## 🛠️ Running Locally

1. Clone the repo and install dependencies:
    ```
    git clone <your-github-repo-url>
    cd <project-folder>
    npm install
    ```
2. Set up your `.env` file or environment variables (see Render deployment).

3. Start the server:
    ```
    npm start
    ```
    or
    ```
    node server.js
    ```

---

## 🌐 Deployment

- **Live API:** [https://movies-api-4s7l.onrender.com/](https://movies-api-4s7l.onrender.com/)
- Deployed on [Render](https://render.com/)

---

## 🤝 Collaboration

- GitHub repo shared with instructor: **jeffreyjseamanppu**
- API presented in class using Postman (GET, POST, PUT endpoints demonstrated live)

---

**Questions or need help?**  
Message me or open an issue!

## 🧑‍💻 Author
Mariah Martin — [@mlmartin44](https://github.com/mlmartin44)
Email: mlmarti@pointpark.edu

---



