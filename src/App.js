import "./App.css";
import React, { useState } from "react";

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operador, setOperador] = useState("+");
  const [resultado, setResultado] = useState(0);

  /**
   * Calculadora, con 2 inputs para numeros
   * un combo para operaciones
   * un botón
   *
   * resultado
   */

  function calcular() {
    if (operador === "+") {
      setResultado(Number(num1) + Number(num2));
    } else if (operador === "-") {
      setResultado(Number(num1) - Number(num2));
    } else if (operador === "*") {
      setResultado(Number(num1) * Number(num2));
    } else {
      setResultado(Number(num1) / Number(num2));
    }
  }

  return (
    <div>
      <input
        type="number"
        placeholder="Numero 1"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <input
        type="number"
        placeholder="Numero 2"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />

      <select
        onChange={(e) => {
          let index = e.target.selectedIndex;
          let valueSeleccionado = e.target[index].value;

          setOperador(valueSeleccionado);
        }}
      >
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>

      <button onClick={calcular}>Calcular</button>

      <h4>El resultado es: {resultado}</h4>
    </div>
  );
}

export default App;
