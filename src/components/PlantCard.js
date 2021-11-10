import React, { useState } from "react";

function PlantCard({name, image, price}) {
 
  const [btn, setBtn] = useState(true)

  function handleStock(){
    setBtn(btn => !btn)
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {true ? (
        <button onClick={handleStock} className={btn ? "primary": ""}>{btn ? "In Stock": "Out of Stock"}</button>
      ) : (
        <button>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
