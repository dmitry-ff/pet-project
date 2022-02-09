import React from 'react'
import { Pie } from 'react-chartjs-2';
import Wrapper from '../Style/Chartwrapper';

function PieChart({ userData }) {
    return (
        <Wrapper>
            <Pie data={userData} />
        </Wrapper>
    )
}

export default PieChart