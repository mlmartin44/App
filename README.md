🎬 Movies API – Backend
A RESTful backend API for managing movie records using Node.js, Express, and PostgreSQL.
Built to demonstrate modern backend practices, easy deployment, and database integration.

1. 📌 Project Title & Overview
Project Name: Movies API – Backend

Overview:
This backend provides a simple REST API for creating, retrieving, and updating movie records.
Technologies: Node.js, Express, PostgreSQL, and the pg library.
Goals:

Enable CRUD operations on a movieInfo table.

Support classroom demonstration and easy deployment to Render.

2. ⚡ Installation & Setup
Prerequisites
Node.js

npm

PostgreSQL

Steps
bash
Copy
Edit
git clone https://github.com/yourusername/backend-project.git
cd backend-project
npm install
Create a .env file or configure your environment variables for database connection (see Database Setup).

Start the API server:

bash
Copy
Edit
npm start
# or
node server.js
3. 🔗 API Documentation
Base URL
bash
Copy
Edit
https://movies-api-4s7l.onrender.com/api/v1/movies
Endpoints
GET /api/v1/movies
Returns a list of all movies.

Sample Response

json
Copy
Edit
[
  { "id": 1, "title": "The Matrix" },
  { "id": 2, "title": "Finding Nemo" }
]
GET /api/v1/movies/:id
Returns the movie with the specified id.

Sample Response

json
Copy
Edit
{ "id": 2, "title": "Finding Nemo" }
POST /api/v1/movies
Adds a new movie.

Sample Request

json
Copy
Edit
{
  "id": 5,
  "title": "Back to the Future"
}
Sample Response

json
Copy
Edit
Movie added successfully
PUT /api/v1/movies/:id
Updates a movie’s title by its id.

Sample Request

json
Copy
Edit
{
  "title": "Back to the Future II"
}
Sample Response

json
Copy
Edit
Movie updated successfully
4. 🛢️ Database Setup
Install PostgreSQL (download link)

Create a Database & Table

sql
Copy
Edit
CREATE TABLE "movieInfo" (
  id INTEGER PRIMARY KEY,
  title VARCHAR(50)
);
Configure Database Connection

Set your connection string as an environment variable (for Render, set in dashboard):

ini
Copy
Edit
DATABASE_URL=your_postgres_connection_string
Or in .env:

bash
Copy
Edit
DATABASE_URL=postgres://username:password@host:port/dbname
5. 🔐 Authentication & Security
No authentication is implemented in this version.

For production: add authentication such as JWT, OAuth, or API keys.

Example for future:

Add express-jwt or passport for authentication middleware.

6. 🚀 Deployment Guide
Deploying to Render

Push your code to GitHub:

bash
Copy
Edit
git add .
git commit -m "Initial backend API"
git push origin main
Create a new Web Service on Render

Connect your GitHub repo and choose your branch.

Set your environment variable for PostgreSQL (DATABASE_URL).

Deploy and wait for the build to finish.

Other platforms:

Heroku, AWS, DigitalOcean all follow similar steps: push code, set env vars, deploy.

7. 📜 License & Contribution Guidelines
License
This project is licensed under the MIT License.

Contribution Guidelines
Fork this repository.

Create a new branch.

Make your changes and commit them.

Open a pull request with a clear description.

🔹 Submission Requirements
/frontend and /backend folders, each with a README.md

Repo pushed to GitHub

Repo link submitted on the class platform





---

**Questions or need help?**  
Message me or open an issue!

## 🧑‍💻 Author
Mariah Martin — [@mlmartin44](https://github.com/mlmartin44)
Email: mlmarti@pointpark.edu

---



