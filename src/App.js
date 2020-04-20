import React from 'react';
import WeatherCard from './components/WeatherCard/Component';
import './App.css';

function App() {
  const data = async () => {
    const apiRes = await fetch('http://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&APPID=7fa3c4b3d6dd6461377e4b633b65a410');
    const resJSON = await apiRes.json();
    return resJSON;
  };
  data().then(res => {
    console.log('the feels like is ' + res.main.feels_like);
    console.log('the feels like is ' + res.main.temp);
  
  });
   
  return (
    <div className="App">
      <WeatherCard temp="40" condition={"Hail"} city={"Sydny"} country={"AU"} />
      <WeatherCard temp="12" condition={"Drizzle"} city={"Kharkiv"} country={"UA"}
      />
      <WeatherCard temp="-12" condition={"Thunderstorm"} city={'London'} country={'UK'} />
    </div>
  );
}

export default App;
