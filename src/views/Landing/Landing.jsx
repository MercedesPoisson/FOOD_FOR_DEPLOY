import React from "react";
import style from "./Landing.module.css";
import Foto1 from "./fila-1-columna-1.jpg";
import Foto2 from "./fila-2-columna-1.jpg";
import Foto3 from "./fila-3-columna-1.jpg";
import { Link } from 'react-router-dom';

const Landing = () => {
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
        </div>
      </div>

      <div className={`${style.loginFormContainer} ${style.section}`}>
        <form><label>Hola soy el formulario</label></form>
      </div>
    </div>
  );
};

export default Landing;