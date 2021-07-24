import "./App.css";
import React from "react";

function App() {
  function local() {
    console.log("localStorage");
    localStorage.setItem("nombre", "Apps Camelot");

    setTimeout(function () {
      console.log(localStorage.getItem("nombre"));
    }, 1000);
  }

  const session = () => {
    console.log("sessionStorage");
    sessionStorage.setItem("key", 123);

    setTimeout(function () {
      console.log(sessionStorage.getItem("key"));
    }, 1000);
  };

  return (
    <div>
      <button onClick={local}>Local storage</button>
      <button onClick={session}>Session storage</button>
    </div>
  );
}

export default App;
