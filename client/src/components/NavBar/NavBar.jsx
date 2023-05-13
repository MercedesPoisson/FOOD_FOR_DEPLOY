import { Link } from "react-router-dom";
import style from "./NavBar.module.css";
import { getRecipesByName } from "../../redux/actions";
import React, { useState } from "react";
import { connect } from "react-redux";
// import Filters from "../Filters/Filters";

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
                <li><Link to="/home">HOME</Link></li>
                <li><Link to="/create">CREATE</Link></li>
                <li><Link to="/">LOGOUT</Link></li>
              </ul>
            </div>
            
            {/* <div className={`${style.section} ${style.middleSection}`}>
              <Filters />
            </div> */}
            
            <div className={`${style.section} ${style.leftSection}`}>
              <div className={style.searchContainer}>
                <form onSubmit={handleSearchSubmit}>
                  <input type="text" placeholder="Search" className={style.searchInput} value={searchValue} onChange={handleSearchChange}/>
                  <button className={style.searchButton} type="submit">SEARCH</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
  
  export default connect(null, { getRecipesByName })(NavBar);