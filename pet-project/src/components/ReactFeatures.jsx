import React, { forwardRef } from 'react'
import styled from '@emotion/styled';
import _ from 'lodash'
import { MONTH_S } from '../CONST/Const';
import { Button } from '@mui/material';
import Modal from './Modal';


const CeneteredComp = styled.div`
    height:90vh;
    display:flex;
    align-items:center;
    justify-content:center;
`
const ForwardRef = forwardRef((props, ref) => {
    const { onClick } = props;
    return (
        <div ref={ref}></div>
    )
})

function createUser(firstWord, secondWord) {
    const user = { firstWord, secondWord };
    console.log(user);
    return user;
}

function ReactFeatures() {
    const ref = React.useRef();
    const [message, setMessage] = React.useState('Hello');
    const [count, setCount] = React.useState(0);
    const [name, setName] = React.useState('Dmitry');
    const [surname, setSurname] = React.useState('Kozlov');

    const user = React.useMemo(() => { createUser(name, surname) }, [name, surname])

    const sayHi = React.useCallback((text) => {
        console.log(text);
    }, []);


    React.useEffect(() => {
        sayHi(message);
        console.log(ref)
    }, [sayHi, message, ref]);

    return (
        <>
            <Modal />
            <CeneteredComp>
                <Button
                    sx={{
                        width: 'fit-content',
                        alignSelf: 'center',
                    }}
                    margin='normal'
                    color='warning'
                    variant="outlined"
                    onClick={() => setCount(count => count + 1)}>{count}</Button>
                <ForwardRef onClick={() => console.log('Click')} ref={ref} />

            </CeneteredComp>
        </>
    )
}

export default ReactFeatures