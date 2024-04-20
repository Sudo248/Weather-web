import React from "react";
import "./CommonWeather.css";
import { Flex } from "antd";
import WeatherInfo from "./WeatherInfo";
import SearchBar from "./SearchBar";
import WeaklyWeather from "./WeaklyWeather";

const CommonWeather = function (props) {
  return (
    <div className="CommonWeather">
      <WeatherInfo className="weather-info-wrapper" />
      <SearchBar className="search-bar-wrapper"/>
      <WeaklyWeather className="weather-weakly-wrapper"/>
    </div>
  );
};

export default CommonWeather;
