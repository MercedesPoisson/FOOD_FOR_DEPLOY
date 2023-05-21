import React from "react";
import Card from "../Card/Card";
import style from "./CardsContainer.module.css";


const CardsContainer = ({ recipes }) => {
  return (
    <div className={`${style.container} ${style.cardsContainer}`}>
      {recipes &&
        recipes.map(({ name, id, diets, healthScore, image }) => {
          console.log(diets); // Agrega el console.log aquí
          const dietNames = Array.isArray(diets)
            ? diets.map(diet => diet.name || diet) // Si es un objeto, obtén el nombre; si es una cadena, úsala directamente
            : [];

          return (
            <Card
              key={id}
              id={id}
              image={image}
              name={name}
              diets={dietNames}
              healthScore={healthScore}
            />
          );
        })}
    </div>
  );
};

export default CardsContainer;
