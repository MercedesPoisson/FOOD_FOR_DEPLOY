import {
  GET_RECIPES,
  GET_BY_NAME,
  GET_BY_ID,
  GET_TYPE_DIETS,
  CLEAN_DETAIL,
  FILTER_BY_DIET,
  FILTER_BY_SOURCE,
  SORT_RECIPES,
  ORDER_BY_SCORE
} from "./actions";

const initialState = {
  recipes: [],
  allRecipes: [],
  detail: {},
  typeDiets: [],
  filteredRecipes: [],
  source: "All Sources"
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RECIPES:
      return { ...state, recipes: action.payload, allRecipes: action.payload };
    case GET_BY_NAME:
      const filteredRecipesByName = action.payload.map((recipe) => {
        return {
          ...recipe,
          diets: state.allRecipes.find((r) => r.id === recipe.id)?.diets || [],
        };
      });
      return { ...state, recipes: filteredRecipesByName };
    case GET_BY_ID:
      return { ...state, detail: action.payload };
    case CLEAN_DETAIL:
      return { ...state, detail: {} };
    case GET_TYPE_DIETS:
      return { ...state, typeDiets: action.payload };
      
    case FILTER_BY_DIET:
      const selectedDietType = action.payload;
      const recipesFilter = selectedDietType === "All Diet Types"
        ? [...state.allRecipes]
        : state.allRecipes.filter(recipe => recipe.diets && recipe.diets.includes(selectedDietType));
      return { ...state, recipes: recipesFilter, isFiltered: true };

    case "POST_DIETS":
      return { ...state };
    case FILTER_BY_SOURCE:
      const { filteredRecipes, source: selectedSource } = action.payload;
      return {
        ...state,
        recipes: filteredRecipes,
        source: selectedSource
      };
    case SORT_RECIPES:
      const sortedRecipes = [...state.recipes].sort((a, b) => {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();
        if (nameA < nameB) return action.payload === "AtoZ" ? -1 : 1;
        if (nameA > nameB) return action.payload === "AtoZ" ? 1 : -1;
        return 0;
      });
      return { ...state, recipes: sortedRecipes };

    case ORDER_BY_SCORE:
      let orderByScore = [ ...state.filteredRecipes]
      orderByScore = action.payload === "ascendent" ?
      orderByScore.sort((a,b) => {
        if (a.healthScore < b.healthScore) return -1
        if (a.healthScore > b.healthScore) return 1
        return 0;
      }) :
      orderByScore.sort((a,b) => {
        if (a.healthScore < b.healthScore) return 1
        if (a.healthScore > b.healthScore) return -1
        return 0;
      })
      return { ...state, filteredRecipes: orderByScore }
      
    default:
      return state;
  }
};

export default rootReducer;