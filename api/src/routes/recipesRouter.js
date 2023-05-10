const { Router } = require("express");
const recipesRouter = Router();
const { getRecipeById, getRecipeByName, postRecipe, getAllRecipes } = require("../controllers/recipesController");


recipesRouter.get("/", getAllRecipes); // Este deberia traer todas las recetas
recipesRouter.get("/:id", getRecipeById); // trae todas las recetas por id tanto de la API como de la BDD
recipesRouter.get("/name", getRecipeByName); // trae todas las recetas por titulo de la DB y la API
recipesRouter.post("/recipes", postRecipe) // crea una nueva receta en la BDD


module.exports = recipesRouter;