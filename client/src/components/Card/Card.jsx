import style from "./Card.module.css";

const Card = (props) => {
    return(
        <div className={style.card}>
            <p>Name:{props.name}</p>
            <p>Summary:{props.summary}</p>
            <p>HealthScore:{props.healthScore}</p>
            <p>Image:{props.image}</p>

        </div>
    )
} 

export default Card;