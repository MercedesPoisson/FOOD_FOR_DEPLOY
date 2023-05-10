




// const axios = require("axios");
// require("dotenv").config();
// const { APIKEY } = process.env;
// const { Diets } = require("../db");


// //busco todas las recetas de la API, extraigo la info de las dietas y las almaceno en un array en la BDD. Devuelvo Array
// const getAllDiets = async (req, res) => {
//     try {
//         const dietsApi = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${APIKEY}&addRecipeInformation=true&number=100`)
//         const dietArray = dietsApi.data.results?.map((recipe) => recipe.diets);
//         const dietsEach = dietArray.flat();
//         const diets = [...new Set(dietsEach)];
//         console.log(diets);

//         diets.forEach((diet) => {
//             Diets.findOrCreate({
//                 where: {
//                     name: diet,
//                 }
//             })
//         })
//         return res.status(200).json(diets);
//     } catch (error) {
//         return res.status(500).json({error: error.message});        
//     }; 
// }
// module.exports = {
//     getAllDiets,
// }

 