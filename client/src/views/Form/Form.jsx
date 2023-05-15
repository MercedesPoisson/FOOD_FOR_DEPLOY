import React, { useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTypeDiets, postRecipes } from "../../redux/actions";
import style from "./Form.module.css";

const Form = () => {

  const dispatch = useDispatch();
  const history = useHistory();
  const diets = useSelector((state) => state.diets)

  const [ input, setInput ] = useState({
    name: "",
    summary: "",
    healthScore: "",
    analyzedInstructions: "",
    image: "",
    typeDiets: [],
  })

  useEffect(() => {
    dispatch(getTypeDiets());
  }, [dispatch]);

  const handleChange = (event) => {
    setInput({
      ...input,
      [event.target.name] : event.target.value
    })
  } 

  const handleCheck = (event) => {
    if(event.target.checked){
      setInput({
        ...input,
        status: event.target.value
      })
    } 
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(postRecipes(input))
    alert("Recipe Created Successfully")
    setInput({
      name: "",
      summary: "",
      healthScore: "",
      analyzedInstructions: "",
      image: "",
      typeDiets: [],

    })
    history.push("/home")
  }

  return(
    <div>
      <Link to= "/home"><button>BACK</button></Link>
      <h1>Create Your Recipe</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Recipe Name</label> 
          <input type="text" value={input.name} name="name" onChange={handleChange} />
        </div>
        <div>
//        <label>Summary:</label>
//        <input type="text" name="summary" value={input.summary} onChange={handleChange} />
        </div>

        <div>
          <label>Health Score:</label>
          <input type="text" name="healthScore" value={input.healthScore} onChange={handleChange} />
        </div>

        <div>
          <label>Step By Step:</label>
          <input type="text" name="analyzedInstructions" value={input.analyzedInstructions} onChange={handleChange} />
        </div>

        <div>
          <label>Image</label>
          <input type="text" name="image" value={input.image} onChange={handleChange} />
        </div>

        <div className={style.checkboxContainer}>
          <div>
            <input type="checkbox" name="typeDiets" value="gluten free" onChange={handleCheck} />
            <label>Gluten Free</label>
          </div>

          <div>
            <input type="checkbox" name="typeDiets" value="dairy free" onChange={handleCheck}/>
            <label>Dairy Free</label>
          </div>

          <div>
            <input type="checkbox" name="typeDiets" value="lacto ovo vegetarian"onChange={handleCheck} />
            <label>Lacto Ovo Vegetarian</label>
          </div>

          <div>
                <input type="checkbox" name="typeDiets" value="vegan" onChange={handleCheck}/>
                <label>Vegan</label>
            </div>
            <div>
                <input type="checkbox" name="typeDiets" value="paleolithic" onChange={handleCheck}/>
                <label>Paleolithic</label>
            </div>
            <div>
                <input type="checkbox" name="typeDiets" value="primal" onChange={handleCheck}/>
                <label>Primal</label>
            </div>
            <div>
                <input type="checkbox" name="typeDiets" value="whole 30" onChange={handleCheck} />
                <label>Whole 30</label>
            </div>
            <div>
                <input
                type="checkbox" name="typeDiets" value="pescatarian" onChange={handleCheck}/>
                <label>Pescatarian</label>
            </div>
            <div>
                <input type="checkbox" name="typeDiets" value="ketogenic" onChange={handleCheck}/>
                <label>Ketogenic</label>
            </div>
            <div>
                <input type="checkbox" name="typeDiets" value="fodmap friendly" onChange={handleCheck}/>
                <label>FODMAP Friendly</label>
            </div>
            </div>

        <button type="submit" className={style.submitButton}>
          CREATE
        </button>
      </form>
    </div>
  )
}

export default Form; 

//   const history = useHistory(); // tuve que usar este por que en la version que tengo de react-router-dom no esta useNavigate
//   const [form, setForm] = useState({
//     name: "",
//     summary: "",
//     healthScore: "",
//     analyzedInstructions: "",
//     image: "",
//     typeDiets: [],
//   });

//   const [errors, setErrors] = useState({
//     name: "",
//     summary: "",
//     healthScore: "",
//     analyzedInstructions: "",
//     image: "",
//     typeDiets: [],
//   });

//   const changeHandler = (event) => {
//     const property = event.target.name;
//     const value = event.target.value;

//     setForm({ ...form, [property]: value });
//   };

//   const submitHandler = (event) => {
//     event.preventDefault();

//     // Validación de campos
//     let formIsValid = true;
//     const errorsCopy = { ...errors };

