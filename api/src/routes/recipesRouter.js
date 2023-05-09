const { Router } = require("express");
const recipesRouter = Router();
const { getRecipeById, getRecipeByName, postRecipe } = require("../controllers/recipesController");

recipesRouter.get("/", );
recipesRouter.get("/:id", getRecipeById);
recipesRouter.get("/name", getRecipeByName);
recipesRouter.post("/recipes", postRecipe)


module.exports = recipesRouter;