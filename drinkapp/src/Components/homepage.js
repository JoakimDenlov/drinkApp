import React, { useState } from "react";
import { Link } from "react-router-dom";
import Image from "../Images/tentabild.jpg";
import "../Styling/Homepage.css";

const Homepage = () => {
  const [test, setTest] = useState(0);

  return (
    <div className="Homepage">
      <Link to="/"> Home..</Link>
      <Link to="/explore"> Explore.. </Link>
      <br></br>
      <h1 id="maintitle">Welcome to The Cocktail Explorer!</h1>
      <img src={Image} alt="cocktails" />
    </div>
  );
};

export default Homepage;
