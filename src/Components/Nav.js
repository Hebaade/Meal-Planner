import React from "react";

const Nav = ({ calories, fat, carb, protein }) => {
  return (
    <div className="navbar">
      <span>Calories: {calories} Kcal</span>
      <ul>
        <li>Fat: {fat} g</li>
        <li>Carb: {carb} g</li>
        <li>Protein: {protein} g</li>
      </ul>
    </div>
  );
};

export default Nav;
