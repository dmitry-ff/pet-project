import React from 'react';
import axios from 'axios';
import _ from 'lodash';


function WeatherData() {
    const [weatherData, setWeatherData] = React.useState();

    const apiURL = 'http://api.weatherapi.com/v1/current.json?key=3e2b23202a804627a5c115738222701&q=Moscow&aqi=no';

    React.useEffect(() => {
        axios.get(apiURL)
            .then((response) => _.map(response.data, item => _.filter(item,)))
            .then(data => {
                return (
                    console.log(`Country ` + data[0][2], `City ` + data[0][0], data[1][2], data[1][13])
                );
            })
    }, [setWeatherData]);
    return null;
};

export default WeatherData;
