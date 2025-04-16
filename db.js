const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    host: "127.0.0.1", // ← this is the key change!
    database: "Movies",
    password: "your_new_password",
    port: 5433
});

module.exports = pool;
