import React from "react";
import "./App.css";
import { Flex } from "antd";
import CommonWeather from "./components/CommonWeather";
import HourlyWeather from "./components/HourlyWeather";

function App() {
  return (
    <div vertical className="App">
        <CommonWeather className="CommonWeather" />
        <HourlyWeather className="HourlyWeather"/>
    </div>
  );
}

export default App;
