import Card from "../Card/Card";
import style from "./CardsContainer.module.css";
// import { useSelector } from "react-redux";

const CardsContainer = ({recipes}) => {
    //   const recipes = useSelector(state => state.recipes)
      console.log(recipes);

    return(
        <div className={style.container}>
            {recipes.map(recipe => {
                return <Card
                    id= {recipe.id}
                    name= {recipe.name}
                    summery= {recipe.summary}
                    healthScore= {recipe.healthScore}
                    image= {recipe.image}
                    />
                })}
 
            </div>
      
    )
} 

export default CardsContainer;
