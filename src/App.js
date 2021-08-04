import "./App.css";
import React, { useState } from "react";

function App() {
  const [nombre, setNombre] = useState("");

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
