import React from "react";

import "./App.css";
import WeatherEngine from "./components/WeatherEngine";

function App() {
  return (
    <div className="App">
      <WeatherEngine location="kharkiv, ukraine" />
      <WeatherEngine location="london, GB" />
      <WeatherEngine location="Beirut, lebanon" />
    </div>
  );
}

export default App;
