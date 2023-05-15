import React from "react";
import style from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = ({ image, name, diets, id}) => {

    return(
        <div className={style.card}>
            <img src={image} alt={name} />
            <Link to={`/recipes/${id}`} className={style.linkName}>
            <h3 className={style.name}>{name}</h3>
            </Link>
            {/* <p>Summary:{props.summary}</p> */}
            <div>
                <h5 className={style.dietsTitle}>Diets:
                <br/>
                {diets}</h5>
            </div>
            
            {/* <p>HealthScore:{healthScore}</p> */}
            

        </div>
    )
} 

export default Card;