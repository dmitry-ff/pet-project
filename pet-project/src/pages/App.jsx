import BarChart from "../components/BarChart";
import React from 'react';
import { UserData } from '../data/Data'
import LineChart from "../components/LineChart";
import PieChart from "../components/PieChart";
import { Chart as ChartJS } from 'chart.js/auto';
import '../css/App.css';


const App = () => {
    const [userData, setUserData] = React.useState({
        labels: UserData.map(data => data.year),
        datasets: [{
            label: "Users Gained",
            data: UserData.map(data => data.userGain),
            backgroundColor: [
                "#59a696",
                "#40bf5e",
                "#4a64b5",
                "#992fd0",
                "#c83770"
            ],
            borderColor: "black",
            borderWidth: 2,
        }]
    })

    return (
        <div className="AppFlex">
            <BarChart chartData={userData} />
            <LineChart chartData={userData} />
            <PieChart chartData={userData} />
        </div>
    );
}




export default App;