const axios = require("axios");
require("dotenv").config();
const { APIKEY } = process.env;
const { Diets } = require("../models/Diets")


// /*📍 GET | /diets
// Obtiene un arreglo con todos los tipos de dietas existentes.
// En una primera instancia, cuando no exista ninguna dieta, deberás precargar la base de datos con las dietas de la documentación.
// Estas deben ser obtenidas de la API (se evaluará que no haya hardcodeo). 
// Luego de obtenerlas de la API, deben ser guardadas en la base de datos para su posterior consumo desde allí. */


const getAllDiets = async (req, res) => {
    try {
        let dietTypes = await Diets.findAll();

        if(dietTypes.length === 0) {
            const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${APIKEY}&addRecipeInformation=false&number=1&offset=0&sort=random&diet=ketogenic&type=main+course`)
            const dietsData = response.data;

            for(let diet of dietsData){
                await Diets.create({
                    name: diet.name,
                    description: diet.description
                });
            }
            dietTypes = await Diets.findAll();
        }
        res.status(200).json(dietTypes);
    } catch (error) {
        res.status(400).send(error);
        
    }
};

module.exports = getAllDiets;