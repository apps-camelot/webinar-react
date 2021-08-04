import "./App.css";
import React from "react";

function App() {
  const Input = ({ name, label }) => {
    return (
      <label>
        {label}
        <input name={name} />
      </label>
    );
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          console.log(e.target.nombre.value);
          e.preventDefault();
        }}
      >
        <Input name="nombre" label="Nombre" />
        <Input name="apellidos" label="Apellidos" />

        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
}

export default App;
