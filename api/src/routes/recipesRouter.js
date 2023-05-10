const { Router } = require("express");
const { getRecipeHandler, getRecipesHandler, postRecipeHandler } = require("../handlers/recipesHandlers");

const recipesRouter = Router();

const validate = (req, res, next) => {
    const {name, summary, stepByStep } = req.body;
    if(!name) return res.status(400).json({error: "Missing Name"});
    if(!summary) return res.status(400).json({error: "Missing Summary"}); 
    if(!stepByStep) return res.status(400).json({error: "Missing Steps"});
    next();
}

recipesRouter.get("/", getRecipesHandler);
recipesRouter.get("/:id", getRecipeHandler);
recipesRouter.post("/", validate, postRecipeHandler);
   

module.exports = recipesRouter;