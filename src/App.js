import "./App.css";
import React from "react";

function App() {
  return (
    <div>
      <select
        onChange={(event) => {
          console.log(event.target.value);

          let index = event.target.selectedIndex;
          let label = event.target[index].text;
          console.log(label);
        }}
      >
        <option value="lista1">Lista 1</option>
        <option value="lista2" selected>
          Lista 2
        </option>
        <option value="lista3">Lista 3</option>
      </select>
    </div>
  );
}

export default App;
