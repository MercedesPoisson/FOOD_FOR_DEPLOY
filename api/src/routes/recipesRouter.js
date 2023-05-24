const { Router } = require("express");
const { getRecipeHandler, getRecipesHandler, postRecipeHandler, deleteRecipeHandler } = require("../handlers/recipesHandlers");

const recipesRouter = Router();


recipesRouter.get("/", getRecipesHandler);
recipesRouter.get("/:id", getRecipeHandler);
recipesRouter.post("/", postRecipeHandler);
recipesRouter.delete("/:id", deleteRecipeHandler);
   

module.exports = recipesRouter;