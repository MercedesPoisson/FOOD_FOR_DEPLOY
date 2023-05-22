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
      <h2 className={style.subtitulo}>Recipe Preview</h2>
      <div>
        {image && <img src={image} alt={name} className={style.image} />}
      </div>
      <div>
        <h2 className={style.name}>{name}</h2>
        <h3 className={style.health}>HealthScore: {healthScore}</h3>
        <p className={style.summaryTitle}>Summary:</p>
        <p>{summary}</p>
        <p className={style.stepTitle}>Step By Step:</p>
        <div className={style.containerStep}>{renderSteps()}</div>
        <p className={style.dietsTitle}>Diet Types:</p>
        <div> {renderDiets()}</div>
      </div>
    </div>
  );
};

export default Preview;