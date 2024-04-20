import React from "react";
import { Col, Row } from "antd";
import "./WeaklyWeather.css";
import DailyWeatherItem from "./DailyWeatherItem";

const WeaklyWeather = function (props) {
  let weathers = [];
  for (let i = 0; i < 6; i++) {
    weathers.push(
      <Col
        xs={{ span: 24 }}
        sm={{ span: 24 }}
        md={{ span: 24 }}
        lg={{ span: 11 }}
      >
        <DailyWeatherItem />
      </Col>
    );
  }

  return (
    <div className="container-weakly-weather">
      <Row
        justify={{
          xs: "space-between",
          sm: "space-between",
          md: "space-between",
          lg: "space-between",
        }}
        gutter={[16, 16]}
        className="row-wrapper"
      >
        {weathers}
      </Row>
    </div>
  );
};

export default WeaklyWeather;
