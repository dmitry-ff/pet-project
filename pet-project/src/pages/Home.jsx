import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styled
  from '@emotion/styled';
import dog from '../img/dogg.svg'

const CenteredHeader = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 90vh;
    h2{
    font-size: 12.5em;
    margin: 0;
    color: rgb(60, 57, 57);
    cursor:pointer;
}
`
const Portal = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    background-color: rgba(0,0,0, .9);
    z-index: 100;
    img{
        cursor:pointer;
    }
`

const Modal = ({ children }) => {
  return (
    <Portal>
      {children}
    </Portal>
  )
}

function Home() {

  const [isOpen, setOpen] = React.useState(false);
  const toggleModal = () => {
    setOpen(isOpen => !isOpen)
  }
  return (
    <>
      <CenteredHeader>
        <h2 onClick={toggleModal}>Home</h2>
      </CenteredHeader>


      {isOpen &&
        ReactDOM.createPortal(<Modal>
          <img style={{ width: '400px' }} src={dog} alt='dog' onClick={toggleModal} />
        </Modal>,
          document.getElementById('modal-root'))
      }
    </>
  )
}

export default Home