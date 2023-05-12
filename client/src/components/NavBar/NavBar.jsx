import { Link } from "react-router-dom";
import style from "./NavBar.module.css";
import React, { useState } from "react";
import axios from "axios";

const NavBar = () => {
    const [searchValue, setSearchValue] = useState("");
    const [searchResults, setSearchResults] = useState([]);
  
    const handleSearch = async () => {
        try {
          const response = await axios.get("http://localhost:3001/recipes", {
            params: {
              name: searchValue
            }
          });
          const data = response.data;
          // Filtrar las recetas que contengan la palabra "soup" en el nombre
          const filteredRecipes = data.filter(recipe =>
            recipe.name.toLowerCase().includes("soup")
          );
          setSearchResults(filteredRecipes);
        } catch (error) {
          console.error('Error al realizar la búsqueda:', error);
        }
      };
  
    const handleChange = (event) => {
      setSearchValue(event.target.value);
    };
  
    return (
      <nav className={style.navContainer}>
        <div className={style.navBar}>
          <div className={style.container}>
            <div className={style.navElements}>
              <div className={style.leftSection}>
                <div className={style.searchContainer}>
                  <input
                    type="text"
                    placeholder="Search"
                    className={style.searchInput}
                    value={searchValue}
                    onChange={handleChange}
                  />
                  <button className={style.searchButton} onClick={() => handleSearch()}>
                    SEARCH
                    </button>
                </div>
              </div>
              <div className={style.rightSection}>
                <ul className={style.navLinks}>
                  <li>
                    <Link to="/home">HOME</Link>
                  </li>
                  <li>
                    <Link to="/create">CREATE</Link>
                  </li>
                  <li>
                    <Link to="/">LOGOUT</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  };
  
  export default NavBar;