import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipes, getTypeDiets, filterByDiet, filterBySource } from "../../redux/actions";
import style from "./Filters.module.css";

const Filters = () => {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes);
  const typeDiets = useSelector((state) => state.typeDiets);

  useEffect(() => {
    dispatch(getRecipes());
    dispatch(getTypeDiets());
  }, [dispatch]);


  // -----FILTER DIETS--------
  const handleFilterByDiet = (selectedDietType) => {
    dispatch(filterByDiet(selectedDietType));
  };

  // -----FILTER SOURCE--------
  const handleFilterBySource = (selectedSource) => {
    dispatch(filterBySource(selectedSource));
  };

  return (

    <div className={style.container}>
      <div className={style.filterContainer}>
        <span>Filter By: </span>
      <select defaultValue="Diet Type" onChange={(e) => handleFilterByDiet(e.target.value)}>
        <option value="Diet Type" disabled>
          Diet Type
        </option>
        <option value="All Diet Types">All Diet Types</option>
        {typeDiets.map((dietType) => (
          <option key={dietType} value={dietType}>
            {dietType}
          </option>
        ))}
      </select>
      </div>

      <div className={style.filterContainer}>
         <select defaultValue="Source" onChange={(e) => handleFilterBySource(e.target.value)}>
        <option value="Source" disabled>
          Source
        </option>
        <option value="All Sources">All Sources</option>
        <option value="API">API</option>
        <option value="Database">Database</option>
      </select>
      </div>

     
    </div>
  );
};

export default Filters;