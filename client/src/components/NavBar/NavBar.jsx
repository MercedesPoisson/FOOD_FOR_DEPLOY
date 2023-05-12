import { Link } from "react-router-dom";
import style from "./NavBar.module.css";

const NavBar = () => {

    return (
      <nav className={style.navContainer}>
        <div className={style.navBar}>
          <div className={style.container}>
            <div className={style.navElements}>
              <div className={style.leftSection}>
                <div className={style.searchContainer}>
                  <input type="text" placeholder="Search" className={style.searchInput} />
                  <button className={style.searchButton}>SEARCH</button>
                </div>
              </div>
              <div className={style.rightSection}>
                <ul className={style.navLinks}>
                  <li><Link to="/home">HOME</Link></li>
                  <li><Link to="/create">CREATE</Link></li>
                  <li><Link to="/">LOGOUT</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  };
  
  export default NavBar;