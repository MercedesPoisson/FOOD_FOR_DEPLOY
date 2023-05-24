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
export const DELETE_RECIPE = "DELETE_RECIPE";

export const getRecipes = () => {
  return async function (dispatch) {
    try {
      const apiData = await axios.get('http://localhost:3001/recipes');
      const allRecipes = apiData.data;
      dispatch({ type: GET_RECIPES, payload: allRecipes });
    } catch (error) {
      console.log('Error while getting recipes:', error);
      dispatch({ type: GET_RECIPES, payload: [] });
    }
  };
};

export const getRecipesByName = (name) => {
  return async function (dispatch) {
    try {
      const apiData = await axios.get(`http://localhost:3001/recipes`);
      const allRecipes = apiData.data;

      const searchTerm = name.toLowerCase();
      const filteredRecipes = allRecipes.filter(recipe => recipe.name.toLowerCase().includes(searchTerm));

      if (filteredRecipes.length > 0) {
        console.log('Recetas encontradas:', filteredRecipes);
        dispatch({ type: GET_BY_NAME, payload: filteredRecipes });
      } else {
        console.log('No se encontraron recetas');
        dispatch({ type: GET_BY_NAME, payload: [] });
        alert('No recipes were found with the specified name');
        dispatch(getRecipes())
      }
    } catch (error) {
      return dispatch({ type: GET_BY_NAME, payload: [] });
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

export const filterByDiet = (typeDiets) => {
  return function (dispatch, getState) {
    console.log(typeDiets);
    if (typeDiets === "All Diet Types") {
      dispatch(getRecipes());
    } else {
      dispatch({ type: FILTER_BY_DIET, payload: typeDiets });
    }
  };
};

export const filterBySource = (selectedSource) => {
  return function (dispatch, getState) {
    const { allRecipes, source } = getState(); 
    let filteredRecipes = allRecipes;

    if (selectedSource !== source) {  
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

export const sortByScore = (order) => {
  return { type: ORDER_BY_SCORE, payload: order };
};

export const getTypeDiets = () => {
  return async function (dispatch) {
    const apiData = await axios.get(`http://localhost:3001/diets`);
    const typeDiets = apiData.data;
    dispatch({ type: GET_TYPE_DIETS, payload: typeDiets });
  };
};

export const postRecipes = (name, summary, healthScore, stepByStep, image, diets) => {
  return async (dispatch) => {
    try {
      const dataPost = await axios.post("http://localhost:3001/recipes", { name, summary, healthScore, stepByStep, image, diets });
      alert("Recipe created successfully");
      return dispatch({ type: POST_RECIPE, payload: dataPost.data });
    } catch (error) {
      alert("We couldn't create your recipe");
      console.log("error en postRecipe");
    }
  };
};

export const deleteRecipeById = (id) => {
  console.log("deleting recipe with ID", id);
  return async function (dispatch) {
    if (!/^[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89ab][a-f0-9]{3}-[a-f0-9]{12}$/i.test(id)) {
      throw new Error("Invalid UUID format");
    }
    try {
      await axios.delete(`http://localhost:3001/recipes/${id}`);
      console.log("After delete request");
      dispatch({
        type: DELETE_RECIPE,
        payload: id,
      });
      alert("Your recipe has been deleted");
      window.location.href = '/home'; 
    } catch (error) {
      console.log("Error while deleting recipe:", error);
      alert("We couldn't delete the recipe");
    }
  };
};






// export const postRecipes = (payload) => {
//   return async function (dispatch) {
//     const apiData = await axios.post(`http://localhost:3001/recipes`, payload);
//     return apiData;
//   };
// };

// export const postDiets = (recipeId, diets) => {
//   return async function (dispatch) {
//     const data = { recipeId, diets };
//     const apiData = await axios.post('http://localhost:3001/recipeDiet', data);
//     return apiData;
//   };
// };