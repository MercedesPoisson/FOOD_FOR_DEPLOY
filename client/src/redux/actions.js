import axios from "axios";
// require("dotenv").config();
// const { APIKEY } = process.env;
// const API_KEY = process.env.API_KEY;


export const GET_RECIPES = "GET_RECIPES";
// export const GET_RECIPE = "GET_RECIPE";

export const getRecipes = () => {
    return async function(dispatch){
        const apiData = await axios.get(`http://localhost:3001/recipes`);
        const recipes = apiData.data;
        dispatch({ type: GET_RECIPES, payload: recipes });
    };
};

// export const getRecipe = (id) => {
//     return async function (dispatch){
//         const apiData = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}&addRecipeInformation=true&number=100`);
//         const recipe = apiData.data;
//         dispatch({type: GET_RECIPES, payload: recipe})      ;  
//     }; 
// };

// export const filteredBySource = () => {
//     dispatch({type: "FILTERED_BY_SOURCE"});
// };