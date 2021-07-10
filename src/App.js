import { Fragment, useState } from "react";
import "./App.css";
import Tarjeta from "./components/Tarjeta/Tarjeta";

function App() {
  const datos = [
    {
      nombre: "Pizza",
      precio: "$120.00",
    },
    {
      nombre: "Hamburguesa",
      precio: "$60.00",
    },
    {
      nombre: "Refresco",
      precio: "$20.00",
    },
  ];

  return (
    <div>
      {datos.map((comida, i) => {
        return <Tarjeta key={i} comida={comida} />;
      })}
    </div>
  );
}

export default App;
