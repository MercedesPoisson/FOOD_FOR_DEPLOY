const { Recipe } = require("../db")
require("dotenv").config();
const axios = require("axios");
const APIKEY = process.env.APIKEY;
const API_KEY = process.env.API_KEY;


const cleanArray = (arr) => 
    arr.map(elem => {
        return {
            id: elem.id,
            name: elem.name,
            summary: elem.summary,
            healthScore: elem.healthScore,
            stepByStep: elem.stepByStep,
            createdInDb: false,
        }
    })

const createRecipe = async (name, summary, healthScore, stepByStep) => {
   return await Recipe.create({name, summary, healthScore, stepByStep})
};

const getRecipeByID = async (id, source) => {
    const recipe = 
      source === "api" 
      ? (await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}&addRecipeInformation=true&number=100`)).data
      : await Recipe.findByPk(id);

    return recipe;
  };

  const getAllRecipes = async () => {
    const dataBaseRecipes = await Recipe.findAll();
    const apiRecipesRaw = (await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${APIKEY}&addRecipeInformation=true&number=100`)).data;

    let apiRecipes = [];
    if(Array.isArray(apiRecipesRaw)){
        apiRecipes = cleanArray(apiRecipesRaw);
    }    
    return [...dataBaseRecipes, ...apiRecipes];
  };

  const searchRecipesByName = async (name) => {
    const dataBaseRecipes = await Recipe.findAll({where:{ name: name }})

    const apiRecipesRaw = (
        await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${APIKEY}&addRecipeInformation=true&number=100`)).data;

    const apiRecipes = cleanArray(apiRecipesRaw);
    const filteredApi = apiRecipes.filter((recipe) => recipe.name === name);
    return [...filteredApi, ...dataBaseRecipes]
  };
  
 
module.exports = {
    createRecipe,
    getRecipeByID,
    getAllRecipes,
    searchRecipesByName
}




// const axios = require("axios");
// require("dotenv").config();
// const { Recipes, Diets } = require("../db");

// const URL = process.env.APIURL;
// const APIKEY = process.env.APIKEY;
// const API_KEY = process.env.API_KEY;

// //Traigo toda la info de la Api
// const getAllApiInfo = async () => {
//     const apiUrl = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`);
//     // console.log(apiUrl.data);
//     const apiInfo = await apiUrl.data.results.map(recipe => {
//         return {
//             id: recipe.id,
//             name: recipe.title,
//             summary: recipe.summary,
//             healthScore: recipe.healthScore,
//             steps: recipe.analyzedInstructions?.map((el) => el.steps.step),
//             diets: recipe.diets?.map((el) => el),
//         };
//     });
//     return apiInfo;
// };

// // Traigo toda la info de la BDD
// const getAllDbInfo = async () => {
//     return await Recipes.findAll({
//         include:{
//             model: Diets,
//             attributes: ["name"],
//             through: {
//                 attributes: [],
//             },
//     }
//   })
// }
// // esta funcion me trae tanto las recetas de la API y las recetas de la BDD
// const getAllRecipes = async () => {
//     const apiInfo = await getAllApiInfo();
//     const dbInfo = await getAllDbInfo();
//     const infoTotal = apiInfo.concat(dbInfo);
//     // console.log(infoTotal);
//     return infoTotal;
// }

// const getRecipeById = async (req, res) => {
//     const { id } = req.params;
//     const recipesTotal = await getAllRecipes();
//     const recipe = recipesTotal.find(recipe => recipe.id === parseInt(id));
//     if (recipe) {
//       res.status(200).json(recipe);
//     } else {
//       res.status(404).send(`Recipe with ID: ${id} not found`);
//     }
//   };

// const getRecipeByName = async (req, res) => {
//     const name = req.query.name;
//     let recipesTotal = await getAllRecipes();
//     if(name){
//         let recipeName = await recipesTotal.filter(el => el.name.toLowerCase().includes(name.toLowerCase()))
//         recipeName.length ?
//         res.status(200).send(recipeName) :
//         res.status(404).send("Recipe not Found")
//     } else {
//         res.status(200).send(recipesTotal)
//     }  
// };

// const postRecipe = async (req, res) => {
//     const { id, name, image, summary, healthScore, stepByStep, diets } = req.body;
//     const recipeCreated = await Recipes.create({
//         id,
//         name,
//         image,
//         summary,
//         healthScore,
//         stepByStep,
//         diets,
//     })

//     const dietsDb = await Diets.findAll({
//         where: {name: diets}
//     })
//     recipeCreated.addDiets(dietsDb)
//     res.send("Recipe Successfully Created ")
// }

// module.exports = {
//     getAllApiInfo,
//     getRecipeById,
//     getRecipeByName,
//     postRecipe,
//     getAllDbInfo,
//     getAllRecipes
// }


// const getAllRecipe = async (req, res) => {
//   try {
//     const apiRecipe = await axios.get(
//       `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`
//     );
//     let allApiRecipe = apiRecipe?.map((info) => info.data.results).flat();
//     allApiRecipe = allApiRecipe.map((recipe) => {
//       return {
//         id: recipe.id,
//         title: recipe.title,
//         summary: recipe.summary,
//         healtScore: recipe.healtScore,
//         steps: recipe.analyzedInstructions?.map((el) => el.steps.step),
//         diets: recipe.diets?.map((el) => el),
//       };
//     });
//     let bdRecipe = await Recipe.findAll({
//       include: [
//         {
//           model: Diet,
//           attributes: ["diets"],
//           through: {
//             attributes: [],
//           },
//         },
//       ],
//     });
