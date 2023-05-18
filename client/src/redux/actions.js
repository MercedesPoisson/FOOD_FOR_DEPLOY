import axios from "axios";

export const GET_RECIPES = "GET_RECIPES";
export const GET_BY_NAME = "GET_BY_NAME";
export const GET_BY_ID = "GET_BY_ID";
export const GET_TYPE_DIETS = "GET_TYPE_DIETS";
export const CLEAN_DETAIL = "CLEAN_DETAIL";
export const FILTER_BY_DIET = "FILTER_BY_DIET";
export const DB_RECIPES = "DB_RECIPES";
export const API_RECIPES = "API_RECIPES";
export const FILTER_BY_SOURCE = "FILTER_BY_SOURCE";
export const SORT_RECIPES = "SORT_RECIPES";
export const ORDER_BY_SCORE = "ORDER_BY_SCORE";
export const POST_RECIPE = "POST_RECIPE";
export const POST_DIETS = "POST_DIETS";

export const getRecipes = () => {
  return async function (dispatch) {
    const apiData = await axios.get(`http://localhost:3001/recipes`);
    const recipes = apiData.data;
    dispatch({ type: GET_RECIPES, payload: recipes });
  };
};

export const getRecipesByName = (name) => {
  return async function (dispatch) {
    try {
      const apiData = await axios.get(`http://localhost:3001/recipes?name=${name}`);
      const recipesByName = apiData.data;
      
      // Convertir la entrada de búsqueda y los nombres de las recetas a minúsculas
      const searchTerm = name.toLowerCase();
      const filteredRecipes = recipesByName.filter(recipe => recipe.name.toLowerCase().includes(searchTerm));
      
      dispatch({ type: GET_BY_NAME, payload: filteredRecipes });
    } catch (error) {
      return dispatch({ type: GET_BY_NAME, payload: []});
    }    
  };
};

export const getRecipesById = (id) => {
  return async function (dispatch) {
    const apiData = await axios.get(`http://localhost:3001/recipes/${id}`);
    const recipesById = apiData.data;
    dispatch({ type: GET_BY_ID, payload: recipesById });
  };
};

export const cleanDetail = () => {
  return { type: CLEAN_DETAIL };
};

export const filterByDiet = (typeDiets) => {
  return function (dispatch, getState) {
    if (typeDiets === "All Diet Types") {
      dispatch(getRecipes());
    } else {
      dispatch({ type: FILTER_BY_DIET, payload: typeDiets });
    }
  };
};

export const filterBySource = (selectedSource) => {
  return function (dispatch, getState) {
    const { allRecipes, source } = getState(); // Obtener todas las recetas originales y el origen actual

    let filteredRecipes = allRecipes; // Inicialmente, todas las recetas

    if (selectedSource !== source) {  //las recetas de la API son de tipo numero y las de la BD son de tipo UUID
      if (selectedSource === "API") {
        filteredRecipes = allRecipes.filter((recipe) => typeof recipe.id === "number");
      } else if (selectedSource === "Database") {
        filteredRecipes = allRecipes.filter((recipe) => typeof recipe.id === "string");
      }
    }
    dispatch({ type: FILTER_BY_SOURCE, payload: { filteredRecipes, source: selectedSource } });
  };
};

export const sortRecipes = (payload) => {
  return { type: SORT_RECIPES, payload: payload };
};

export const sortByScore = (payload) => {
  return { type: ORDER_BY_SCORE, payload: payload };
};

export const getTypeDiets = () => {
  return async function (dispatch) {
    const apiData = await axios.get(`http://localhost:3001/diets`);
    const typeDiets = apiData.data;
    dispatch({ type: GET_TYPE_DIETS, payload: typeDiets });
  };
};

export const postRecipes = (payload) => {
  return async function (dispatch) {
    const apiData = await axios.post(`http://localhost:3001/recipes`, payload);
    return apiData;
  };
};

// export const postDiets = (recipeId, diets) => {
//   return async function (dispatch) {
//     const data = { recipeId, diets };
//     const apiData = await axios.post('http://localhost:3001/recipeDiet', data);
//     return apiData;
//   };
// };