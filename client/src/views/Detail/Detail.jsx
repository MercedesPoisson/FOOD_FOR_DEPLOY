import style from "./Detail.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Detail = () => {
    const { id } = useParams();
    const [ recipe, setRecipe ] = useState({});

    useEffect(() => {
      axios(`http://localhost:3001/recipes/${id}`)
        .then(response => {
          console.log('Response:', response.data);
          return response.data;
        })
        .then((data) => {
          if (data.name) {
            setRecipe(data);
          } else {
            alert(`We don't have recipes with this #{id} number`);
          }
        })
        .catch(error => {
          console.error('Error:', error);
        });
    
      return setRecipe({});
    }, [id]);    

    const renderSteps = () => {
      if (Array.isArray(recipe.steps?.steps)) {
        return recipe.steps.steps.map((step, index) => (
          <div className={style.stepContainer} key={index}>
            <p className={style.stepNumber}>Step number: {step.number}</p>
            <p className={style.step}>{step}</p>
          </div>
        ));
      } else if (Array.isArray(recipe.steps)) {
        return recipe.steps.map((step, index) => (
          <div className={style.stepContainer} key={index}>
            <p className={style.stepNumber}>Step number: {index + 1}</p>
            <p className={style.step}>{step.step}</p>
          </div>
        ));
      }
      return null;
    };

    const renderDiets = () => {
        if (Array.isArray(recipe.diets)) {
            return recipe.diets.join(", ");
        }
        return null;
    };
    const createMarkup = (html) => {
        return { __html: html };
      };

    return (
        <div className={style.grid}>
      <div className={style.imgContainer}>
        <img className={style.img} src={recipe?.image} alt="" />
      </div>
      <div className={style.cardContent}>
        <h1>{recipe?.name}</h1>
        <h3>HealthScore: {recipe?.healthScore} </h3>
        
        <p>Summary: <span dangerouslySetInnerHTML={createMarkup(recipe?.summary)} /></p>
        
        <div className={style.containerStep}>{renderSteps()}</div>
        <div>Diet Types: {renderDiets()}</div>
        <h3>id Number: {recipe?.id}</h3>
      </div>
    </div>
  );
};

export default Detail;











// const renderSteps = () => {
    //   if (Array.isArray(recipe.steps?.steps)) {
    //     return recipe.steps.steps.map((step, index) => (
    //       <div className={style.stepContainer} key={index}>
    //         <p className={style.stepNumber}>Step number: {index + 1}</p>
    //         <p className={style.step}>{step}</p>
    //       </div>
    //     ));
    //   }
    //   return null;
    // };