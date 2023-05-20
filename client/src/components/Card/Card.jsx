import React from "react";
import style from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = ({ image, name, diets, id }) => {
  console.log("diets:", diets);
  return (
    <div className={style.grid}>
      <div className={style.gridItem}>
        <div className={style.card}>
          <img src={image} alt={name} className={style.img} />
          <div className={style.cardContent}>
            <h3 className={style.name}>{name}</h3>
            {/* <p>Summary:{props.summary}</p> */}
            <div className={style.dietTypes}>
              <h5 className={style.cardText}>Diets:</h5>
              <p className={style.text}>{Array.isArray(diets) ? diets.join(", ") : ''}</p>
            </div>
          </div>
          <div className={style.cardButtonContainer}>
            <Link to={`/recipes/${id}`} className={style.linkName}>
            <button className={style.cardButton}>Learn More<span>&rarr;</span></button>
          </Link>
          </div>
          
          {/* <p>HealthScore:{healthScore}</p> */}
        </div>
      </div>
    </div>
  );
};

export default Card;