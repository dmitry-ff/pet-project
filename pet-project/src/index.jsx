import React from "react";
import ReactDOM from 'react-dom';
import App from './components/App'
import {
    BrowserRouter,
    Route,
    Routes
} from 'react-router-dom';
import WeatherCheck from "./pages/WeatherCheck";
import Navigation from "./components/Navigation";


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