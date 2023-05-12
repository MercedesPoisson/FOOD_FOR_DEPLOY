import React from "react";
import style from "./Landing.module.css";
import FotoBollos from "./FotoBollos.jpg";
import { Link } from 'react-router-dom';


const Landing = () => {
  return (
    <div className={style.container}>
      <div className={style.imageContainer}>
        <img src={FotoBollos} alt="Landing" className={style.picture} />
      </div>
      <div className={style.contentContainer}>
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
    </div>
  );
};

export default Landing;