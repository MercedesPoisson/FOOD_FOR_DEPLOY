import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipes } from "../../redux/actions";



const Home = ( ) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRecipes());
    },[dispatch]);

    const recipes = useSelector((state) => state.recipes);

    return(
        <>
        <h1>Esta es la vista de Home</h1>
        <CardsContainer recipes={recipes} />
        </> 
    )
}

export default Home; 