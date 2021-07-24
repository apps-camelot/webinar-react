import "./App.css";
import React, { useRef } from "react";

function App() {
  const form = useRef(null);

  const submit = (e) => {
    console.log(form.current);

    e.preventDefault();
    const data = new FormData(form.current);

    let datos = Object.fromEntries(data);

    console.log(datos);

    fetch("/api", { method: "POST", body: data })
      .then((res) => res.json())
      .then((json) => console.log(json));
  };

  return (
    <div>
      <form ref={form} onSubmit={submit}>
        <input type="text" name="nombre" />
        <input type="text" name="apellidos" />

        <textarea name="contenido">Soy un text area</textarea>

        <select name="genero">
          <option value="femenino">Femenino</option>
          <option value="masculino">Masculino</option>
        </select>

        <input type="submit" name="Enviar" />
      </form>
    </div>
  );
}

export default App;
