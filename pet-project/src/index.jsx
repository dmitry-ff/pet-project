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
import './css/Global.css'


ReactDOM.render(
    <BrowserRouter >
        <Navigation />
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='weather-check' element={<WeatherCheck />} />
        </Routes>
    </BrowserRouter>,
    document.getElementById('root')
);