//     // Verificar si los campos requeridos están vacíos
//     if (form.title.trim() === "") {
//       errorsCopy.title = "Title is required";
//       formIsValid = false;
//     } else {
//       errorsCopy.title = "";
//     }

//     if (form.summary.trim() === "") {
//       errorsCopy.summary = "Summary is required";
//       formIsValid = false;
//     } else {
//       errorsCopy.summary = "";
//     }

//     if (form.spoonacularScore.trim() === "") {
//       errorsCopy.spoonacularScore = "Spoonacular Score is required";
//       formIsValid = false;
//     } else {
//       errorsCopy.spoonacularScore = "";
//     }

//     if (form.healthScore.trim() === "") {
//       errorsCopy.healthScore = "Health Score is required";
//       formIsValid = false;
//     } else {
//       errorsCopy.healthScore = "";
//     }

//     // Si hay errores, actualiza el estado y detén el envío del formulario
//     if (!formIsValid) {
//       setErrors(errorsCopy);
//       return;
//     }

//     axios
//       .post("http://localhost:3001/recipes", form)
//       .then((res) => {
//         // Redireccionar después de enviar el formulario
//         history("/recipes"); // Cambia "/recipes" por la ruta correcta
//       })
//       .catch((err) => {
//         console.error(err);
//       });
//   };

//   return (

    
//     <div className={style.containerForm}>
//       <form onSubmit={submitHandler} className={style.formContainer}>
        
//         <div>
//           <label>Recipe Name:</label>
//           <input
//             type="text"
//             name="title"
//             value={form.title}
//             onChange={changeHandler}
//           />
//         </div>

//         <div>
//           <label>Summary:</label>
//           <input
//             type="text"
//             name="summary"
//             value={form.summary}
//             onChange={changeHandler}
//           />
//         </div>

//         <div>
//           <label>Spoonacular Score:</label>
//           <input
//             type="text"
//             name="spoonacularScore"
//             value={form.spoonacularScore}
//             onChange={changeHandler}
//           />
//         </div>

//         <div>
//           <label>Health Score:</label>
//           <input
//             type="text"
//             name="healthScore"
//             value={form.healthScore}
//             onChange={changeHandler}
//           />
//         </div>

//         <div>
//           <label>Step By Step:</label>
//           <input
//             type="text"
//             name="analyzedInstructions"
//             value={form.analyzedInstructions}
//             onChange={changeHandler}
//           />
//         </div>

//         <div className={style.checkboxContainer}>
//           <div>
//             <input
//               type="checkbox"
//               name="typeDiets"
//               value="gluten free"
//               onChange={changeHandler}
//             />
//             <label>Gluten Free</label>
//           </div>
//           <div>
//             <input
//               type="checkbox"
//               name="typeDiets"
//               value="dairy free"
//               onChange={changeHandler}
//             />
//             <label>Dairy Free</label>
//           </div>
//           <div>
//             <input
//               type="checkbox"
//               name="typeDiets"
//               value="lacto ovo vegetarian"
//               onChange={changeHandler}
//             />
//             <label>Lacto Ovo Vegetarian</label>
//           </div>
//           <div>
//                 <input type="checkbox" name="typeDiets" value="vegan" onChange={changeHandler} />
//                 <label>Vegan</label>
//             </div>
//             <div>
//                 <input type="checkbox" name="typeDiets" value="paleolithic" onChange={changeHandler} />
//                 <label>Paleolithic</label>
//             </div>
//             <div>
//                 <input type="checkbox" name="typeDiets" value="primal" onChange={changeHandler} />
//                 <label>Primal</label>
//             </div>
//             <div>
//                 <input type="checkbox" name="typeDiets" value="whole 30" onChange={changeHandler} />
//                 <label>Whole 30</label>
//             </div>
//             <div>
//                 <input
//                 type="checkbox" name="typeDiets" value="pescatarian" onChange={changeHandler} />
//                 <label>Pescatarian</label>
//             </div>
//             <div>
//                 <input type="checkbox" name="typeDiets" value="ketogenic" onChange={changeHandler} />
//                 <label>Ketogenic</label>
//             </div>
//             <div>
//                 <input type="checkbox" name="typeDiets" value="fodmap friendly" onChange={changeHandler} />
//                 <label>FODMAP Friendly</label>
//             </div>
//             </div>
        

//         <button type="submit" className={style.submitButton}>
//           CREATE
//         </button>
//       </form>
//     </div>
//   );