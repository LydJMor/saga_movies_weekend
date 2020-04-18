const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(express.static('build'));

/** ---------- REQUIRE ROUTES ---------- **/
const genresRouter = require('./routes/genres.router');
const moviesRouter = require('./routes/movies.router');

/** ---------- ROUTES ---------- **/
app.use(genresRouter);
app.use(moviesRouter);

/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('Listening on port: ', port);
});