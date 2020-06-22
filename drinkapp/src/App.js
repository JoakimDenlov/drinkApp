import React from "react";
import "./Styling/App.css";
import Homepage from "./Components/homepage";
import Explore from "./Components/explore";
import { BrowserRouter, Route } from "react-router-dom";

const navigation = (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/explore" component={Explore} />
    </div>
  </BrowserRouter>
);

function App() {
  return navigation;
}

export default App;
