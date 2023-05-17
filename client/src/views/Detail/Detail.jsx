import style from "./Detail.module.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getRecipesById, cleanDetail } from "../../redux/actions";
import { useDispatch, useSelector} from "react-redux";

const Detail = () => {
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        const loadData = async () => {
            await dispatch(getRecipesById(id))
        }
        loadData()
    }, [dispatch, id])

    const data = useSelector(state => state.recipeDetail)
    console.log(data);
      
    return (
        <div className={style.detailContainer}>
          <div className={style.containerText}>
            <h1>{data.name}</h1>
            <h3>{data.healthScore}</h3>
            <h3>{data.diets.join(', ')}</h3>
            <h2>{data.summary}</h2>
          </div>
          <div className={style.containerStep}>
            {data.instructions?.map((step, index) => (
              <div className={style.stepContainer} key={index}>
                <p className={style.stepNumber}>Step number: {step.number}</p>
                <p className={style.step}>{step.step}</p>
              </div>
            ))}
          </div>
          <div className={style.containerImg}>
            <img className={style.img} src={data.image} alt="" />
          </div>
        </div>
      );
     }

export default Detail;