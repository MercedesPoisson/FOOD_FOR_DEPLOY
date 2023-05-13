import React from "react";
import Card from "../Card/Card";
import style from "./CardsContainer.module.css";

const CardsContainer = ({recipes}) => {
    
    return (
        <div className={`${style.container} ${style.cardsContainer}`}>
          {recipes && recipes.map(({name, img, id, diets, healthScore}) => {
            return (
              <Card
                key={id}
                id={id}
                image={img}
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
