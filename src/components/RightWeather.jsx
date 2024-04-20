import React from "react";
import {Flex} from "antd";
import "./RightWeather.css";
import SearchBar from "./SearchBar"
import WeaklyWeather from "./WeaklyWeather"

const RightWeather = function(props) {
    return (
        <Flex gap="large" vertical className="right-weather-wrapper">
        <SearchBar/>
        <WeaklyWeather/>
    </Flex>
    );
}

export default RightWeather;