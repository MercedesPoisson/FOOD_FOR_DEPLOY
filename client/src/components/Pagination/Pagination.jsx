import React, { useState } from "react";
import arrowLeft from "./arrow-left-svgrepo-com.svg";
import arrowRight from "./arrow-right-svgrepo-com.svg";
import style from "./Pagination.module.css";

// -----Muestro Paginado ---- Permite Navegacion entre las diferentes Paginas -------
const Pagination = ({ recipesPerPage, allRecipes, paginado }) => {
  const totalPages = Math.ceil(allRecipes / recipesPerPage); 
  const [currentPage, setCurrentPage] = useState(1); 

  const goToPage = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPages) {
      return; 
    }
    setCurrentPage(pageNumber);
    paginado(pageNumber);
  };

  const goToPreviousPage = () => {
    const previousPage = currentPage - 1;
    if (previousPage < 1) {
      return; 
    }
    
    setCurrentPage(previousPage);
    paginado(previousPage);
  };
  
  const goToNextPage = () => {
    const nextPage = currentPage + 1;
    if (nextPage > totalPages) {
      return; 
    }
   
    setCurrentPage(nextPage);
    paginado(nextPage);
  };
// -----Renderizado de Numero de pagina en una Lista -------- guado los numeros en un []
  const renderPageNumbers = () => {
    const pageNumbers = []; // 
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <li key={i}>
          <a className={`${style.container} ${i === currentPage ? style.active : ""}`} onClick={() => goToPage(i)} >
            {i}
          </a>
        </li>
      );
    }
    return pageNumbers;
  };
  
  return (
    <nav className={style.pagination}>
      <ul className={style.ul}>
        <li>
          <a className={style.container} onClick={goToPreviousPage}>
            <img src={arrowLeft} alt="" className={style.icon} />
          </a>
        </li>
        {renderPageNumbers()}
        <li>
          <a className={style.container} onClick={goToNextPage}>
          <img src={arrowRight} alt="" className={style.icon} />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;