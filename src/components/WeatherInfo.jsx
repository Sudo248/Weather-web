import React, { useState } from 'react';
import "./WeatherInfo.css"
import double_clound from "../assets/images/img_double_clound.png";
import "./WeatherInfoItem"
import WeatherInfoItem from './WeatherInfoItem';

const WeatherInfo = function (props) {
    let weathers = []
    for (let i = 0; i < 5; i++) {
        weathers.push(
            <WeatherInfoItem/>
        );
    }
    return (
        <div className='container-weather-info'>
            <div className='weather-info-wrapper'>
                <div className='img-tempurature-wrapper'>
                    <div className='tempurature-wrapper'>
                        <p>HA NOI</p>
                        <p>15C</p>
                        <p>Monday</p>
                    </div>
                    <img src={double_clound} className='img-double-clound' />
                </div>
                {weathers}
            </div>
        </div>
    );
}

export default WeatherInfo