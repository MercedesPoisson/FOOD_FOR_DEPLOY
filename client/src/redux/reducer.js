import { GET_RECIPES, GET_BY_NAME, GET_BY_ID, GET_TYPE_DIETS, CLEAN_DETAIL, FILTER_BY_DIET, DB_RECIPES, API_RECIPES } from "./actions";

const initialState = {
    recipes: [],
    allRecipes: [],
    detail: {},
    typeDiets: []
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) { 
      case GET_RECIPES:
        return { ...state, recipes: action.payload, allRecipes: action.payload };
      case GET_BY_NAME:
        return { ...state, recipes: action.payload };
      case GET_BY_ID:
        return {
          ...state, detail: action.payload };
      case CLEAN_DETAIL:
        return { ...state, detail: {} };
      case GET_TYPE_DIETS:
        return {
          ...state, typeDiets: action.payload };
      case FILTER_BY_DIET:  
        const pointer = action.payload;
        let recipesFilter;
        if (pointer === "All Diet Types") {
          recipesFilter = [...state.allRecipes];
        } else {
          recipesFilter = state.allRecipes.filter(recipe =>
            recipe.diets && recipe.diets.includes(pointer) )}
        return { ...state, recipes: recipesFilter, isFiltered: true };
      case "POST_DIETS":
        return { ...state };
      default:
        return state;
    }
  };
  
  export default rootReducer;