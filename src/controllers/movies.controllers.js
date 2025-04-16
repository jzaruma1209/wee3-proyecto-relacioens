const catchError = require("../utils/catchError");
const movies = require("../models/Movies");
const actors = require("../models/actors");
const genres = require("../models/genres");
const directors = require("../models/Directors");

const getAll = catchError(async (req, res) => {
  const results = await movies.findAll({ include: [genres, actors, directors] });
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
  const { id } = req.params
  const movie = await movies.findByPk(id)
  /*
    //2) setear los actores a  las peliculas localizadas, se usa el nombre del modelo al cual vemos a setear en este caso es el del actor 
    await movies.setActors(req.body)
  
    //3) obtener los cursos seteado 
    const actors = await movies.getActors()
  */
  // return res.json(actors)
  return res.json(id)
})

module.exports = {
  getAll,
  create,
  getOne,
  remove,
  update,
  setMovies
};
