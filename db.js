<<<<<<< HEAD
require("dotenv").config(); // 

const { Pool } = require("pg");

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    ssl: {
        rejectUnauthorized: false //for Render
    }
});

module.exports = pool;







//const Pool = require("pg").Pool;

//const pool = new Pool({
    //user: "postgres",
   // user: "mlmartin",
    //host: "127.0.0.1",
   // host: "dpg-d007dpk9c44c73fan8m0-a",
    //database: "Movies",
   // database: "movies_2wmm",
    //password: "your_new_password",
   // password: "H1cH8Y268V3j6KESHUdnRXLcUhD1wUy4",
    //port: 5433
//});

//module.exports = pool;
=======
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
>>>>>>> a7d284bf9c7c1b6870f958c9fdd0208e19a06ee1
