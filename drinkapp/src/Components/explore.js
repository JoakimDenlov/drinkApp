import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import json from "../Data/drinks.json";
import "../Styling/explore.css";

const Explore = () => {
  const { register, handleSubmit } = useForm();
  const [jsonData, setJsonData] = useState(json.cocktails);

  const onSubmit = (data) => {
    if (JSON.stringify(json.cocktails).includes(data.name)) {
      return console.log("items found");
    } else {
      alert("No drinks Found");
    }
  };
  return (
    <div className="Explore">
      <Link to="/"> Home..</Link>
      <Link to="/explore"> Explore.. </Link>
      <h1 id="title">Find your favourite drink!</h1>
      <div id="form">
        <form name="userInput" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            name="name"
            placeholder="search"
            ref={register}
            required
          />
          <input type="submit" value="Search" />
        </form>
      </div>

      {jsonData.map((drink) => (
        <div>
          <p>{drink.name}</p>
          <img src={drink.image} />
        </div>
      ))}
    </div>
  );
};

export default Explore;
