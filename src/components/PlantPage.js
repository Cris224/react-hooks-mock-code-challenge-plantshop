import React, { useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [newPlant, setNewPlant] = useState()

  function handelNewPlant(){
    const name =document.getElementById("name")
    const img = document.getElementById("image")
    const price = document.getElementById("price")
    
    const newName = name.value
    const newImg = img.value
    const newPrice = price.value
    setNewPlant(newName, newImg, newPrice)
  }

  return (
    <main>
      <NewPlantForm getInfo = {handelNewPlant}/>
      <Search />
      <PlantList newPlant={newPlant} 
    />
    </main>
  );
}

export default PlantPage;
