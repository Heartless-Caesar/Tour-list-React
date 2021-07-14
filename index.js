import React from "react";
import ReactDOM from "react-dom";
import { useState, useEffect } from "react";
import { TourList } from "./TourList.js";
import { MenuBar } from "./Menu.js";
import './index.css';

function App() {
  return (
    <>
      <MenuBar />
      <TourList />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
