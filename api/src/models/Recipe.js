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
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
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
       },
       healthScore:{
        type: DataTypes.FLOAT,
       },
       stepByStep: {
        type: DataTypes.JSON,
       },
       created: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    },
  },{timestamps:false});
};