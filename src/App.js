import React from "react";

import "./app.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <Weather defaultCity="Lviv" />
    </div>
  );
}
