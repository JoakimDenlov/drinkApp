import React from "react";
import json from "../Data/drinks.json";
import { Link } from "react-router-dom";

const DrinkInfo = ({ name, preparation, image }) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>{preparation}</p>
      <img src={image} alt={name} />
    </div>
  );
};

export default DrinkInfo;
