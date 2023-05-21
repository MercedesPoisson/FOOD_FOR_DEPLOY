import { Link } from "react-router-dom";
import style from "./NavBar.module.css";
import { getRecipesByName } from "../../redux/actions";
import React, { useState } from "react";
import { connect } from "react-redux";

const NavBar = ({getRecipesByName}) => {
  const [ searchValue, setSearchValue ] = useState("");

  const onSearch = (name) => {
    getRecipesByName(name);
  };

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  }

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    onSearch(searchValue);
    setSearchValue("");
  }
  
  return (
    <nav className={style.navContainer}>
      <div className={style.navBar}>
        <div className={style.container}>
          <div className={style.navElements}>
            <div className={`${style.section} ${style.rightSection}`}>
              <ul className={style.navLinks}>
                <li><a href="/home" className={style.navLink}>HOME</a></li>
                <li><Link to="/create" className={style.navLink}>CREATE</Link></li>
                {/* <li><Link to="/contact" className={style.navLink}>CONTACT US</Link></li> */}
                <li><Link to="/" className={style.navLink} >LOGOUT</Link></li>
              </ul>
            </div>
            
            {/* <div className={`${style.section} ${style.middleSection}`}>
              <Filters />
            </div> */}
            
            <div className={`${style.section} ${style.leftSection}`}>
              <div className={style.searchContainer}>
                <form onSubmit={handleSearchSubmit}>
                  <input type="text" placeholder="Search Recipe" className={style.searchInput} value={searchValue} onChange={handleSearchChange}/>
                  {/* <button className={style.searchButton} type="submit">SEARCH</button> */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
  // ------ uso connect para acceder a la accion como una prop y llamarla en la funcion onSearch. Facilita la ionteraccion con el store y la ejecucion de la acciones
  // es como usar useDispatch pero cuando uso este hook en mi componente se me buguea
  export default connect(null, { getRecipesByName })(NavBar);