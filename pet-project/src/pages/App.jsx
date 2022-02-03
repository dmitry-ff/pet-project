import React from 'react';
import { Chart as ChartJS } from 'chart.js/auto';
import '../css/App.css';
import { UserData } from "../data/Data";
import { Line, Bar, Pie, Doughnut } from 'react-chartjs-2';

const App = () => {
    const [show, setShow] = React.useState(true);
    const [userData, setUserData] = React.useState(UserData)

    const showHandler = () => {
        setShow(show => !show);
    };
    return (
        <>
            <div >
                <button onClick={showHandler}>Show</button>
            </div>
            {
                !show &&
                <div>Нечего показать</div>
            }
            {
                show &&
                < div className="AppFlex">
                    <Bar data={userData} />
                    <Line data={userData} />
                    <Pie data={userData} />
                    <Doughnut data={userData} />
                </div>
            }
        </>
    );
}




export default App;