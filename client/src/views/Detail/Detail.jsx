import style from "./Detail.module.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipesById } from "../../redux/actions";

const Detail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const recipe = useSelector(state => state.detail); // Modificado: utilizar 'detail' en lugar de 'recipe'

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