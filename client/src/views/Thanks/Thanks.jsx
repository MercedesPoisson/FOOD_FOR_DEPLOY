import thanks from "./thanks.jpg";
import style from "./Thanks.module.css";
import { Link } from "react-router-dom";
const Thanks = () => {

return (
    <div className={style.errorContainer}>
            <img src={thanks} className={style.thanskImage} />
            <br/>
            <div className={style.button}>
          <Link to="/create" className={style.linkButton}>
            <span>CREATE</span>
          </Link>
          <Link to="/home" className={style.linkButton}>
            <span>BACK HOME</span>
          </Link>
        </div>
        


        </div>
)
}




export default Thanks;