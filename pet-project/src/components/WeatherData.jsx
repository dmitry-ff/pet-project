import React from 'react';
import axios from 'axios';
import _ from 'lodash';


function WeatherData() {
    const [data, setData] = React.useState({ hits: [] });

    const apiURL = 'http://api.weatherapi.com/v1/current.json?key=3e2b23202a804627a5c115738222701&q=Tula&aqi=no';

    React.useEffect(() => {
        axios.get(apiURL)
            .then((response) => _.map(response.data, item => _.filter(item,)))
            .then(data => {
                return (
                    console.log(data[0][2], data[0][0], data[1][6])
                );
            })
    }, []);
    return null;
};

export default WeatherData;
