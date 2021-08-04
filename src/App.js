import { useState } from "react";
import "./App.css";

function App() {
  const [respuesta, setRespuesta] = useState("");
  const [imgSrc, setImgSrc] = useState("");

  const preguntar = () => {
    setRespuesta("");
    setImgSrc("");

    fetch("https://yesno.wtf/api/")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setRespuesta(data.answer);
        setImgSrc(data.image);
      })
      .catch((err) => {
        alert("Error: " + err);
      });
  };

  return (
    <div>
      <label>
        Pregunta:
        <br />
        <input placeholder="Pregunta" />
      </label>
      <br />
      <button onClick={() => preguntar()}>Preguntar</button>
      <h1>{respuesta}</h1>
      <img src={imgSrc} />
    </div>
  );
}

export default App;
