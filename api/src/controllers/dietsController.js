const axios = require("axios");
require("dotenv").config();
const { APIKEY } = process.env;
const { Diets } = require("../models/Diets");


//busco todas las recetas de la API, extraigo la info de las dietas y las almaceno en un array en la BDD. Devuelvo Array
const getAllDiets = async () => {
    try {
        const dietsApi = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${APIKEY}&addRecipeInformation=true&number=100`)
        const dietArray = dietsApi.data.results?.map((recipe) => recipe.diets);
        const dietsEach = dietArray.flat();
        const diets = [...new Set(dietsEach)];

        diets.forEach((diet) => {
            Diets.findOrCreate({
                where: {
                    name: diet,
                }
            })
        })
        return diets;
    } catch (error) {
        return error;        
    }; 
}
module.exports = {
    getAllDiets,
}

 // const diets = dietsApi.data.map(el => el.diet) // este primer map me devuelve muchos arreglos
    // const dietEach = diets.map(el => { // por eso hago un segundo map ingresando a cada uno de esos arreglos
    //     for(let i = 0; i < el.length; i++) return el[i] })   // y le pido que me devuelva cada elemento de esos arreglos en i
    // dietEach.forEach(el => {
    //     Diets.findOrCreate({  //veo si esta 
    //         where: {name: el }
    //     })
    // })
    // const allDiets = await diet.findAll(); //me guarda todas las dietas
    // res.send(allDiets);
