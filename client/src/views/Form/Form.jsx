import React, { useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTypeDiets, postRecipes, postDiets } from "../../redux/actions";
import style from "./Form.module.css";
import validation from "./Validation";
import { BsArrowLeftCircle } from "react-icons/bs";
import Preview from "./Preview";

const Form = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const typeDiets = useSelector((state) => state.typeDiets);

  const [input, setInput] = useState({
    name: "",
    summary: "",
    healthScore: "",
    analyzedInstructions: [{ step: "" }],
    image: "",
    typeDiets: [],
  });

  const [errors, setErrors] = useState({
    name: "",
    summary: "",
    healthScore: "",
    analyzedInstructions: "",
    image: "",
    typeDiets: [],
    form: "",
  });

  const [showPreview, setShowPreview] = useState(false);
  const [ previewData, setPreviewData ] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: validation({ ...input, [name]: value })[name],
    }));
    setPreviewData((prevPreviewData) => ({
      ...prevPreviewData,
      [name]: value,
    }));
  };

  const handleSummaryChange = (event) => {
    setInput({ ...input, summary: event.target.value });
  };

  const handleCheckBox = (event) => {
    if (event.target.checked) {
      setInput({...input, typeDiets: [...input.typeDiets, event.target.value]})
    } else {
      setInput({
        ...input, typeDiets: [...input.typeDiets] 
      })
      };
    }

  const handleStepChange = (event) => {
    const steps = event.target.value.split("\n");
    setInput({
      ...input,
      analyzedInstructions: steps.map((step) => ({ step })),
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formErrors = validation(input);
    if (Object.keys(formErrors).length > 0) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        ...formErrors,
        form: "Please complete all"
      }));
    } else {
      const updatedInput = {
        name: input.name,
        summary: input.summary,
        healthScore: input.healthScore,
        analyzedInstructions: input.analyzedInstructions.map((stepObj) => stepObj.step),
        image: input.image,
        typeDiets: input.typeDiets,
      };

      console.log("Datos de la receta:", updatedInput);

      dispatch(
        postRecipes(
          updatedInput.name,
          updatedInput.summary,
          updatedInput.healthScore,
          updatedInput.analyzedInstructions,
          updatedInput.image,
          updatedInput.typeDiets
        )
      );

      setInput({
        name: "",
        summary: "",
        healthScore: "",
        analyzedInstructions: [{ step: "" }],
        image: "",
        typeDiets: [],
      });

      history.push("/home");
    }
  };

  useEffect(() => {
    dispatch(getTypeDiets());
  }, [dispatch]);
  
  const handlePreview = () => {
    setShowPreview(true);
  }

  return (
    <div className={style.containerTotal}>
    <Link to="/home">
      <button className={style.buttonBack}>
        <BsArrowLeftCircle /> BACK
      </button>
    </Link>
    <h1 className={style.titulo}>add your own recipe </h1>
    <div className={style.formPreviewContainer}>
      <div className={style.formContainer}>
        <form onSubmit={handleSubmit} name="form">
          <div className={style.inputLineContainer}>
            <label className={style.titles}>Recipe Name</label>
            <input
              type="text"
              value={input.name}
              name="name"
              onChange={handleChange}
              className={style.inputLine}
            />
            {errors.name && <p className={style.errors}>{errors.name}</p>}
          </div>
  
          <div className={style.inputLineContainer}>
            <label className={style.titles}>Summary:</label>
            <input
              type="text"
              name="summary"
              value={input.summary}
              autoComplete="off"
              maxLength="800"
              onChange={handleSummaryChange}
              className={style.inputLine}
            />
            {errors.summary && <p className={style.errors}>{errors.summary}</p>}
          </div>
  
          <div className={style.inputLineContainer}>
            <label className={style.titles}>Image</label>
            <input
              type="url"
              name="image"
              value={input.image}
              onChange={handleChange}
              className={style.inputLine}
            />
            {errors.image && (
              <p className={style.errors}>{errors.image}</p>
            )}
          </div>
  
          <div className={style.inputLineContainer}>
            <label className={style.titles}>Health Score: </label>
            <input
              type="range"
              min="1"
              max="100"
              name="healthScore"
              value={input.healthScore}
              onChange={handleChange}
            />
            {" "}
            <output id="rangevalue">{input.healthScore}</output>
  
            {errors.healthScore && (
              <p className={style.errors}>{errors.healthScore}</p>
            )}
          </div>
  
          <div className={style.inputLineContainer}>
            <label className={style.titles}>Step By Step:</label>
            <textarea
              type="text"
              name="stepByStep"
              value={input.analyzedInstructions.map((stepObj) => stepObj.step).join("\n")}
              maxLength="1200"
              onChange={handleStepChange}
              className={style.stepInput}
            />
          </div>
  
          <div className={style.inputLineContainer}>
            <label className={style.title}>Select Diet Types: </label>
            {typeDiets.map((diet) => (
              <label className={style.checkbox} key={diet}>
                <input
                  onChange={handleCheckBox}
                  name="typeDiets"
                  type="checkbox"
                  value={diet}
                  checked={input.typeDiets.includes(diet)}
                />
                {diet}
              </label>
            ))}
            {errors.typeDiets && (
              <p className={style.errors}>{errors.typeDiets}</p>
            )}
          </div>
          <div className={style.buttonContainer}>
          <button
  type="submit"
  className={style.submitButton}
  disabled={Object.keys(errors).some((key) => errors[key]) || !input.image}
>
  CREATE
</button>
          {errors.form && <p className={style.errors}>{errors.form}</p>}
          <button
            type="button"
            className={style.previewButton}
            onClick={handlePreview}
          >
            {showPreview ? "HIDE PREVIEW" : "PREVIEW"}
          </button>
        </div>
          </form>
        
      </div>
      <div className={style.previewContainer}>
  {showPreview && (
    <Preview
      name={input.name}
      summary={input.summary}
      healthScore={input.healthScore}
      analyzedInstructions={input.analyzedInstructions}
      typeDiets={input.typeDiets}
      image={input.image}
    />
  )}
</div>
    </div>
  </div>
);
}

  export default Form; 




























