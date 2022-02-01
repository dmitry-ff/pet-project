import React from 'react';
import axios from 'axios';
import _ from 'lodash';
import Weather from './Weather';


function WeatherData(props) {
    const [data, setData] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    const apiURL = `http://api.weatherapi.com/v1/current.json?key=3e2b23202a804627a5c115738222701&q=${props.q}&aqi=no`;

    React.useEffect(() => {
        axios.get(apiURL)
            .then(res => {
                setData(_.slice(Object.entries(res.data.location), 0, 3));
                return res;
            })
            .then(res => {
                let buf = _.slice(Object.entries(res.data.current.condition), 0, 2);
                setData(data => [...data, ...buf]);
                return res;
            })
            .then(res => {
                let buf = _.slice(Object.entries(res.data.current), 2, 3);
                setData(data => [...data, ...buf]);
                buf = _.slice(Object.entries(res.data.current), 7, 8);
                setData(data => [...data, ...buf]);
                buf = _.slice(Object.entries(res.data.current), 16, 17);
                setData(data => [...data, ...buf]);
                setLoading(false);

                buf = _.slice(Object.entries(res.data.current), 4, 5);
                setData(data => [...data, ...buf]);
                return res;
            })
            .catch(error => {
                console.log(error);
            })

    }, [apiURL])

    return <div>
        {loading && <span>Loading</span>}
        {!loading && <Weather loading={loading} data={data} />}
    </div>
};

export default WeatherData;
