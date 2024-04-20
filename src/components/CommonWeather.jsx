import React from "react";
import "./CommonWeather.css";
import {Flex} from "antd";
import WeatherInfo from "./WeatherInfo";
import RightWeather from "./RightWeather";

const CommonWeather = function (props) {
  return (<Flex className="common-weather-wrapper" horizotal>
    <WeatherInfo/>
    <RightWeather/>
  </Flex>);
};

export default CommonWeather;
