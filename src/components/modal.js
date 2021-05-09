import React from 'react';
import '../styles/modal.css';
import ModalForm from './forms/modal-form';

const Modal = ({id, input, disableModal}) => {

    const setModalIsInvisible = (event) => {
        if(event.target.className === 'modal'){
            disableModal()
        }
    }

    return(
        <div className="modal" onClick={setModalIsInvisible}>
            <ModalForm input={input} disableModal={disableModal} id={id}/>
        </div>
    )
}

export default Modal;