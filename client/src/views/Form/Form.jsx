import { useState } from "react";
import axios from "axios";

const Form = ( ) => {

    const [ form, setForm ] = useState({
        title: "",
        summary: "",
        spoonacularScore: "",
        HealthScore: "",
        analyzedInstructions: "",
        typeDiets: []
    });

    // const [ errors, setErrors ] = useState({
    //     title: "",
    //     summary: "",
    //     spoonacularScore: "",
    //     HealthScore: "",
    //     analyzedInstructions: "",
    //     typeDiets: []
        
    // })

    const changeHandler = (event) => {
        const property = event.target.name;
        const value = event.target.value;

        setForm({...form, [property]: value})
    }

    // const validate = (form) => {
        
    // }

    const submitHandler = (event) => {
        event.preventDefault()
        axios.post("http://localhost:3001/recipes", form)
        .then(res =>alert(res)) // mejorar esto
        .catch(err=>alert(err)) // mejorar esto
    }      
    
    return(
        <form onsSubmit={submitHandler}>
            <div> 
                <label>Recipe Name: </label>
                <input type='text' name='title' value={form.title} onChange={changeHandler}></input>
            </div>

            <div>
                <label>Summary: </label>
                <input type='text'name='summary' value={form.summary} onChange={changeHandler}></input>
            </div>

            <div>
                <label>Spoonacular Score: </label>
                <input type='text' name='spoonacularScore' value={form.spoonacularScore} onChange={changeHandler}></input>
            </div>

            <div>
                <label>Health Score: </label>
                <input type='text' name='healthScore' value={form.healthScore} onChange={changeHandler}></input>
            </div>

            <div>
                <label>Step By Step: </label>
                <input type='text' name='analyzedInstructions' value={form.analyzedInstructions} onChange={changeHandler}></input>
            </div>      

            <div>
                <label>Diet Type: </label>
                <input type='text' name='typeDiets' value={form.typeDiets} onChange={changeHandler}></input>
            </div>
            
            <button type="submit" name="submit">SUBMIT</button>
        </form>
    )
}

export default Form; 