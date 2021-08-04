import "./App.css";
import React, { useState } from "react";

function App() {
  const [mensaje, setMensaje] = useState("");

  return (
    <div>
      <textarea
        onChange={(event) => {
          setMensaje(event.target.value);
        }}
      >
        {mensaje}
      </textarea>
      <h1>El mensaje es "{mensaje}"</h1>
    </div>
  );
}

export default App;
