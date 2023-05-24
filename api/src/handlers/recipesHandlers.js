const { Recipes, Diets } = require("../db");

const { createRecipe, getRecipeByID, getAllRecipes, searchRecipesByName, deleteRecipeById } = require("../controllers/recipescontrollers")


const getRecipesHandler = async (req, res) => {
  const { name } = req.query;
  try {
    const response = await searchRecipesByName(name);
    res.status(200).json(response);
  } catch (error) {
    res
      .status(400)
      .json({ error: error.message, description: 'No available recipes.' });
  }
};

const getRecipeHandler = async (req, res) => {
  const { id } = req.params;
try {
  const recipe = await getRecipeByID(id);
  res.status(200).json(recipe);
} catch (error) {
    res.status(400).json({error: error.message})
}  
};

const postRecipeHandler = async (req, res) => {
  const { name, summary, healthScore, stepByStep, diets, image, created } = req.body;
  try {
    const newRecipe = await createRecipe(name, summary, healthScore, { steps: stepByStep }, diets, image, created);
    const recipeId = newRecipe.id;

    if (Array.isArray(diets) && diets.length > 0) { //validar que es un[]
      const dietObjects = await Diets.findAll({ where: { name: diets } });
      await newRecipe.addDiets(dietObjects); //establecer la relacion entre receta y tipos de dieta
    }
    res.status(201).json(newRecipe);
  } catch (error) {
    res.status(400).json({ error: error.message });    
  }    
};

const deleteRecipeHandler = async (req, res) => {
  const { id } = req.params;
  try {
    console.log("Before deleting recipe from database");
    const deletedRecipe = await deleteRecipeById(id);
    console.log("After deleting recipe from database");
    res.status(200).json(deletedRecipe);
  } catch (error) {
    console.log("Error while deleting recipe:", error); 
    res.status(400).json({error: error.message});
  }
}

module.exports = {
    getRecipeHandler,
    getRecipesHandler,
    postRecipeHandler,
    deleteRecipeHandler
}