import "./App.css";
import React from "react";

function App() {
  return (
    <div>
      <input
        type="checkbox"
        value="si"
        onChange={(e) => {
          if (e.target.checked) {
            console.log(e.target.value);
          }
        }}
      />
      Click
    </div>
  );
}

export default App;
