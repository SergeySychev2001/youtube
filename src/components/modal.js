import React, { useEffect } from 'react';
import '../styles/modal.css';

const Modal = ({disableModal, children}) => {

    const setModalIsInvisible = (event) => {
        if(event.target.className === 'modal'){
            disableModal()
        }
    }

    useEffect(() => {
        document.querySelector('html').style.overflow = 'hidden';
        return () => document.querySelector('html').style.overflow = 'overlay';
    }, []);

    return(
        <div className="modal" onClick={setModalIsInvisible}>
            {children}
        </div>
    )
}

export default Modal;