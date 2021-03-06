const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/genres', (req, res) => {
    // return all categories
    const queryText = `SELECT * FROM "genres" ORDER BY "name"`;
    pool.query(queryText)
        .then( (result) => {
            res.send(result.rows);
        })
        .catch( (error) => {
            console.log(`Error on query ${error}`);
            res.sendStatus(500);
        });
});

module.exports = router;