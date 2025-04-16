const { DataTypes } = require("sequelize");
const sequelize = require("../utils/connection");

const Actors = sequelize.define("actors", {
  //aqui esta mal porque debe de ir en singular actor y ya en la base de datos automanticament ese pasa a plural
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nationality: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  birthday: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

module.exports = Actors;

/*  AQUI HAY ALGUNOS VALORES MAS QUE SE PUEDEN UTILIZAR Y SUELEN SER MUY UTILES PARA MUCHOS MAS PROPOCITOS 
id: {
  type: DataTypes.INTEGER, // Entero
  allowNull: false, // No permite valores nulos
  primaryKey: true, // Define este campo como clave primaria
  autoIncrement: true, // Incremento automático para IDs únicos
},

name: {
  type: DataTypes.STRING, // Cadena de texto
  allowNull: false, // Campo obligatorio
  unique: true, // Debe ser único en la tabla
  defaultValue: 'Sin nombre', // Valor por defecto si no se envía ninguno
},

birthday: {
  type: DataTypes.DATE, // Tipo de dato fecha
  allowNull: true, // Puede ser nulo
  validate: {
    isDate: true, // Validación para asegurarse de que sea una fecha válida
  },
},

email: {
  type: DataTypes.STRING, // Dirección de correo electrónico
  allowNull: false, // No permite valores nulos
  unique: true, // Debe ser único
  validate: {
    isEmail: true, // Validación para asegurarse de que sea un correo válido
  },
},

status: {
  type: DataTypes.BOOLEAN, // Valores booleanos (true/false)
  allowNull: false, // No permite nulos
  defaultValue: true, // Por defecto, el estado será true
},

image: {
  type: DataTypes.STRING, // URL o ruta de la imagen
  allowNull: true, // Puede ser nulo
  validate: {
    isUrl: true, // Validación para asegurarse de que sea una URL válida
  },
},

age: {
  type: DataTypes.INTEGER, // Número entero
  allowNull: true, // Puede ser nulo
  validate: {
    min: 0, // La edad debe ser al menos 0
    max: 150, // Máximo permitido es 150
  },
},

description: {
  type: DataTypes.TEXT, // Texto largo
  allowNull: true, // Campo opcional
  comment: 'Descripción larga del registro', // Comentario descriptivo
},

createdAt: {
  type: DataTypes.DATE, // Fecha de creación
  allowNull: false, // Campo obligatorio
  defaultValue: Sequelize.NOW, // Fecha y hora actual por defecto
},

price: {
  type: DataTypes.FLOAT, // Número decimal
  allowNull: false, // Campo obligatorio
  defaultValue: 0.0, // Valor por defecto
},

*/
