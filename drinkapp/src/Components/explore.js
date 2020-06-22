import React, { useState } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "../Styling/explore.css";

const Explore = () => {
  return (
    <div className="Explore">
      <Link to="/"> Home..</Link>
      <Link to="/explore"> Explore.. </Link>
      <h1 id="title">Find your favourite drink!</h1>
    </div>
  );
};

export default Explore;
