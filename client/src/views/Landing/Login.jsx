import { useState } from "react"
import style from "./Login.module.css";
import Validation from "./Validation";

const Login = ({login}) => {
    const [ userData, setUserData ] = useState({
        email:"",
        password:"",   
    })
    const [ errors, setErrors ] = useState({
        email:"",
        password:"",
    })
    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name] : event.target.value
        })
        setErrors(Validation ({
            ...userData,
            [event.target.name] : event.target.value
        }))
    }
    // const handleSubmit = (event) => {
    //     event.preventDefault()
    //     login(userData)
    // }
    return (
        <div className={style.loginContainer}>
            
            <form className={style.formContainer} >
                

                <div className={style.loginSection}>                    
                <div className={style.emailContainer}>
                   <label htmlFor="email" className={style.emailLabel}>Email</label>
                   <br/>
                   <input name="email" type="email" placeholder="Enter Your Email" value={userData.email} onChange={handleChange} />
                </div>
                <div className={style.passwordContainer}>
                   <label htmlFor="password" className={style.passwordLabel}>Password </label>
                   <br/>
                   <input name="password" type="password" placeholder="Enter Your Password" value={userData.password} onChange={handleChange} />
                </div>
                <div className={style.buttonContainer}>
                    <button className={style.buttonlogin}>LOG IN</button>
                    <button className={style.buttonsignup}>SIGN UP</button>
                </div>
                
                <div className={style.member}>
                    <p>Not a Member yet? Sign Up</p>
                </div>
                </div>

                <div>
                    {errors.email && <span className={style.Error}>{errors.email}</span>}
                    <br/>
                    {errors.password && (<span clasName={style.Error}>{errors.password}</span>)}
                </div>
                
            </form>
                <div className={style.binvenidaContainer}>
                    <h3>Welcome Back</h3>
                    <p>Please login to continue</p>      
                </div>
        </div>
    )
}

export default Login;