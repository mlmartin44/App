const Pool = require("pg").Pool;

const pool = new Pool({
    //user: "postgres",
    user: mlmartin,
    //host: "127.0.0.1",
    host: "dpg-d007dpk9c44c73fan8m0-a",
    //database: "Movies",
    database: movies_2wmm,
    //password: "your_new_password",
    password: H1cH8Y268V3j6KESHUdnRXLcUhD1wUy4,
    port: 5433
});

module.exports = pool;
