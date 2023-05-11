import axios from "axios";
require("dotenv").config();
const { APIKEY } = process.env;


export const GET_RECIPES = "GET_RECIPES";

export const getRecipes = () => {
    return async function(dispatch){
        const apiData = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${APIKEY}&addRecipeInformation=true&number=100`);
        const recipes = apiData.data
        dispatch({ type: GET_RECIPES, payload: recipes });
    }
};

