import React from 'react';
import { UserData } from "../data/Data";
import styled from '@emotion/styled';

import { getCharts } from '../data/Charts';
import _ from 'lodash';
import { NavLink, Outlet } from 'react-router-dom';
const ChartsNav = styled.div`
    width:fit-content;
    display: inline-block;
    vertical-align:top;
    flex-direction: column;
        &>a{
        color: rgb(128, 122, 122);
        width:120px;
        padding: 10px 20px;
        text-decoration: none;
            &:hover{
                background-color: rgba(238, 237, 237, 0.548);
    };
`;

const App = () => {
    const charts = getCharts();

    return (
        <>
            <ChartsNav>
                {
                    _.map(charts, (item, index) => <NavLink
                        style={({ isActive }) => ({
                            display: "block",
                            margin: "1rem 0",
                            color: isActive ? "red" : ""
                        })}
                        key={index}
                        to={item.name}>{item.name}</NavLink>)
                }
            </ChartsNav>
            <Outlet />
        </>
    );
}



export default App;