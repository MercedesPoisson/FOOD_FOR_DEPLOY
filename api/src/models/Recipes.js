const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipes', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      autoincrement: true,
      primaryKey: true,
      allowNull: false,
    },
    image:{
      type: DataTypes.STRING,
      validate: {
        isUrl:true,
      }
     },
    summary:{
      type: DataTypes.TEXT,
      allowNull: false,
     },
    healtScore:{
      type: DataTypes.FLOAT,
      allowNull: false,
     },
    stepByStep: {
      type: DataTypes.JSON,
      allowNull: false,
     },
    createdInDb: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    }
  },  {
    timestamps: false,
});
};
