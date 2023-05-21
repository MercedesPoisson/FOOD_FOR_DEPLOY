import React from "react";
import Card from "../Card/Card";
import style from "./CardsContainer.module.css";


const CardsContainer = ({recipes}) => {
  console.log("Diets data:", recipes);
    
    return (
        <div className={`${style.container} ${style.cardsContainer}`}>
          {recipes && recipes.map(({name, id, diets, healthScore, image}) => {
            return (
              <Card
                key={id}
                id={id}
                //image={img}
                image={image}
                name={name}
                diets={diets}
                healthScore={healthScore}
              />
            );
          })}
        </div>
      );
    };

export default CardsContainer;
