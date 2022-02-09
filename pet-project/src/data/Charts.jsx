import { Pie, Doughnut, Bar, Line } from 'react-chartjs-2'
import { UserData } from './Data'

const charts = [
    {
        name: 'BarChart',
        element: <Bar data={UserData} />
    },
    {
        name: 'LineChart',
        element: <Line data={UserData} />
    },
    {
        name: 'DoughnutChart',
        element: <Doughnut data={UserData} />
    },
    {
        name: 'PieChart',
        element: <Pie data={UserData} />
    },
];

export function getCharts() {
    return charts;
}