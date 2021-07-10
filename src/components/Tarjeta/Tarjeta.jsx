import React from "react";
import "./Tarjeta.css";

const Tarjeta = (props) => {
  return (
    <div className="tarjeta">
      <h2>{props.comida.nombre}</h2>
      <h3>{props.comida.precio}</h3>
    </div>
  );
};

export default Tarjeta;
