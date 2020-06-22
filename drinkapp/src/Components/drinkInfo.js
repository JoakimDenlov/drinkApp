import React from "react";
import json from "../Data/drinks.json";
import { Link } from "react-router-dom";

const DrinkInfo = () => {
  return (
    <div>
      <Link to="/"> Home..</Link>
      <Link to="/explore"> Explore.. </Link>
      <h1>{json.cocktails[0].name}</h1>
      <p>{json.cocktails[0].preparation}</p>
      <img src={json.cocktails[0].image} alt={json.cocktails[0].name} />
    </div>
  );
};

export default DrinkInfo;
