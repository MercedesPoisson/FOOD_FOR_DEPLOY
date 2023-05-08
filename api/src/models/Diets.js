const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("diets", {
        id: {
            type: DataTypes.UUID, //genera numero random con letras y numeros 
            defaultValue:DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        }
        
    }, {
        timestamps: false,
    });
};

