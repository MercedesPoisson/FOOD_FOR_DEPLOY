import { GET_RECIPES, GET_BY_NAME, GET_BY_ID, GET_TYPE_DIETS, CLEAN_DETAIL, FILTER_BY_DIET, FILTER_BY_SOURCE, SORT_RECIPES} from "./actions";

const initialState = {
  recipes: [],
  allRecipes: [],
  detail: {},
  typeDiets: [],
  filteredRecipes:[],
  source: "All Sources",
 
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_RECIPES:
        return { ...state, recipes: action.payload, allRecipes: action.payload };
      case GET_BY_NAME:
        return { ...state, recipes: action.payload };
      case GET_BY_ID:
        return { ...state, detail: action.payload };
      case CLEAN_DETAIL:
        return { ...state, detail: {} };
      case GET_TYPE_DIETS:
        return { ...state, typeDiets: action.payload };
      case FILTER_BY_DIET:
        const pointer = action.payload;
        let recipesFilter;
        if (pointer === "All Diet Types") {
          recipesFilter = [...state.allRecipes];
        } else {
          recipesFilter = state.allRecipes.filter(
            (recipe) => recipe.diets && recipe.diets.includes(pointer)
          );
        }
        return { ...state, recipes: recipesFilter, isFiltered: true };
      case "POST_DIETS":
        return { ...state };
      case FILTER_BY_SOURCE:
        const selectedSource = action.payload;
        let filteredRecipes = [];
  
        if (selectedSource === "All Sources") {
          filteredRecipes = state.allRecipes;
        } else if (selectedSource === "API") {
          filteredRecipes = state.allRecipes.filter(
            (recipe) => !recipe.hasOwnProperty("created")
          );
        } else if (selectedSource === "Database") {
          filteredRecipes = state.allRecipes.filter((recipe) =>
            recipe.hasOwnProperty("created")
          );
        }
  
        return {
          ...state,
          recipes: filteredRecipes,
          source: selectedSource,
        };
      case SORT_RECIPES:
        let recipesSort = [...state.recipes]
        recipesSort = action.payload === "AtoZ" ?
        recipesSort.sort((a,b) => {
            if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
            if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
            return 0;
        }) :
        recipesSort.sort((a,b) => {
            if (a.name.toLowerCase() < b.name.toLowerCase()) return 1;
            if (a.name.toLowerCase() > b.name.toLowerCase()) return -1;
            return 0;
        })
        return {
            ...state,
            recipes: recipesSort
        }
      default:
        return state;
    }
  };
  
  export default rootReducer;