import style from "./Detail.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getRecipesById } from "../../redux/actions";
import { useDispatch} from "react-redux";

const Detail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const [ recipe, setRecipe ] = useState({});

    useEffect(() => {
        dispatch(getRecipesById(id));
    }, [dispatch, id]);
    
    if (!recipe) {
        return <div>Cargando...</div>; // Mostrar mensaje de carga mientras se obtienen los detalles de la receta
    }
    
    return (
        <div className={style.containerTotal}> 
            <div className={style.containerImage}>
                <img src={recipe.image} alt={recipe.name} />
            </div>
            <div className={style.containerData}>
                <h3 className={style.name}>{recipe.name}</h3>
                <h4>Diets: {recipe.diets}</h4>
                <p>Summary: {recipe.summary}</p>
            </div>
        </div>
    );
}

export default Detail;