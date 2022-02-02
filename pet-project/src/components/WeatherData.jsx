import React from 'react';
import axios from 'axios';
import _ from 'lodash';
import Weather from './Weather';


function WeatherData(props) {
    const [data, setData] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const source = axios.CancelToken.source()
        axios.get(props.apiURL, { cancelToken: source.token })
            .then(res => {
                let items = res.data.forecast.forecastday;

                setData(_.slice(Object.entries(res.data.location), 0, 1));
                setData(data => [...data, items[0], items[1], items[2]]);
            })
            .then(() => {
                setLoading(false)
                source.cancel();
            })
            .catch(error => {
                console.log(error);
            })
    }, [props.apiURL])

    return <div>
        {loading && <span>Loading</span>}
        {!loading && <Weather loading={loading} nameHead={data[0][1]} data={data.slice(1)} />}
    </div>
};

export default WeatherData;
