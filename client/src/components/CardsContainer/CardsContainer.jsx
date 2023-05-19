import React from "react";
import Card from "../Card/Card";
import style from "./CardsContainer.module.css";

const CardsContainer = ({ recipes }) => {
  return (
    <div className={`${style.container} ${style.cardsContainer}`}>
      {recipes &&
        recipes.map(({ name, id, diets, typeDiets, healthScore, image }) => {
          const allDiets = typeDiets || diets;
          return (
            <Card
              key={id}
              id={id}
              image={image}
              name={name}
              diets={allDiets}
              healthScore={healthScore}
            />
          );
        })}
    </div>
  );
};

export default CardsContainer;
