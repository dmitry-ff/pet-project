import BarChart from "../components/BarChart";
import React from 'react';
import LineChart from "../components/LineChart";
import PieChart from "../components/PieChart";
import { Chart as ChartJS } from 'chart.js/auto';
import '../css/App.css';
import DoughnutChart from "../components/DoughnutChart";
import { UserData } from "../data/Data";


const App = () => {

    const [userData, setUserData] = React.useState(UserData)
    return (
        <div className="AppFlex">
            <BarChart chartData={userData} />
            <LineChart chartData={userData} />
            <PieChart chartData={userData} />
            <DoughnutChart chartData={userData} />
        </div>
    );
}




export default App;