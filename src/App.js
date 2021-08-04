import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [cargando, setCargando] = useState(true);

  function cargar() {
    console.log("Cargando...");
    setTimeout(() => {
      setCargando(false);
    }, 1000);
  }

  useEffect(() => {
    cargar();
  }, []);

  return <div>{cargando ? <div>Cargando...</div> : <div>¡Listo!</div>}</div>;
}

export default App;
