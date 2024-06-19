import React, { useState } from "react";
import Home from "./Components/Home";
import Nav from "./Components/Nav";

const App = () => {
  const [calories, setCalories] = useState(0);
  const [fat, setFat] = useState(0);
  const [carb, setCarb] = useState(0);
  const [protein, setProtein] = useState(0);

  return (
    <div>
      <Nav calories={calories} fat={fat} carb={carb} protein={protein} />
      <Home
        setCalories={setCalories}
        setFat={setFat}
        setCarb={setCarb}
        setProtein={setProtein}
        calories={calories}
        fat={fat}
        carb={carb}
        protein={protein}
      />
    </div>
  );
};

export default App;
