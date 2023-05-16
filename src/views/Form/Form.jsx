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
    analyzedInstructions: "",
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
    setInput({ ...input, [event.target.name] : event.target.value})
    setErrors(
      validation({ ...input, [ event.target.name] : event.target.value})
    )
  };

  // const handleSelect = (event) => {
  //   setInput({
  //     ...input,
  //     typeDiets: [...input.typeDiets, event.target.value]
  //   })
  // };

  const handleCheckBox = (event) => {
    if (event.target.checked) {
      setInput({
        ...input,
        typeDiets: [...input.typeDiets, event.target.value],
      });
    } else {
      setInput({
        ...input,
        typeDiets: [...input.typeDiets],
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formErrors = validation(input);
  if (Object.keys(formErrors).length > 0) {
    setErrors(formErrors);
    return;
  }
    // console.log(input)
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
    dispatch(postRecipes(
      input.name,
      input.summary,
      input.healthScore,
      [input.analyzedInstructions],
      input.image,
      input.typeDiets,
    ))
    history.push("/home")
  }

  useEffect(() => {
    dispatch(getTypeDiets());
  }, [dispatch]);

  return(
    <div>
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
          <input type="url" name="image" value={input.image} className={style.loadedImage} onChange={handleChange} />
          {errors.image && ( <p className={style.errors}>{errors.image}</p>
        )}
        </div>
         
        <div>
          <label className={style.titles}>Health Score: </label>
          <input type="range" min="1" max="100" name="healthScore" value={input.healthScore} onChange={handleChange} />
          {" "}
          <output id="rangevalue">{input.healthScore}</output>
          
          {errors.healthScore && (
          <p className={style.errors}>{errors.healthScore}</p>
        )}
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
  <label className={style.checkbox}>
    <input
      onChange={handleCheckBox}
      name="diet"
      type="checkbox"
      value="gluten free"
    />
    gluten free
  </label>
  <label className={style.checkbox}>
    <input
      onChange={handleCheckBox}
      name="diet"
      type="checkbox"
      value="dairy free"
    />
    dairy free
  </label>
  <label className={style.checkbox}>
    <input
      onChange={handleCheckBox}
      name="diet"
      type="checkbox"
      value="lacto ovo vegetarian"
    />
    lacto ovo vegetarian
  </label>
  <label className={style.checkbox}>
    <input
      onChange={handleCheckBox}
      name="diet"
      type="checkbox"
      value="vegan"
    />
    vegan
  </label>
  <label className={style.checkbox}>
    <input
      onChange={handleCheckBox}
      name="diet"
      type="checkbox"
      value="paleolithic"
    />
    paleolithic
  </label>
  <label className={style.checkbox}>
    <input
      onChange={handleCheckBox}
      name="diet"
      type="checkbox"
      value="primal"
    />
    primal
  </label>
  <label className={style.checkbox}>
    <input
      onChange={handleCheckBox}
      name="diet"
      type="checkbox"
      value="whole 30"
    />
    whole 30
  </label>
  <label className={style.checkbox}>
    <input
      onChange={handleCheckBox}
      name="diet"
      type="checkbox"
      value="pescatarian"
    />
    pescatarian
  </label>
  <label className={style.checkbox}>
    <input
      onChange={handleCheckBox}
      name="diet"
      type="checkbox"
      value="ketogenic"
    />
    ketogenic
  </label>
  <label className={style.checkbox}>
    <input
      onChange={handleCheckBox}
      name="diet"
      type="checkbox"
      value="fodmap friendly"
    />
    fodmap friendly
  </label>
  {errors.typeDiets && <p className={style.errors}>{errors.typeDiets}</p>}
</div>


        <div>
          <button type="submit" className={style.submitButton} >
          CREATE
        </button>
        {errors.form && <p className={style.errors}>{errors.form}</p>}
          </div>    
          
        
      </form>
    </div>
  )
}

export default Form; 
