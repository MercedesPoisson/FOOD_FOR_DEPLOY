import React from "react";
import style from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = ({ image, name, diets, id }) => {
  const renderDiets = () => {
    if (Array.isArray(diets)) {
      return diets.join(", ");
    }
    return "No diets available";
  };

  return (
    <div className={style.grid}>
      <div className={style.gridItem}>
        <div className={style.card}>
          <img src={image} alt={name} className={style.img} />
          <div className={style.cardContent}>
            <h3 className={style.name}>{name}</h3>
            <div className={style.dietTypes}>
              <h5 className={style.cardText}>DIETS:</h5>
              <p className={style.text}>{renderDiets()}</p>
            </div>
          </div>
          <div className={style.cardButtonContainer}>
            <Link to={`/recipes/${id}`} className={style.linkName}>
              <button className={style.cardButton}>
                Let's Cook<span>&rarr;</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;