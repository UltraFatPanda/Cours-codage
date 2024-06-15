import React from "react";

const Card = ({ meal }) => {
  return (
    <li className="card">
      <div className="Description">
        <h2>{meal.strMeal}</h2>
        <p>{"Origin :" + " " + meal.strArea}</p>
        <img src={meal.strMealThumb} alt={"photo de" + meal.strMeal} />
        <p>{meal.strInstructions}</p>
      </div>
    </li>
  );
};

export default Card;
