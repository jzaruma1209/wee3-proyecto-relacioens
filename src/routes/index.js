const express = require("express");
const routerGenres = require("./genres.router");
const routerActors = require("./actors.router");
const routerDirectors = require("./directors.router");
const routerMovies = require("./movies.routers");
const router = express.Router();

// colocar las rutas aquí
//router.use('/users ', userRouter)
//router.use('/cars ', carRouter)
router.use("/genrese", routerGenres);
router.use("/actores", routerActors);
router.use("/directores", routerDirectors);
router.use("/moviese", routerMovies);

module.exports = router;
