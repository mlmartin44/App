const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",

    //when pushing to the server 
    //host: zom, 
    //password:

    //to test locally
    host: "localhost",
    database: "Movies",
    port: 5432
});

module.exports = pool;
