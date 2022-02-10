import React from 'react'

const modalRootElement = document.getElementById('root-modal');

function Modal(props) {
    const element = React.useMemo(() => {
        document.createElement('div');
    }, []);
    React.useEffect(() => {
        modalRootElement.appendChild(element);

        return () => {
            modalRootElement.removeChild(element)
        }
    })
    return (
        <p>Modal</p>
    )
}

export default Modal;