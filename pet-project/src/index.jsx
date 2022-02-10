import React from "react";
import ReactDOM from 'react-dom';
import AllCharts from './pages/AllCharts'
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
import ReactFeatures from "./components/ReactFeatures";
import Modal from "./components/Modal";

const StyledComp = styled.div`
    display:inline-block;
    padding:1rem;
    
`;
const CenteredHeader = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    height:90vh;
    h2{
        font-size:12.5em;
        margin:0;
        color:rgb(60,57,57);
    }
`

ReactDOM.render(
    <>
        <Modal />
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
                <Route path='/' element={
                    <CenteredHeader>
                        <h2>Home</h2>
                    </CenteredHeader>
                } >
                </Route>
                <Route path='Charts' element={<AllCharts />} >
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
                <Route path='reactfeatures' element={<ReactFeatures />} />
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