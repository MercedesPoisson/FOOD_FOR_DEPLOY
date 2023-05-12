import style from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = (props) => {

    return(
        <div className={style.card}>
            <img src={props.image} alt={props.name} />
            <Link to={`/detail/${props.id}`} className={style.linkName}>
            <h3 className={style.name}>{props.name}</h3>
            </Link>
            {/* <p>Summary:{props.summary}</p> */}
            <h5 className={style.dietsButton}>{props.diets}</h5>
            <p>HealthScore:{props.healthScore}</p>
            

        </div>
    )
} 

export default Card;