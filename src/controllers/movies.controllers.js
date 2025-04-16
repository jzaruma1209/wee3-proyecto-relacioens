const catchError = require("../utils/catchError");
const movies = require("../models/Movies");
const actors = require("../models/actors");
const genres = require("../models/genres");
const directors = require("../models/Directors");

const getAll = catchError(async (req, res) => {
  const results = await movies.findAll({
    include: [genres, actors, directors],
  });
  return res.json(results);
});

const create = catchError(async (req, res) => {
  const result = await movies.create(req.body);
  return res.status(201).json(result);
});

const getOne = catchError(async (req, res) => {
  const { id } = req.params;
  const result = await movies.findByPk(id);
  if (!result) return res.sendStatus(404);
  return res.json(result);
});

const remove = catchError(async (req, res) => {
  const { id } = req.params;
  const result = await movies.destroy({ where: { id } });
  if (!result) return res.sendStatus(404);
  return res.sendStatus(204);
});

const update = catchError(async (req, res) => {
  const { id } = req.params;
  const result = await movies.update(req.body, {
    where: { id },
    returning: true,
  });
  if (result[0] === 0) return res.sendStatus(404);
  return res.json(result[1][0]);
});

const setMovies = catchError(async (req, res) => {
  //1) localizar la pelicula
  const { id } = req.params;
  const movies_01 = await movies.findByPk(id);
  //2 setear los actores a las peliculas localizadas// se debe de hacer copiando el nombre del model para que este funcionen con camelcase y en plural
  await movies_01.setActors(req.body); //este seteo es asincrono por eso debe ir el await
  //3 obtener los cursos seteados
  const actores = await movies_01.getActors();
  return res.json(actores);
});

const setGenres = catchError(async (req, res) => {
  const { id } = req.params;
  const genres_01 = await movies.findByPk(id);
  await genres_01.setGenres(req.body);
  const generos = await genres_01.getGenres();
  return res.json(generos);
});

const setDirectors = catchError(async (req, res) => {
  const { id } = req.params;
  const directors_01 = await movies.findByPk(id);
  await directors_01.setDirectors(req.body);
  const directores = await directors_01.getDirectors();
  return res.json(directores);
});

module.exports = {
  getAll,
  create,
  getOne,
  remove,
  update,
  setMovies,
  setGenres,
  setDirectors,
};
