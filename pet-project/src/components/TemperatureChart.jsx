import _ from "lodash";
import React from "react";
import { MONTH_S } from "../CONST/Const";
import { Chart as ChartJS } from 'chart.js/auto';
import { Line } from 'react-chartjs-2';

function TemperatureChart({ loading, chartData }) {

    const [data, setData] = React.useState({
        labels: _.map(chartData, item => {
            return `${MONTH_S[new Date(item.date).getMonth()]}, ${new Date(item.date).getDay()}`
        }),
        datasets: [
            {
                label: 'max t, °C',
                data: _.map(chartData, item => {
                    return item.day.maxtemp_c;
                }),
                backgroundColor: 'rgba(222, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 3,
            },
            {
                label: 'min t, °C',
                data: _.map(chartData, item => {
                    return item.day.mintemp_c;
                }),
                backgroundColor: 'rgba(1, 99, 132, 0.2)',
                borderColor: 'rgba(1, 99, 132, 1)',
                borderWidth: 3,
            },
        ],
    });

    return <>{!loading && <Line data={data} />}</>
}

export default TemperatureChart;
