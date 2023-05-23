import CardsContainer from "../../components/CardsContainer/CardsContainer";
import NavBar from "../../components/NavBar/NavBar";
import Pagination from "../../components/Pagination/Pagination";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipes } from "../../redux/actions";
import Filters from "../../components/Filters/Filters";
import style from "./Home.module.css";


const Home = ( ) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRecipes());
    },[dispatch]);
    

    //-------PAGINADO------
    const recipes = useSelector((state) => state.recipes);

    console.log("Recipes:", recipes)
    const recipesPerPage = 9;
    const [ currentPage, setCurrentPage ] = useState(1);

    const pagination = (pageNumber) => {
        setCurrentPage(pageNumber);      
    };
    const indexOfLastRecipe = currentPage * recipesPerPage;
    const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
    const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);
    
    return (
      <div className={style.gridContainer}>
        <NavBar />
    
        <div className={style.content}>
          <div className={style.filtersContainer}>
            <Filters />
          </div>
    
          <div className={style.cardsContainer}>
            <CardsContainer recipes={currentRecipes} />
          </div>
        </div>
    
        <div className={style.paginationContainer}>
          <Pagination
            recipesPerPage={recipesPerPage}
            allRecipes={recipes.length}
            paginado={pagination}
          />
        </div>
      </div>
    );
    };

export default Home; 