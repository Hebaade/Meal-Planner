import React, { useState } from "react";
import "../index.css";

const Main = ({ recipes, setShow, setItem }) => {
  return (
    <div className="row">
      {recipes.map((recipe) => {
        return (
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="card" style={{ margin: 20 }}>
              <img
                src={recipe.image}
                alt={recipe.title}
                className="card-img-top"
                style={{ marginTop: "20px" }}
              />
              <div className="card-header">
                <h6 style={{ color: "black", fontSize: "16px" }}>
                  {recipe.title}
                </h6>
              </div>
              <div className="card-body" style={{ padding: 15 }}>
                <button
                  className="btn btn-success"
                  onClick={() => {
                    setShow(true);
                    setItem(recipe);
                  }}>
                  <a
                    href="#dish"
                    style={{ textDecoration: "none", color: "white" }}>
                    View
                  </a>
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Main;
