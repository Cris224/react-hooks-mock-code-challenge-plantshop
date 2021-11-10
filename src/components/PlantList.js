import React,  { useEffect, useState } from "react";
import PlantCard from "./PlantCard";

function PlantList({newPlant}) {

  const [plantList, setPlantList] = useState([])

  useEffect(() => {
    fetch('http://localhost:6001/plants')
    .then(resp => resp.json())
    .then(data=> {
      console.log(data);
      setPlantList(data);
    })
  }, [])

  // const newPLant = newPlant.map(data =>{
  //   return(
  //   <PlantCard 
  // name={data.newName}
  // image= {data.newImage}
  // price={data.newPrice}
  // />)}
  // }

 const cardMaker = plantList.map(data => {
   return(
    <PlantCard 
    name={data.name}
    image= {data.image}
    price={data.price}
    key={data.id} 
    />
 )})
   
  return (
    <ul className="cards">
      {cardMaker}
      {/* {newPLant()} */}
    </ul>
  );
}

export default PlantList;
