const axios = require("axios");
require("dotenv").config();
const { Recipes, Diets } = require("../db");

const URL = process.env.APIURL;
const APIKEY = process.env.APIKEY;

//Traigo toda la info de la Api
const getAllApiInfo = async () => {
    const apiUrl = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${APIKEY}&addRecipeInformation=true&number=100`);
    const apiInfo = await apiUrl.data.map(recipe => {
        return {
            id: recipe.id,
            name: recipe.title,
            summary: recipe.summary,
            healthScore: recipe.healthScore,
            steps: recipe.analyzedInstructions?.map((el) => el.steps.step),
            diets: recipe.diets?.map((el) => el),
        };
    });
    return apiInfo;
};

// Traigo toda la info de la BDD
const getAllDbInfo = async () => {
    return await Recipes.findAll({
        include:{
            model: Diets,
            attributes: ["name"],
            through: {
                attributes: [],
            },
    }
  })
}
// esta funcion me trae tanto las recetas de la API como las recetas de la BDD
const getAllRecipes = async () => {
    const apiInfo = await getAllApiinfo();
    const dbInfo = await getAllDbInfo();
    const infoTotal = apiInfo.concat(dbInfo);
    return infoTotal;
}

// Busco una receta por ID
const getRecipeById = async (req, res) => {
    try {
        const { id } = req.params;
// busco la receta en la BBD
        const localRecipe = await Recipe.findOne({where: {id}});
        if(localRecipe) {
            return res.status(200).json(localRecipe);
        }
// si no la encontro en la BDD sigo a la API
        const { data } = await axios(`${URL}${APIKEY}${id}`);

        if(!data.name) throw new Error(`Missing Data for Recipe with ID number: ${id}`)
        const recipe = {
            id: data.id,
            name: data.name,
            image: data.image,
            summary: data.summary,
            healthScore: data.healthScore,
            stepByStep: data.stepByStep
        };
// Guardo la receta en la BDD
        await Recipe.create(recipe);

        return res.status(200).json(recipe)
    } catch (error) {
        return error.message.includes("ID")
        ? res.status(404).send(error.message)
        : res.status(500).send(error.response.data.error) 
    }
 };  

const getRecipeByName = async (req, res) => {
    const title = req.query.title;
    let recipesTotal = await getAllRecipes();
    if(title){
        let recipeTitle = await recipesTotal.filter(el => el.title.toLowerCase().includes(title.toLowerCase()))
        recipeTitle.length ?
        res.status(200).send(recipeTitle) :
        res.status(404).send("Title not Found")
    } else {
        res.status(200).send(recipesTotal)
    }  
};

const postRecipe = async (req, res) => {
    const { id, name, image, summary, healthScore, stepByStep, diets } = req.body;
    const recipeCreated = await Recipes.create({
        id,
        name,
        image,
        summary,
        healthScore,
        stepByStep,
        diets,
    })

    const dietsDb = await Diets.findAll({
        where: {name: diets}
    })
    recipeCreated.addDiets(dietsDb)
    res.send("Recipe Successfully Created ")
}

module.exports = {
    getAllApiInfo,
    getRecipeById,
    getRecipeByName,
    postRecipe,
    getAllDbInfo,
    getAllRecipes
}


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

