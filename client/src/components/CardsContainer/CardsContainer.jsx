import React from "react";
import Card from "../Card/Card";
import style from "./CardsContainer.module.css";


const CardsContainer = ({ recipes }) => {
  return (
    <div className={`${style.container} ${style.cardsContainer}`}>
      {recipes &&
        recipes.map(({ name, id, diets, healthScore, image }) => {
          console.log(diets); 
          const dietNames = Array.isArray(diets)
            ? diets.map(diet => diet) // condicional dependiendo de donde vienen los datos si es un objeto obtengo el nombre y si es una, la uso directamente
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
