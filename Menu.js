import React from "react";
import "./index.css";

export const MenuBar = () => {
  return (
    <>
      <div>
        <ul className="tour-bar">
          <li className="list-item">
            <a href="#">Home</a>
          </li>
          <li className="list-item">
            <a href="#">About</a>
          </li>
          <li className="list-item">
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </>
  );
};
