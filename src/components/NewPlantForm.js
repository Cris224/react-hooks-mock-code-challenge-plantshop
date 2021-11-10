import React from "react";

function NewPlantForm({getInfo}) {
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form>
        <input id="name" type="text" name="name" placeholder="Plant name" />
        <input id="image"type="text" name="image" placeholder="Image URL" />
        <input id="price" type="number" name="price" step="0.01" placeholder="Price" />
        <button onClick={getInfo} type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
