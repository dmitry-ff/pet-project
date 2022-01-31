import React from 'react';
import axios from 'axios';
import _ from 'lodash';


function WeatherData(props) {
    const [data, setData] = React.useState([]);

    const apiURL = 'http://api.weatherapi.com/v1/current.json?key=3e2b23202a804627a5c115738222701&q=Moscow&aqi=no';

    React.useEffect(() => {
        axios.get(apiURL)
            .then(res => {
                console.log(res.data.current.cloud);

                setData(Object.entries(res.data.location));
            })
            .catch(error => {
                console.log(error);
            })

    }, [])

    return <ul>{data.map((item, index) => <li key={index}>{item}</li>)}</ul>;
};

export default WeatherData;
