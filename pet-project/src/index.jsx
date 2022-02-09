import React from "react";
import ReactDOM from 'react-dom';
import App from './pages/App'
import {
    BrowserRouter,
    Route,
    Routes
} from 'react-router-dom';
import WeatherCheck from "./pages/WeatherCheck";
import Navigation from "./components/Navigation";
import { Chart as ChartJS } from 'chart.js/auto';
import { css, Global } from '@emotion/react';
import LineChart from "./Charts/LineChart";
import PieChart from "./Charts/PieChart";
import DoughnutChart from "./Charts/DoughnutChart";
import BarChart from "./Charts/BarChart";
import { UserData } from './data/Data';
import styled from '@emotion/styled'

const StyledComp = styled.div`
    display:inline-block;
    padding:1rem;
    
`;

ReactDOM.render(
    <>
        <Global styles={css`
            body{
                margin: 0;
                box-sizing: border-box;
                font-family: 'Roboto';
                background-color: rgb(255, 255, 255);
            }
        `} />
        <BrowserRouter >
            <Navigation />
            <Routes>
                <Route path='/' element={<App />} >
                    <Route
                        index
                        element={<StyledComp>Select a chart!</StyledComp>}
                    />
                    <Route path='LineChart' element={<LineChart userData={UserData} />} />
                    <Route path='PieChart' element={<PieChart userData={UserData} />} />
                    <Route path='DoughnutChart' element={<DoughnutChart userData={UserData} />} />
                    <Route path='BarChart' element={<BarChart userData={UserData} />} />

                </Route>
                <Route path='weather' element={<WeatherCheck />} />
                <Route
                    path="*"
                    element={
                        <main style={{ padding: '1rem' }}>
                            <p>There's nothing here!</p>
                        </main>
                    }
                />
            </Routes>
        </BrowserRouter>

    </>,
    document.getElementById('root')
);