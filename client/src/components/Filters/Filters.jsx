import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipes, getRecipesById, getRecipesByName, cleanDetail, getTypeDiets, filterByDiet } from "../../redux/actions";
import style from "./Filters.module.css";

const Filters = () => {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes);
  const typeDiets = useSelector((state) => state.typeDiets);

  useEffect(() => {
    dispatch(getRecipes());
    dispatch(getTypeDiets());
  }, [dispatch]);

  const handleFilterByDiet = (selectedDietType) => {
    dispatch(filterByDiet(selectedDietType));
  };

  return (
    <div className={style.container}>
      <select onChange={(e) => handleFilterByDiet(e.target.value)}>
        <option value="Filter By" disabled defaultValue>
          Filter By
        </option>
        <option value="All Diet Types">All Diet Types</option>
        {typeDiets.map((dietType) => (
          <option key={dietType} value={dietType}>
            {dietType}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filters;