import { Link } from "react-router-dom";
import style from "./Error.module.css";

const Error = () => {



    return (
        <div className={style.errorContainer}>
            <h1>No recipes Found with that specific name</h1>
            <h3>Create your own</h3>
            <Link to="/create">
              <button className={style.buttonBack}>BACK</button>
            </Link>
            <h3>or keep looking</h3>
            <Link to="/home">
              <button className={style.buttonBack}>BACK</button>
            </Link>


        </div>
    )
}



export default Error;