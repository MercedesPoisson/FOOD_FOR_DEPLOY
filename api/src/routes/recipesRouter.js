const { Router } = require("express");
const { getRecipeHandler, getRecipesHandler, postRecipeHandler } = require("../handlers/recipesHandlers");

const recipesRouter = Router();


recipesRouter.get("/", getRecipesHandler);
recipesRouter.get("/:id", getRecipeHandler);
recipesRouter.post("/", postRecipeHandler);
   

module.exports = recipesRouter;