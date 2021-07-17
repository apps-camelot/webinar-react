import { Fragment, useEffect, useState } from "react";
import "./App.css";

function App() {
  const Input = (props) => {
    return (
      <Fragment>
        <input
          type={props.type || "radio"}
          name={props.name || "genero"}
          value={props.value}
          onChange={(e) => {
            if (e.target.checked) {
              console.log(e.target.value);
            }
          }}
        />
        {props.label}
      </Fragment>
    );
  };

  return (
    <div>
      <Input value="femenino" label="Femenino" />
      <Input value="masculino" label="Masculino" />
      <Input type="password" label="Password" />
    </div>
  );
}

export default App;
