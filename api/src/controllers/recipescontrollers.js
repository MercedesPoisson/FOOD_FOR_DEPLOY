const { Recipes, Diets } = require("../db");
require("dotenv").config();
const axios = require("axios");
const APIKEY = process.env.APIKEY;
const API_KEY = process.env.API_KEY;


const getAllRecipes = async () => {
  const dataBaseRecipes = await Recipes.findAll({
    include: {
      model: Diets,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });

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
};

const cleanArray = (arr) =>
  arr.map((elem) => {
    return {
      id: elem.id,
      name: elem.title,
      image: elem.image,
      summary: elem.summary,
      diets: elem.diets.map((dietElem) => dietElem),
      healthScore: elem.healthScore,
      stepByStep: getRecipeSteps(elem),
      createdInDb: false,
    };
  });

const createRecipe = async (name, summary, healthScore, stepByStep, diets, image, created) => {
  try {
    const newRecipe = await Recipes.create({ name, summary, healthScore, stepByStep: stepByStep.steps, image, created });
    if (Array.isArray(diets) && diets.length > 0) { //valido que tipos de dieta sea un []
      const dietObjects = await Diets.findAll({ where: { name: diets } });

      await newRecipe.addDiets(dietObjects);
    }
    console.log("New Recipe:", newRecipe);

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
    const { data } = await axios(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}&addRecipeInformation=true&number=100`);
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
  const apiRecipesRaw = (await axios.get(`https://run.mocky.io/v3/84b3f19c-7642-4552-b69c-c53742badee5`)).data.results;
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

const deleteRecipeById = async (id) => {
  if (!/^[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89ab][a-f0-9]{3}-[a-f0-9]{12}$/i.test(id)) {
    throw new Error("This Recipe Can´Be deleted");
  }
  try {
    const deletedRecipe = await Recipes.destroy({ where: { id } });
    if (deletedRecipe === 0) {
      throw new Error("Recipe Can't Be deleted");
    }
    return deletedRecipe;
  } catch (error) {
    throw new Error(error.message);
  }
};


module.exports = {
  createRecipe,
  getRecipeByID,
  getAllRecipes,
  searchRecipesByName,
  deleteRecipeById
  // getApiRecipes,
  // getBdRecipes,
};








  //       `https://api.spoonacular.com/recipes/complexSearch?apiKey=${APIKEY}&addRecipeInformation=true&number=100`
//          `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`
  
// const getApiRecipes = async () => {
//   const apiUrl = await axios.get(`https://run.mocky.io/v3/84b3f19c-7642-4552-b69c-c53742badee5`);
//   const apiInfo = await apiUrl.data.map((elem) => {
//     return {
//       id: elem.id,
//       name: elem.title,
//       image: elem.image,
//       summary: elem.summary,
//       diets: elem.diets.map((elem) => elem),
//       healthScore: elem.healthScore,
//       stepByStep: getRecipeSteps(elem),
//       createdInDb: false,
//     };
//   });
//   return apiInfo;
// };

// const getBdRecipes = async () => {
//   return await Recipes.findAll({
//     includes: {
//       model: Diets,
//       attributes: ["name"],
//       through: {
//         atributes: [],
//       },
//     },
//   });
// };

// const getAllRecipes = async () => {
//   const dataBaseRecipes = await Recipes.findAll();
//   const apiRecipesRaw = (await axios.get(`https://run.mocky.io/v3/84b3f19c-7642-4552-b69c-c53742badee5`)).data.results;

//   let apiRecipes = [];
//   if (Array.isArray(apiRecipesRaw)) {
//     apiRecipes = cleanArray(apiRecipesRaw);
//   }
//   const allRecipes = [...dataBaseRecipes, ...apiRecipes];
//   console.log(allRecipes);

//   return allRecipes;
// };