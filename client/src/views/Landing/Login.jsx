import { useState } from "react";
import style from "./Login.module.css";
import Validation from "./Validation";
import { useHistory } from 'react-router-dom';

const Login = ({ login }) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const history = useHistory();

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
    setErrors(
      Validation({
        ...userData,
        [event.target.name]: event.target.value,
      })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
    history.push('/home'); // Redireccionar a /home después del inicio de sesión
  };

  return (
    <div className={style.containerPage} id="container">
      <div className={style.loginContainer} id="loginContainer">
        <h1 className={style.title}>Your Account</h1>
        <form onSubmit={handleSubmit}>
          <div className={style.inputLineContainer}>
            <span className={style.nameInput}>Username</span>
            <input
              type="text"
              name="email"
              id="emailInput"
              className={style.inputLine}
              onChange={handleChange}
            ></input>
          </div>
          <div className={style.inputLineContainer}>
            <span className={style.nameInput}>Password</span>
            <input
              type="password"
              name="password"
              id="passwordInput"
              className={style.inputLine}
              onChange={handleChange}
            ></input>
          </div>
          <input type="submit" value="login" className={style.buttonLogin} />
          <input
            type="button"
            value="login"
            className={style.buttonSecond}
          />
        </form>
      </div>
    </div>
  );
};

export default Login;