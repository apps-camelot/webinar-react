import { Fragment, useEffect, useState } from "react";
import "./App.css";

function App() {
  const Header = (props) => {
    return (
      <div>
        Soy el header
        <br />
        {props.children}
      </div>
    );
  };

  const Producto = () => {
    return <div>So un producto</div>;
  };

  return (
    <div>
      <Header>
        <Producto />
      </Header>

      <Header>Tareas</Header>

      <Header>
        <h1>Soy un children</h1>
      </Header>
    </div>
  );
}

export default App;
