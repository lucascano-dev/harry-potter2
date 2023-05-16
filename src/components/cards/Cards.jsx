import React from "react";
import "./Cards.css";

const Cards = ({ datos }) => {
  return (
    <div className="card">
      {datos?.map((personaje) => (
        <div className="cards-conteiner">
          <div key={personaje.id}>
            <div>
              <h1 className="nombre-personaje">{personaje.name}</h1>
            </div>
            <div>
              <h2 className="nombre-casa">{personaje.house}</h2>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
