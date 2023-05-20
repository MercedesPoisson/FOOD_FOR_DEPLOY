// import React, { useState, useHistory, useEffect } from "react";
import style from "./Landing.module.css";
import Foto1 from "./Foto1.jpg";
import Foto2 from "./Foto2.jpg";
import Foto3 from "./Foto3.jpg";
import Login from "./Login";
// import axios from "axios";
import { Link } from 'react-router-dom';

const Landing = () => {
  // const URL = `http://localhost:3001/recipes/login/`;
  // const [ access, setAccess ] = useState(false)
  // const history = useHistory();

  // const login = async (userData) => {
  //   try {
  //     const { email, password } = userData;
  //     const { data } = await axios.get(`${URL}?email=${email}&password=${password}`);
  //     const { access } = data;
  //     setAccess(access);
  //     access && history.push("/home");
  //   } catch (error) {
  //     alert("Error on Login");
  //   }
  // };

  // useEffect(() => {
  //   !access && history("/")
  // }, [access, history])

  return (
    <div className={style.container}>
      <div className={`${style.firstContainer} ${style.section}`}>
        <div className={style.card}>
          <div className={style.foto}>
            <img src={Foto1} alt="Landing" className={style.picture} />
          </div>
          <div className={style.contentFoto}>
            <div className={style.content}>
              <h3>+100 RECIPES</h3>
              <h3>+10 DIET TYPES</h3>
            </div>
          </div>
        </div>
      </div>

      <div className={`${style.firstContainer} ${style.section}`}>
        <div className={style.card}>
          <div className={style.foto}>
            <img src={Foto2} alt="Landing" className={style.picture} />
          </div>
          <div className={style.contentFoto}>
            <div className={style.content}>
              <h3>SHARE YOUR RECIPE</h3>
            </div>
          </div>
        </div>
      </div>

      <div className={`${style.contentContainer} ${style.section}`}>
        <div className={style.textContainer}>
          <h1>
            <span className={style.forText}>for </span>
            <span className={style.foodieLoversText}>Foodie Lovers</span>
          </h1>
          <h3 className={style.experienceText}>the most tasty experience</h3>
        </div>
        <div className={style.button}>
          <Link to="/home" className={style.linkButton}>
            <span>BE MY GUEST</span>
          </Link>
<br/>
          {/* <div>
            <button className={style.loginButton}>LOGIN</button>
            </div>
            <div>
               <button className={style.registerButton}>REGISTER</button>
            </div> */}
                     
        </div>
        <div className={style.nav}>
          <input type="checkbox" />
          <span></span>
          <span></span>
          <div className={style.menu}>
      <li><a href="#">Login</a></li>
      <li><a href="#">Register</a></li>
      
    </div>
</div>


      </div>

      <div className={`${style.firstContainer} ${style.section}`}>
        <div className={style.card}>
          <div className={style.foto}>
            <img src={Foto3} alt="Landing" className={style.picture} />
          </div>
          <div className={style.contentFoto}>
            <div className={style.content}>
              <h3>FIND HEALTHY IDEAS</h3>
            </div>
          </div>
        </div>
      </div>

      <div className={`${style.loginFormContainer} ${style.section}`}>
        {/* <Login /> */}
      </div>
    </div>
  );
};


export default Landing;