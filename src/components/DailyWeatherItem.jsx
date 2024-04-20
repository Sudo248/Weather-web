import React from "react";
import { Row } from "antd";
import "./DailyWeatherItem.css";
import sunny from "../assets/images/img_sunny.png";

const DailyWeatherItem = function (props) {
  return (
    <Row className="weather-item-wrapper" justify="space-between">
      <div class="day">
        <p>TUESDAY</p>
      </div>
      <div class="temperature-and-icon-wrapper">
        <p className="temperature">19°C</p>
        <img src={sunny} alt="sunny" className="weather-icon" />
      </div>
    </Row>
  );
};

export default DailyWeatherItem;
