import React from 'react'
import { Bar } from 'react-chartjs-2';
import Wrapper from '../Style/Chartwrapper';

function BarChart({ userData }) {
    return (
        <Wrapper>
            <Bar data={userData} />
        </Wrapper>
    )
}

export default BarChart