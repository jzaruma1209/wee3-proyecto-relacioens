const { DataTypes } = require("sequelize");
const sequelize = require("../utils/connection");
//se debe de poner todo en singular
const Movies = sequelize.define("movies", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  synpsis: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  releaseYear: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Movies;
