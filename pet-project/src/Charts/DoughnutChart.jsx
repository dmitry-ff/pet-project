import React from 'react'
import { Doughnut } from 'react-chartjs-2';
import Wrapper from '../Style/Chartwrapper';

function DoughnutChart({ userData }) {
    return (
        <Wrapper>
            <Doughnut data={userData} />
        </Wrapper>
    )
}

export default DoughnutChart