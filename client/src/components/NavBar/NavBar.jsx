import { Link } from "react-router-dom";
import style from "./NavBar.module.css";

const NavBar = () => {
    return(
        <div classname={style.mainContainer}>
            <Link to="/Home">HOME</Link>
            <Link to="/create">CREATE</Link>

        </div>
    )
}
export default NavBar;