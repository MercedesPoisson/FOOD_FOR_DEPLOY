const { Recipes, Diets } = require("../db")
require("dotenv").config();
const axios = require("axios");
const APIKEY = process.env.APIKEY;
const API_KEY = process.env.API_KEY;


const getApiRecipes = async () => {
  const apiUrl = await axios.get(`https://run.mocky.io/v3/84b3f19c-7642-4552-b69c-c53742badee5`);
  const apiInfo = await apiUrl.data.map(elem => {
    return {
            id: elem.id,
            name: elem.title,
            image: elem.image,
            summary: elem.summary,
            diets: elem.diets.map(elem =>elem),
            healthScore: elem.healthScore,
            stepByStep: getRecipeSteps(elem),
            createdInDb: false,
    };
  });
  return apiInfo;
};

const getBdRecipes = async () => {
  return await Recipes.findAll({
    includes:{
      model: Diets,
      attributes: [ "name" ],
      through: {
        atributes: [],
      }
    }
  });
};

const getAllRecipes = async () => {
    
  const dataBaseRecipes = await Recipes.findAll();
    const apiRecipesRaw = (await axios.get(`https://run.mocky.io/v3/84b3f19c-7642-4552-b69c-c53742badee5`)).data.results;
  
    let apiRecipes = [];
    if (Array.isArray(apiRecipesRaw)) {
      apiRecipes = cleanArray(apiRecipesRaw);
    }
    const allRecipes = [...dataBaseRecipes, ...apiRecipes];
    console.log(allRecipes);

    return allRecipes;
  };
  
  const getRecipeSteps = (recipe) => {
  if (!recipe.stepByStep || recipe.stepByStep.length === 0) {
    return [];
    }
    
  const steps = recipe.stepByStep[0].steps;
    return steps.map((step) => step.step);
    }

    const cleanArray = (arr) => 
    arr.map(elem => {
        return {
            id: elem.id,
            name: elem.title,
            image: elem.image,
            summary: elem.summary,
            diets: elem.diets.map(elem =>elem),
            healthScore: elem.healthScore,
            stepByStep: getRecipeSteps(elem),
            createdInDb: false,
        }
    })

    const createRecipe = async (name, summary, healthScore, stepByStep, diets, image, created) => {
  try {
    // Crear la receta
    const newRecipe = await Recipes.create({ name, summary, healthScore, stepByStep: stepByStep.steps, image, created });

    // Validar que diets sea un array de nombres de dieta
    if (Array.isArray(diets) && diets.length > 0) {
      // Obtener los objetos de dieta correspondientes por nombre
      const dietObjects = await Diets.findAll({ where: { name: diets } });

      // Establecer la relación entre la receta y los tipos de dieta
      await newRecipe.addDiets(dietObjects);
    }

    return newRecipe;
  } catch (error) {
    throw new Error("Error creating recipe");
  }
};

    const getRecipeByID = async (id) => {
      if (id.includes("-")) {
        const recipeDb = await Recipes.findByPk(id, {
          include: { model: Diets, attributes: ["name"] },
        });
    
        if (!recipeDb) {
          throw new Error("Recipe not found");
        }
    
        return {
          id: recipeDb.id,
          name: recipeDb.name,
          steps: recipeDb.stepByStep,
          image: recipeDb.image,
          summary: recipeDb.summary,
          healthScore: recipeDb.healthScore,
          diets: recipeDb.diets.map((diet) => diet.name),
        };
  } else {
    const { data } = await axios(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}&addRecipeInformation=true&number=100`)
    // const { data } = await axios(`https://run.mocky.io/v3/84b3f19c-7642-4552-b69c-c53742badee5/${id}`)
    return {
      id: data.id,
      name: data.title,
      image: data.image,
      summary: data.summary,
      healthScore: data.healthScore,
      steps: data.analyzedInstructions[0]?.steps.map((step) => {
        return {
          number: step.number,
          step: step.step,
        };
      }),
      diets: data.diets,
    };
  }
};
  
const searchRecipesByName = async (name) => {
    if (!name) {
      return getAllRecipes();
    }
    const dataBaseRecipes = await Recipes.findAll({ where: { name: name } });
  
    const apiRecipesRaw = (
      await axios.get(`https://run.mocky.io/v3/84b3f19c-7642-4552-b69c-c53742badee5`)).data.results;
  
    const filteredApi = apiRecipesRaw.filter((recipe) =>
      recipe.title.toLowerCase().includes(name.toLowerCase())
    );
  
    return [
      ...filteredApi.map((recipe) => ({
        id: recipe.id,
        name: recipe.title,
        summary: recipe.summary,
        healthScore: recipe.healthScore,
        stepByStep: recipe.step,
        image: recipe.image,
      })),
      ...dataBaseRecipes.map((recipe) => ({
        id: recipe.id,
        name: recipe.name,
        summary: recipe.summary,
        healthScore: recipe.healthScore,
        stepByStep: recipe.step,
        image: recipe.image,
        
      })),
    ];
    
  };
 
module.exports = {
    createRecipe,
    getRecipeByID,
    getAllRecipes,
    searchRecipesByName, 
    getApiRecipes,
    getBdRecipes,
}



  // const searchRecipesByName = async (name) => {
  //   const dataBaseRecipes = await Recipes.findAll({ where: { name: name } });
  
  //   const apiRecipesRaw = (
  //     await axios.get(
  //       `https://api.spoonacular.com/recipes/complexSearch?apiKey=${APIKEY}&addRecipeInformation=true&number=100`
  //     )
  //   ).data.results;
  
  //   const filteredApi = apiRecipesRaw.filter((recipe) => recipe.title === name);
  
  //   if (filteredApi.length === 0 && dataBaseRecipes.length === 0) {
  //     // Si no se encuentran coincidencias en la API ni en la base de datos, devolver todas las recetas
  //     const allRecipes = await getAllRecipes();
  //     return allRecipes;
  //   }
  
  //   return [...filteredApi, ...dataBaseRecipes];
  // };

  


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
