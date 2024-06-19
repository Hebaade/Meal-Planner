import React from "react";
import "../index.css";

const Modal = ({
  show,
  item,
  setCalories,
  setFat,
  setCarb,
  setProtein,
  calories,
  fat,
  carb,
  protein,
}) => {
  if (show === false || item === null) {
    return null;
  } else {
    return (
      <div id="dish">
        <h4>{item.title}</h4>
        <div className='flex'>
        <div className="player">
          <img src={item.image} alt="" />
        </div>
        <div className="p">
          <p>
            <button
              className="btn btn-danger"
              onClick={() =>
                setCalories(calories + item.nutrition.nutrients[0].amount)
              }>
              {item.nutrition.nutrients[0].name}
            </button>{" "}
            <button className="btn btn-warning">
              <span>{item.nutrition.nutrients[0].amount}</span>{" "}
              {item.nutrition.nutrients[0].unit} per{" "}
              {item.nutrition.weightPerServing.amount}{" "}
              {item.nutrition.weightPerServing.unit}
            </button>{" "}
            <button className="btn btn-success">
              Percent of Daily Need -{" "}
              {item.nutrition.nutrients[0].percentOfDailyNeeds}
            </button>
          </p>
          <p>
            <button
              className="btn btn-danger"
              onClick={() => setFat(fat + item.nutrition.nutrients[1].amount)}>
              {item.nutrition.nutrients[1].name}
            </button>{" "}
            <button className="btn btn-warning">
              <span>{item.nutrition.nutrients[1].amount}</span>{" "}
              {item.nutrition.nutrients[1].unit} per{" "}
              {item.nutrition.weightPerServing.amount}{" "}
              {item.nutrition.weightPerServing.unit}
            </button>{" "}
            <button className="btn btn-success">
              Percent of Daily Need -{" "}
              {item.nutrition.nutrients[1].percentOfDailyNeeds}
            </button>
          </p>
          <p>
            <button
              className="btn btn-danger"
              onClick={() =>
                setCarb(carb + item.nutrition.nutrients[3].amount)
              }>
              {item.nutrition.nutrients[3].name}
            </button>{" "}
            <button className="btn btn-warning">
              <span>{item.nutrition.nutrients[3].amount}</span>{" "}
              {item.nutrition.nutrients[3].unit} per{" "}
              {item.nutrition.weightPerServing.amount}{" "}
              {item.nutrition.weightPerServing.unit}
            </button>{" "}
            <button className="btn btn-success">
              Percent of Daily Need -{" "}
              {item.nutrition.nutrients[3].percentOfDailyNeeds}
            </button>
          </p>
          <p>
            <button
              className="btn btn-danger"
              onClick={() =>
                setProtein(protein + item.nutrition.nutrients[8].amount)
              }>
              {item.nutrition.nutrients[8].name}
            </button>{" "}
            <button className="btn btn-warning">
              <span>{item.nutrition.nutrients[8].amount}</span>{" "}
              {item.nutrition.nutrients[8].unit} per{" "}
              {item.nutrition.weightPerServing.amount}{" "}
              {item.nutrition.weightPerServing.unit}
            </button>{" "}
            <button className="btn btn-success">
              Percent of Daily Need -{" "}
              {item.nutrition.nutrients[8].percentOfDailyNeeds}
            </button>
          </p>

          <p>
            <button className="btn btn-danger">
              {item.nutrition.nutrients[5].name}
            </button>{" "}
            <button className="btn btn-warning">
              <span>{item.nutrition.nutrients[5].amount}</span>{" "}
              {item.nutrition.nutrients[5].unit} per{" "}
              {item.nutrition.weightPerServing.amount}{" "}
              {item.nutrition.weightPerServing.unit}
            </button>{" "}
            <button className="btn btn-success">
              Percent of Daily Need -{" "}
              {item.nutrition.nutrients[5].percentOfDailyNeeds}
            </button>
          </p>
          <p>
            <button className="btn btn-danger">
              {item.nutrition.nutrients[6].name}
            </button>{" "}
            <button className="btn btn-warning">
              <span>{item.nutrition.nutrients[6].amount}</span>{" "}
              {item.nutrition.nutrients[6].unit} per{" "}
              {item.nutrition.weightPerServing.amount}{" "}
              {item.nutrition.weightPerServing.unit}
            </button>{" "}
            <button className="btn btn-success">
              Percent of Daily Need -{" "}
              {item.nutrition.nutrients[6].percentOfDailyNeeds}
            </button>
          </p>
        </div>
      </div>
      </div>
    );
  }
};

export default Modal;
