import React from 'react';
import axios from 'axios';
import _ from 'lodash';
import Weather from './Weather';
import TemperatureChart from './TemperatureChart';

function WeatherData(props) {
    const [data, setData] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        setLoading(true);
        const source = axios.CancelToken.source();
        axios.get(props.apiURL, { cancelToken: source.token })
            .then(res => {
                let items = res.data.forecast.forecastday;
                setData(_.slice(Object.entries(res.data.location), 0, 1));
                setData(data => [...data, ...items]);
                setLoading(false);
                return res;
            })
            .then((res) => {
                source.cancel();
            })
            .catch(error => {
                console.log(error)
            })
    }, [props.apiURL])

    return (
        <>
            {loading && <span>Loading</span>}
            {!loading
                && <div>
                    <Weather loading={loading} nameHead={_.head(data)[1]} data={_.slice(data, 1)} />
                    <TemperatureChart loading={loading} chartData={_.slice(data, 1)} />
                </div>

            }
        </>
    )
};


export default WeatherData;
