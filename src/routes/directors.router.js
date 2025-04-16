const {
  getAll,
  create,
  getOne,
  remove,
  update,
} = require("../controllers/directors.controllers");
const express = require("express");

const routerDirectors = express.Router();

routerDirectors.route("/").get(getAll).post(create);

routerDirectors.route("/:id").get(getOne).delete(remove).put(update);

module.exports = routerDirectors;
