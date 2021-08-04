import "./App.css";
import React from "react";

function App() {
  return (
    <div>
      <input
        type="radio"
        name="genero"
        value="femenino"
        onChange={(e) => {
          if (e.target.checked) {
            console.log(e.target.value);
          }
        }}
      />{" "}
      Femenino
      <input
        type="radio"
        name="genero"
        value="masculino"
        onChange={(e) => {
          if (e.target.checked) {
            console.log(e.target.value);
          }
        }}
      />{" "}
      Masculino
    </div>
  );
}

export default App;
