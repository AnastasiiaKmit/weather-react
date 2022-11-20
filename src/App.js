import React, { useState } from "react";

import "./app.css";
import Temperature from "./Temperature";

export default function App() {
  let [city, setCity] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    console.log({ city });
  }
  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="App">
      <div className="mb-3">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                className="form-control"
                autoComplete="off"
                placeholder="Type a city..."
                onChange={updateCity}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                className="btn btn-primary w-100"
                value="Search"
              />
            </div>
          </div>
        </form>
      </div>

      <Temperature city={city} />
    </div>
  );
}
