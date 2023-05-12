import React, { useState } from "react";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import style from "./Pagination.module.css";

const Pagination = ({ recipesPerPage, allRecipes, paginado }) => {
  const totalPages = Math.ceil(allRecipes / recipesPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const goToPage = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPages) {
      return; // Evitar ir a páginas inválidas
    }

    setCurrentPage(pageNumber);
    paginado(pageNumber);
  };

  const goToPreviousPage = () => {
    const previousPage = currentPage - 1;
    if (previousPage < 1) {
      return; // Evitar ir a una página anterior inválida
    }

    setCurrentPage(previousPage);
    paginado(previousPage);
  };

  const goToNextPage = () => {
    const nextPage = currentPage + 1;
    if (nextPage > totalPages) {
      return; // Evitar ir a una página siguiente inválida
    }

    setCurrentPage(nextPage);
    paginado(nextPage);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <li key={i}>
          <a
            className={`${style.container} ${
              i === currentPage ? style.active : ""
            }`}
            onClick={() => goToPage(i)}
          >
            {i}
          </a>
        </li>
      );
    }
    return pageNumbers;
  };

  return (
    <nav>
      <ul className={style.ul}>
        <li>
          <a className={style.container} onClick={goToPreviousPage}>
            <BsArrowLeftShort />
          </a>
        </li>
        {renderPageNumbers()}
        <li>
          <a className={style.container} onClick={goToNextPage}>
            <BsArrowRightShort />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;