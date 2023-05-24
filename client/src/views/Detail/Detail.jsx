import style from "./Detail.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { deleteRecipeById } from "../../redux/actions";
import { useDispatch } from "react-redux"


//-----dispatch ´para buscar las recetas por id
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
      if (Array.isArray(recipe.steps)) {
        return recipe.steps.map((step, index) => (
          <div className={style.stepContainer} key={index}>
            <p className={style.stepNumber}>Step number: {index + 1}</p>
            {typeof step === 'string' ? (
              <p className={style.step}>{step}</p>
            ) : (
              <p className={style.step}>{step.step}</p>
            )}
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
//dispatch para bprrar las recetas de la base de datos
      const dispatch = useDispatch();

      const isValidUUID = (id) => {
        const uuidRegex = /^[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89ab][a-f0-9]{3}-[a-f0-9]{12}$/i;
        return uuidRegex.test(id);
      };
    
      const handleDelete = () => {
        console.log("Delete button clicked")
        deleteRecipeById(recipe.id);
      };
// solo renderizo el boton cuando la receta tiene id de tipo UUID    
      const renderDeleteButton = () => {
        if (isValidUUID(recipe.id)) {
          return (
            <button className={style.buttonDelete} onClick={handleDelete}>
              DELETE
            </button>
          );
        }
        return null;
      };
    

      return (
        <div className={style.grid}>
        <div className={style.cardContent}>
          <div className={style.title}>
            <h1>{recipe?.name}</h1>
            <h3>HealthScore: {recipe?.healthScore}</h3>
            <p>
              Summary: <span dangerouslySetInnerHTML={createMarkup(recipe?.summary)} />
            </p>
          </div>
          <div className={style.containerStep}>{renderSteps()}</div>
          <div className={style.dietTypes}>Diet Types: {renderDiets()}</div>
          <h3>id Number: {recipe?.id}</h3>
          <div className={style.buttonContainer}>
            <Link to="/home">
              <button className={style.buttonBack}>BACK</button>
            </Link>
            {renderDeleteButton()}
          </div>
        </div>
        <div className={style.imgContainer}>
          <img className={style.img} src={recipe?.image} alt="" />
        </div>
      </div>
    );
};

export default Detail;




// const renderSteps = () => {
    //   if (Array.isArray(recipe.steps?.steps)) {
    //     return recipe.steps.steps.map((step, index) => (
    //       <div className={style.stepContainer} key={index}>
    //         <p className={style.stepNumber}>Step number: {step.number}</p>
    //         <p className={style.step}>{step}</p>
    //       </div>
    //     ));
    //   } else if (Array.isArray(recipe.steps)) {
    //     return recipe.steps.map((step, index) => (
    //       <div className={style.stepContainer} key={index}>
    //         <p className={style.stepNumber}>Step number: {index + 1}</p>
    //         <p className={style.step}>{step.step}</p>
    //       </div>
    //     ));
    //   }
    //   return null;
    // };






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