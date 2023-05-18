const { createRecipe, getRecipeByID, getAllRecipes, searchRecipesByName } = require("../controllers/recipescontrollers")


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
  const { name, summary, healthScore, stepByStep, diets, image } = req.body;
  try {
    const newRecipe = await createRecipe(name, summary, healthScore, stepByStep, diets, image);
    res.status(201).json(newRecipe);
  } catch (error) {
    res.status(400).json({error: error.message});    
  }    
};

module.exports = {
    getRecipeHandler,
    getRecipesHandler,
    postRecipeHandler
}