import React, { useState } from "react";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import style from "./Pagination.module.css";

// --- en este componente estoy renderizando los numeros y las flechas
const Pagination = ({ recipesPerPage, allRecipes, paginado }) => {
  const totalPages = Math.ceil(allRecipes / recipesPerPage); // Primero calculo el numero de paginas que necesito (yo puse mostrar 9 por pagina asique deberia darme 12 paginas)
  const [currentPage, setCurrentPage] = useState(1); // despues creo el estado para almacenar la pagina en la que estoy


  // No ir a paginas menores a 1 o paginas mayores a la cantidad total de paginas
  const goToPage = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPages) {
      return; // Evitar ir a páginas inválidas
    }
  //se actualiza pagina actual en el estado y se llama a la funcion de paginado con el numero de pagina seleccionado
    setCurrentPage(pageNumber);
    paginado(pageNumber);
  };

   // No ir a paginas menores a 1
  const goToPreviousPage = () => {
    const previousPage = currentPage - 1;
    if (previousPage < 1) {
      return; 
    }
    //actualizo el numero de pagina y llamo a paginado con la pagina anterior
    setCurrentPage(previousPage);
    paginado(previousPage);
  };
  // No ir a paginas mayores al total de paginas
  const goToNextPage = () => {
    const nextPage = currentPage + 1;
    if (nextPage > totalPages) {
      return; // Evitar ir a una página siguiente inválida
    }
    //actualizo el numero de pagina y llamo a paginado con la pagina siguiente
    setCurrentPage(nextPage);
    paginado(nextPage);
  };
  // renderizo los numeros de pagina como elementos de una lista
  const renderPageNumbers = () => {
    const pageNumbers = []; // en este array guardo los numeros de pagina que necesito segun la cantidad de cards que renderizo por vista
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
  // agregue iconos de react icons
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