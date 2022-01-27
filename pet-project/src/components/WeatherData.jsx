import React from 'react';
import axios from 'axios';


function WeatherData() {
    const [data, setData] = React.useState({ hits: [] });
    const apiURL = 'http://api.weatherapi.com/v1/current.json?key=3e2b23202a804627a5c115738222701&q=London&aqi=no';
    React.useEffect(() => {
        axios.get(apiURL)
            .then((response) => console.log(response))
    }, []);
    return null;
};

export default WeatherData;
