const pool = require("../..db");
const queries = require('./queries');

//Get all data
const getMovies = (req, res) => {
    pool.query(queries.getMovies,(error, results)=> {
        if(error) throw error;
        res.status(200).json(results.rows);
    });
};

//Get Data by Param
//Add new Data by Param
//Modify data by Param

module.exports = {
    getMovies,
};