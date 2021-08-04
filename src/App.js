import "./App.css";
import React, { Fragment } from "react";

function App() {
  const submit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);

    fetch("/api", {
      method: "POST",
      body: data,
      headers: { "Soy-Un-Header": "Hola mundo" },
    });
  };

  const espacio = () => {
    return (
      <Fragment>
        <br />
        <br />
      </Fragment>
    );
  };

  const Label = (props) => {
    return (
      <Fragment>
        <label>{props.children}</label>
        <br />
      </Fragment>
    );
  };

  return (
    <div>
      <form onSubmit={submit}>
        <Label>Nombre</Label>
        <input type="text" name="nombre" />

        {espacio()}

        <Label>Apellidos</Label>
        <input type="text" name="apellidos" />

        {espacio()}

        <textarea name="contenido">Soy un text area</textarea>

        {espacio()}

        <Label>Genero</Label>
        <select name="genero">
          <option value="femenino">Femenino</option>
          <option value="masculino">Masculino</option>
        </select>

        {espacio()}

        <input type="submit" name="Enviar" />
      </form>
    </div>
  );
}

export default App;
