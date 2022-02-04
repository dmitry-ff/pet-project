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
                <Route path='/' element={<App />} />
                <Route path='weather' element={<WeatherCheck />} />
            </Routes>
        </BrowserRouter>

    </>,
    document.getElementById('root')
);