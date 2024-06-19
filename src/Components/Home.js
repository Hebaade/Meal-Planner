import axios from "axios";
import React, { useState } from "react";
import Main from "./Main";
import Modal from "./Model";

const Home = ({
  setCalories,
  setFat,
  setCarb,
  setProtein,
  calories,
  fat,
  carb,
  protein,
}) => {
  const [meal, setMeal] = useState("");
  const [recipes, setRecipes] = useState([]);

  const [item, setItem] = useState();
  const [show, setShow] = useState(false);

  const getSearched = (e) => {
    if (e.key === "Enter") {
      axios
        .get(
          "https://api.spoonacular.com/recipes/complexSearch?apiKey=73dbd9d46f1b40dabcc4be16c6ef8bd5&query=" +
            meal +
            "&number=12&addRecipeNutrition=true&instructionsRequired"
        )
        .then((res) => setRecipes(res.data.results))
        .catch((err) => console.log(err));
    }
  };

  return (
    <div>
      <header>
        <div className="hero">
          <div className="hero-banner">
            <h4>Meal Planner</h4>
            <p>Tell me what you eat, and I will tell you who you are</p>
            <input
              className="input-bar"
              type="text"
              value={meal}
              onChange={(e) => {
                setMeal(e.target.value);
              }}
              onKeyPress={getSearched}
              placeholder="Press Enter"
            />
          </div>
        </div>
      </header>
      <Modal
        item={item}
        show={show}
        setCalories={setCalories}
        setCarb={setCarb}
        setFat={setFat}
        setProtein={setProtein}
        calories={calories}
        fat={fat}
        carb={carb}
        protein={protein}
      />
      <Main recipes={recipes} setShow={setShow} setItem={setItem} />
    </div>
  );
};

export default Home;
