import "./App.css";
import React from "react";

function App() {
  return (
    <div>
      <input
        id="nombre"
        value={nombre}
        placeholder="Escribe..."
        onChange={(event) => {
          setNombre(event.target.value);
        }}
      />
    </div>
  );
}

export default App;
