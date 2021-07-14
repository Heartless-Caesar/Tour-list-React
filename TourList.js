import { Data } from "./Data.js";
import { useState, useEffect } from "react";
import "./index.css";
export { TourList };

const TourList = () => {
  const Item = () => {
    const [places, setPlaces] = useState(Data);
    const removeHandler = (id) => {
      const newPlace = places.filter((place) => place.id !== id)
      setPlaces(newPlace);
    };

    const Components = () => {
      return(
        <>
        {places.map((item) => {
          const { id, name, desc, price } = item;
          return (
            <>
            <div key={id} className="tour-div">
              <h1 className="tour-name">{name}</h1>
              <p className="tour-desc">{desc}</p>
              <p className="tour-price">{price}</p>
              <button type="button" onClick={()=>{removeHandler(id)}} className="remove-button">
                Remove
              </button>
          </div>
            </>
          );
        })}
        </>)
    }
    return (
      <>
      <div className="components-div">
       <div className="search-div">
        <label htmlFor="search-bar" className="search-bar-label">Search for your desired destination</label>
        <input className="search-bar" name="search-bar" type="text"></input>
        <button type="button" onClick={()=>setPlaces([])} className="remove-all-button">Remove all</button>
       </div>
       <Components />
       </div>
      </>
    );
  };
  return (
    <>
      <Item />
    </>
  );
};
