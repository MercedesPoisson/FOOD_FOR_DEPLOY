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

        <div className={style.containerPage} id="container">
            <div className={style.loginContainer} id="loginContainer">
                <h1 className={style.title}>Your Account</h1>
                <form action="">
                    <div className={style.inputLineContainer}>
                        <span className={style.nameInput}>Username</span>
                        <input type="text" name="username" id="" className={style.inputLine}></input>
                    </div>
                    <div className={style.inputLineContainer}>
                        <span className={style.nameInput}>Password</span>
                        <input type="text" name="password" id="" className={style.inputLine}></input>
                    </div>
                    <input type="button" value="login" className={style.buttonLogin}></input>
                    <input type="button" value="login" className={style.buttonSecond}></input>
                </form>
                </div>
                
        </div>
    )
}

export default Login;