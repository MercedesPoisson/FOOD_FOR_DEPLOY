import React, { useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTypeDiets, postRecipes } from "../../redux/actions";
import style from "./Form.module.css";
import validation from "./Validation";
import { BsArrowLeftCircle } from "react-icons/bs";

const Form = () => {

  const dispatch = useDispatch();
  const history = useHistory();
  const typeDiets = useSelector((state) => state.typeDiets)

  const [ input, setInput ] = useState({
    name: "",
    summary: "",
    healthScore: "",
    stepByStep: [{ step: "" }],
    image: "",
    typeDiets: [],
  })

  const [ errors, setErrors ] = useState({
    name: "",
    summary: "",
    healthScore: "",
    analyzedInstructions: "",
    image: "",
    typeDiets: "",
  })

  const handleChange = (event) => {
    if (event.target.name === "image") {
      setInput({ ...input, image: event.target.value });
    } else {
      setInput({ ...input, [event.target.name]: event.target.value });
    }
    setErrors(validation({ ...input, [event.target.name]: event.target.value }));
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      const base64Data = reader.result.split(",")[1]; // Extraer solo los datos codificados
      setInput({ ...input, image: base64Data });
    };
    reader.readAsDataURL(file);
  };

  // const handleSelect = (event) => {
  //   setInput({
  //     ...input,
  //     typeDiets: [...input.typeDiets, event.target.value]
  //   })
  // };

  const handleCheckBox = (event) => {
    const selectedDiet = event.target.value;
    const updatedDiets = [...input.typeDiets];
  
    if (event.target.checked) {
      updatedDiets.push(selectedDiet);
    } else {
      const index = updatedDiets.indexOf(selectedDiet);
      if (index !== -1) {
        updatedDiets.splice(index, 1);
      }
    }
  
    setInput({ ...input, typeDiets: updatedDiets });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formErrors = validation(input);
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
  
    const recipeData = {
      name: input.name,
      summary: input.summary,
      healthScore: input.healthScore,
      stepByStep: input.stepByStep,
      image: input.image,
      diets: input.typeDiets,
    };
  
    dispatch(postRecipes(recipeData));
  
    alert("Recipe Created Successfully");
    setInput({
      name: "",
      summary: "",
      healthScore: "",
      stepByStep: [{ step: "" }],
      image: "",
      typeDiets: [],
    });
    history.push("/home");
  };

  useEffect(() => {
    dispatch(getTypeDiets());
  }, [dispatch]);

  return(
    <div className={style.containerTotal}>
      <Link to= "/home"><button className={style.buttonBack}><BsArrowLeftCircle/> BACK</button></Link>
      <h1 className={style.titulo}>add your own recipe </h1>
      <form onSubmit={handleSubmit} className={style.formContainer} name="form">
        <div>
          <label className={style.titles}>Recipe Name</label> 
          <input type="text" value={input.name} name="name" onChange={handleChange} />
          {errors.name && <p className={style.errors}>{errors.name}</p>}
        </div>
        
        <div>
        <label className={style.titles}>Summary:</label>
        <input type="text" name="summary" value={input.summary} autoComplete="off" maxlenght="800" onChange={handleChange} />
        </div>
        
        <div>
          <label className={style.titles} >Image</label>
          <input type="file" accept="image/*" onChange={handleFileChange} />
          {errors.image && ( <p className={style.errors}>{errors.image}</p>
        )}
        </div>
         
        <div>
        <label className={style.titles}>Health Score: </label>
        <input type="range" min="1" max="100" name="healthScore" value={input.healthScore} onChange={handleChange} />
        <output id="rangevalue">{input.healthScore}</output>
        {errors.healthScore && <p className={style.errors}>{errors.healthScore}</p>}
      </div>

        <div>
        <label className={style.titles}>Step By Step:</label>
        <textarea type="text" name="analyzedInstructions" value={input.analyzedInstructions} maxLength="800" onChange={handleChange} />
      </div>


        {/* <div>
          <label>Select Diet Types</label>
          <select onChange={handleSelect} value={input.typeDiets}>
            {typeDiets?.map((diet) => {
              return <option key={diet} value={diet}>{diet}</option>;
            })}
            </select>
        </div>

        <div>
          <label>Selected Diet Types:</label>
          <div>
            {input.typeDiets.map((diet) => (
              <span key={diet}>{diet}</span>
            ))}
          </div>
        </div> */}

        {/* <div>
          <label className={style.title}>Select Diet Types: </label>
          {typeDiets.map((diet) => (
            <label className={style.checkbox}>
              <input onChange={handleCheckBox} name="diet" type="checkbox" value={diet.name} />
              {diet.name}
            </label>
          ))}
          {errors.typeDiets && <p className={style.errors}>{errors.typeDiets}</p>}
          </div> */}
        <div>
  <label className={style.title}>Select Diet Types: </label>
  {typeDiets.map((diet) => (
    <label className={style.checkbox} key={diet}>
      <input
        onChange={handleCheckBox}
        name="diet"
        type="checkbox"
        value={diet}
        checked={input.typeDiets.includes(diet)}
      />
      {diet}
    </label>
  ))}
  {errors.typeDiets && <p className={style.errors}>{errors.typeDiets}</p>}
</div>

    <div>
      <button type="submit" className={style.submitButton}>
        CREATE
      </button>
      {errors.form && <p className={style.errors}>{errors.form}</p>}
    </div>
  </form>
</div>
);
};

export default Form; 
