import _ from 'lodash';
import React from 'react';
import '../css/WeatherData.css'
import { WEEK_DAYS } from '../CONST/Const'
function Weather(props) {
    const [state, setState] = React.useState(false)
    return <div className='weatherData'>
        <div className='weatherToday'>
            {!props.loading && <ul>{_.map(props.data, (item, index) => <li key={index}>{item}</li>)}</ul>}
        </div>
        <div className='weatherWeek'>
            {!props.loading && <ul>{_.map(props.data, (item, index) => <li key={index + props.data.length}>{item}</li>)}</ul>}

        </div>
    </div>;
}

export default Weather;
