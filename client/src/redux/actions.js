import axios from "axios";
export const GET_RECIPES = "GET_RECIPES";
export const GET_BY_NAME = "GET_BY_NAME";
export const GET_BY_ID = "GET_BY_ID";
export const GET_TYPE_DIETS = "GET_TYPE_DIETS";
export const CLEAN_DETAIL = "CLEAN_DETAIL";
export const FILTER_BY_DIET = "FILTER_BY_DIET";
export const DB_RECIPES = "DB_RECIPES";
export const API_RECIPES = "API_RECIPES";

export const getRecipes = () => {
    return async function(dispatch){
        const apiData = await axios.get(`http://localhost:3001/recipes`);
        const recipes = apiData.data;
        dispatch({ type: GET_RECIPES, payload: recipes });
    };
};

export const getRecipesByName = (name) => {
    return async function(dispatch){
        const apiData = await axios.get(`http://localhost:3001/recipes?name=${name}`);
        const recipesByName = apiData.data;
        dispatch({ type: GET_BY_NAME, payload: recipesByName });
    }
}

export const getRecipesById = (id) => {
    return async function(dispatch){
        const apiData = await axios.get(`http://localhost:3001/recipes/${id}`);
        const recipesById = apiData.data;
        dispatch({ type: GET_BY_ID, payload: recipesById });
    }
}

export const cleanDetail = () => {
    return { type: CLEAN_DETAIL};
}

export const filterByDiet = (typeDiets) => {
    return function(dispatch, getState) {
      if (typeDiets === "All Diet Types") {
        dispatch(getRecipes());
      } else {
        dispatch({ type: FILTER_BY_DIET, payload: typeDiets });
      }
    };
  };

export const getTypeDiets = () => {
    return async function(dispatch){
        const apiData = await axios.get(`http://localhost:3001/diets`);
        const typeDiets = apiData.data;
        dispatch({ type: GET_TYPE_DIETS, payload: typeDiets });
    }
}

export const postRecipes = (payload) => {
    return async function(dispatch){
        const apiData = await axios.post(`http://localhost:3001/recipes`, payload)
        return apiData;
    }
}

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