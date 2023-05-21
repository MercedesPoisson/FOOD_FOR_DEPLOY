import React from "react";
import style from "./Preview.module.css";

const Preview = ({ name, summary, image, healthScore, analyzedInstructions, typeDiets }) => {

    const renderSteps = () => {
        if (Array.isArray(analyzedInstructions)) {
          return analyzedInstructions.map((step, index) => (
            <div className={style.stepContainer} key={index}>
              <p className={style.stepNumber}>Step number: {index + 1}</p>
              <p className={style.step}>{step.step}</p>
            </div>
          ));
        }
        return null;
      };

  const renderDiets = () => {
    if (Array.isArray(typeDiets)) {
      return typeDiets.join(", ");
    }
    return null;
  };

  return (
    <div className={style.container}>
      <h2>Recipe Preview</h2>
      <div>
  {image && <img src={image} alt={name} className={style.image} />}
</div>
      <div>
        <h2>Name: {name}</h2>
        <h3>HealthScore: {healthScore}</h3>
        <p>Summary: {summary}</p>
        <p>Step By Step:</p>
        <div className={style.containerStep}>{renderSteps()}</div>
        <div>Diet Types: {renderDiets()}</div>
      </div>
    </div>
  );
};

export default Preview;