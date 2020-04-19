import React from 'react';
import WeatherCard from './components/WeatherCard/Component';
import './App.css';

function App() {
  return (
    <div className="App">
      <WeatherCard temp="40" />
      <WeatherCard temp="12" />
      <WeatherCard temp="-30" />
    </div>
  );
}

export default App;
