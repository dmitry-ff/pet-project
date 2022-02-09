import React from 'react'
import { Line } from 'react-chartjs-2';
import Wrapper from '../Style/Chartwrapper';


function LineChart({ userData }) {
    return (
        <Wrapper>
            <Line data={userData} />
        </Wrapper>
    )
}

export default LineChart