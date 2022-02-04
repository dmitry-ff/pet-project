import React from 'react';
import { Chart as ChartJS } from 'chart.js/auto';
import { UserData } from "../data/Data";
import { Line, Bar, Pie, Doughnut } from 'react-chartjs-2';
import styled from '@emotion/styled';


const AppCharts = styled.div`
    width: 500px;
    margin: auto;
    display: flex;
    flex-direction: column;
`

const App = () => {
    const [show, setShow] = React.useState(true);
    const [userData, setUserData] = React.useState(UserData)

    const showHandler = (e) => {
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
                <AppCharts>
                    <Bar data={userData} />
                    <Line data={userData} />
                    <Pie data={userData} />
                    <Doughnut data={userData} />
                </AppCharts>
            }
        </>
    );
}




export default App;