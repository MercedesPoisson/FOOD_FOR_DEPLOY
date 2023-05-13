const axios = require("axios");
require("dotenv").config();
const { APIKEY } = process.env;
const { Diets } = require("../db");


//busco todas las recetas de la API, extraigo la info de las dietas y las almaceno en un array en la BDD. Devuelvo Array
const getAllDiets = async (req, res) => {
    try {
        const dietsApi = await axios.get(`https://run.mocky.io/v3/84b3f19c-7642-4552-b69c-c53742badee5`)
        const dietArray = dietsApi.data.results?.map((recipe) => recipe.diets);
        const dietsEach = dietArray.flat();
        const diets = [...new Set(dietsEach)];
        console.log(diets);

        diets.forEach((diet) => {
            Diets.findOrCreate({
                where: {
                    name: diet,
                }
            })
        })
        return res.status(200).json(diets);
    } catch (error) {
        return res.status(500).json({error: error.message});        
    }; 
}
module.exports = {
    getAllDiets,
}

 