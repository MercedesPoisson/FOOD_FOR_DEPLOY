import style from "./Detail.module.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getRecipesById, cleanDetail } from "../../redux/actions";
import { useDispatch, useSelector} from "react-redux";

const Detail = () => {
    const dispatch = useDispatch();
    const recipeDetail = useSelector(state => state.recipeDetail)
    const { id } = useParams();

    useEffect(() => {
        dispatch(getRecipesById(id));
        return () => dispatch(cleanDetail())

    }, [id]);
   
      
    return (
        <div className={style.containerTotal}> 
            <div className={style.containerImage}>
                <img src={recipeDetail.image} alt={recipeDetail.name} />
            </div>
            <div className={style.containerData}>
                <h3 className={style.name}>{recipeDetail.name}</h3>
                <h4>Diets: {recipeDetail.diets}</h4>
                <p>Summary: {recipeDetail.summary}</p>
            </div>
        </div>
    );
}

export default Detail;