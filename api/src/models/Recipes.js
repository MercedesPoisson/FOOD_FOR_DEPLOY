const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipes', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      autoincrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
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
    healthScore:{
      type: DataTypes.INTEGER,
      allowNull: false,
     },
    stepByStep: {
      type: DataTypes.ARRAY(DataTypes.JSON),
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
