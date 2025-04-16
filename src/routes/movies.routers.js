const {
  getAll,
  create,
  getOne,
  remove,
  update,
  setMovies,
  setGenres,
  setDirectors,
} = require("../controllers/movies.controllers");
const express = require("express");

const routerMovies = express.Router();

routerMovies.route("/").get(getAll).post(create);

routerMovies.route("/:id/actors").post(setMovies);
routerMovies.route("/:id/genres").post(setGenres);
routerMovies.route("/:id/directors").post(setDirectors);

routerMovies.route("/:id").get(getOne).delete(remove).put(update);

module.exports = routerMovies;
