import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import json from "../Data/drinks.json";
import "../Styling/explore.css";
import { useHistory } from "react-router-dom";

const Explore = () => {
  const { register, handleSubmit } = useForm();
  const [submitted, setSubmitted] = useState(false);
  const [jsonData, setJsonData] = useState(json.cocktails);
  const history = useHistory();

  const handleEvent = () => {
    history.push("/drinkInfo");
    setJsonData(json.cocktails);
  };
  const handleReset = () => {
    setJsonData(json.cocktails);
    setSubmitted(false);
  };

  const DataList = () => {
    return (
      <div>
        {jsonData.map((drink) => (
          <div>
            <p>{drink.name}</p>
            <img onClick={handleEvent} src={drink.image} />
          </div>
        ))}
      </div>
    );
  };

  const onSubmit = (data) => {
    if (JSON.stringify(json.cocktails).includes(data.name)) {
      setSubmitted(true);
      setJsonData(jsonData.filter((drinks) => drinks.name.includes(data.name)));
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
            onClick={handleReset}
            type="text"
            name="name"
            placeholder="search"
            ref={register}
            required
          />
          <input type="submit" value="Search" />
        </form>
      </div>
      {submitted && <DataList />}
    </div>
  );
};

export default Explore;
