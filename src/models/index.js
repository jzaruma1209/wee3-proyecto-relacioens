const Movies = require("./Movies");
const Actors = require("./actors");
const Directors = require("./Directors");
const Genres = require("./genres");

/*
Películas ↔ Actores (Muchos a Muchos):
Una película puede tener varios actores.
Un actor puede participar en muchas películas.
*/
Movies.belongsToMany(Actors, { through: "moviesActors" });
Actors.belongsToMany(Movies, { through: "moviesActors" });
/*Películas ↔ Directores (Muchos a Muchos):
Una película puede ser dirigida por varios directores.
Un director puede trabajar en varias películas. */

Movies.belongsToMany(Directors, { through: "moviesDirectors" })
Directors.belongsToMany(Movies, { through: "moviesDirectors" })

/*
Películas ↔ Géneros (Muchos a Muchos):
Una película puede pertenecer a varios géneros.
Un género puede contener muchas películas.
*/

Movies.belongsToMany(Genres, { through: "moviesGenres" })
Genres.belongsToMany(Movies, { through: "moviesGenres" })