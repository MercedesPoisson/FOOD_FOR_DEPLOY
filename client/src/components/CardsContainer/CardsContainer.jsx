import Card from "../Card/Card";
import style from "./CardsContainer.module.css";
// import { useSelector } from "react-redux";

const CardsContainer = ({recipes}) => {
    const maxRecipes = recipes.slice(0, 20);//   const recipes = useSelector(state => state.recipes)

    return(
        <div className={style.container}>
            {maxRecipes.map(recipe => {
                return <Card
                    key={recipe.id}
                    id= {recipe.id}
                    name= {recipe.name}
                    summery= {recipe.summary}
                    healthScore= {recipe.healthScore}
                    image= {recipe.img}
                    />
                })}
 
            </div>
      
    )
} 

export default CardsContainer;
