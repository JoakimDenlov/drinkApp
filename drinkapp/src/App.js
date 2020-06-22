import React from "react";
import "./Styling/App.css";
import Homepage from "./Components/homepage";
import Explore from "./Components/explore";
import DrinkInfo from "./Components/drinkInfo";
import { BrowserRouter, Route } from "react-router-dom";

const navigation = (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/explore" component={Explore} />
      <Route exact path="/drinkInfo" component={DrinkInfo} />
    </div>
  </BrowserRouter>
);

function App() {
  return navigation;
}

export default App;