// import React, { useEffect, useState } from "react";
// import { useHistory, Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { getTypeDiets, postRecipes } from "../../redux/actions";
// import style from "./Form.module.css";
// import validation from "./Validation";
// import { BsArrowLeftCircle } from "react-icons/bs";

// const Form = () => {

//   const dispatch = useDispatch();
//   const history = useHistory();
//   const typeDiets = useSelector((state) => state.typeDiets)

//   //----ESTADO LOCAL DEL FORM ----
//   const [ input, setInput ] = useState({
//     name: "",
//     summary: "",
//     healthScore: "",
//     stepByStep: "",
//     image: "",
//     typeDiets: [],
//   })

//   //-----ESTADO DE LOS ERRORS----
//   const [ errors, setErrors ] = useState({
//     name: "",
//     summary: "",
//     healthScore: "",
//     stepByStep: "",
//     image: "",
//     typeDiets: [],
//   })

//   const [ selectedDiets, setSelectedDiets ] = useState([])

//   const handleChange = (event) => {
//     if (event.target.name === "image") {
//       setInput({ ...input, image: event.target.value });
//     } else {
//       setInput({ ...input, [event.target.name]: event.target.value });
//     }
//     setErrors(validation({ ...input, [event.target.name]: event.target.value }));
//   };

//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     const reader = new FileReader();
//     reader.onload = () => {
//       // const base64Data = reader.result.split(",")[1]; // Extraer solo los datos codificados
//       setInput({ ...input, image: file });
//     };
//     reader.readAsDataURL(file);
//   };
// // ----Si selecciono el checkbox pusheo ese tipo de dieta al array para guardar en la DB
//   const handleCheckBox = (event) => {
//     const selectedDiet = event.target.value;
//     const isChecked = event.currentTarget.checked;
//     let updatedDiets;
  
//     if (isChecked) {
//       updatedDiets = [...input.typeDiets, selectedDiet];
//     } else {
//       updatedDiets = input.typeDiets.filter((diet) => diet !== selectedDiet);
//       }
//       setInput({...input, typeDiets: updatedDiets})
//     };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const formErrors = validation(input);
//     if (Object.keys(formErrors).length > 0) {
//       setErrors(formErrors);
//       return;
//     }
  
//     const recipeData = {
//       name: input.name,
//       summary: input.summary,
//       healthScore: input.healthScore,
//       stepByStep: input.stepByStep,
//       image: input.image,
//       diets: selectedDiets,
//     };
  
//     dispatch(postRecipes(recipeData));
  
//     alert("Recipe Created Successfully");
//     setInput({
//       name: "",
//       summary: "",
//       healthScore: "",
//       stepByStep: [{ step: "" }],
//       image: "",
//       typeDiets: [],
//     });
//     setSelectedDiets([]);
//     history.push("/home");
//   };

//   useEffect(() => {
//     dispatch(getTypeDiets());
//   }, [dispatch]);

//   return(
//     <div className={style.containerTotal}>
//       <Link to= "/home"><button className={style.buttonBack}><BsArrowLeftCircle/> BACK</button></Link>
//       <h1 className={style.titulo}>add your own recipe </h1>
//       <form onSubmit={handleSubmit} className={style.formContainer} name="form">
//         <div>
//           <label className={style.titles}>Recipe Name</label> 
//           <input type="text" value={input.name} name="name" onChange={handleChange} />
//           {errors.name && (<p className={style.errors}>{errors.name}</p>)}
//         </div>
        
//         <div>
//         <label className={style.titles}>Summary:</label>
//         <input type="text" name="summary" value={input.summary} autoComplete="off" maxlenght="800" onChange={handleChange} />
//         {errors.summary && (<p className={style.errors}>{errors.summary}</p>)}
//         </div>
        
//         <div>
//           <label className={style.titles} >Image</label>
//           <input type="file" accept="image/*" name="image" onChange={handleFileChange} />
//           {errors.image && (<p className={style.errors}>{errors.image}</p>)}
//         </div>
         
//         <div>
//         <label className={style.titles}>Health Score: </label>
//         <input type="range" min="1" max="100" name="healthScore" value={input.healthScore} onChange={handleChange} />
//         <output id="rangevalue">{input.healthScore}</output>
//         {errors.healthScore && (<p className={style.errors}>{errors.healthScore}</p>)}
//       </div>

//         <div>
//         <label className={style.titles}>Step By Step:</label>
//         <textarea type="text" name="analyzedInstructions" value={input.analyzedInstructions} maxLength="800" onChange={handleChange} />
//       </div>

//         <div>
//         <label className={style.title}>Select Diet Types: </label>
//          {typeDiets.map((diet) => (
//           <label className={style.checkbox} key={diet}>
//              <input onChange={handleCheckBox} name="typeDiets" type="checkbox" value={diet} checked={input.typeDiets.includes(diet)} />
//              {diet} </label> ))} 
//              {errors.typeDiets && (<p className={style.errors}>{errors.typeDiets}</p>)}
//              </div>
//              <div>
//              {/* <button type="text" className={style.previewButton}> PREVIEW </button>  */}
//               <button type="submit" className={style.submitButton}> CREATE </button> 
//               {errors.form && <p className={style.errors}>{errors.form}</p>} 
//               </div>
//               </form>
//               </div>
//               );
//             };
          
