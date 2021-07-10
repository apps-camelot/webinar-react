import { Fragment, useState } from "react";
import "./App.css";

function App() {
  const [nombre, setNombre] = useState("Iván");

  const CustomInput = (props) => {
    return <input placeholder={props.texto} value={props.value} />;
  };

  return (
    <div>
      <CustomInput texto="Dame tu nombre" value="123" />
      <CustomInput texto="Dame tus apellidos" />
      {CustomInput({
        texto: "Edad",
        value: 5,
      })}
    </div>
  );
}

export default App;
