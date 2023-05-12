import { GET_RECIPES, GET_BY_NAME, GET_BY_ID, GET_TYPE_DIETS } from "./actions";

const initialState = {
    recipes: [],
    allRecipes: [],
    detail: [],
    typeDiets: []
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_RECIPES:
            return {...state, recipes: action.payload, allRecipes: action.payload };
        case GET_BY_NAME:
            return {...state, recipes: action.payload }        
        case GET_BY_ID:
            return {...state, details: action.payload }
        case GET_TYPE_DIETS:
            return {...state, typeDiets: action.payload }
        case "POST_DIETS":
            return { ...state}
        default:
            return { ...state};
    }
};


export default rootReducer; 