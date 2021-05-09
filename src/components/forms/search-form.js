import React, { useEffect, useState } from 'react';
import '../../styles/forms/search-form.css';
import {updateVideoList} from '../../redux/actions/index';
import { connect } from 'react-redux';
import favourite from '../../image/favourites/favourites.svg';
import Modal from '../modal';

const SearchForm = ({updateVideoList, requestName}) => {

    const [input, setInput] = useState('');
    const [modalMode, setModalMode] = useState(false);

    useEffect(() => {
        if(requestName){
            setInput(requestName);
        }
    }, [requestName]);

    const handleSubmit = (event) => {
        event.preventDefault();
        updateVideoList(input);
    }

    const handleChange = (event) => {
        setInput(event.target.value);
    }

    const modalContent = modalMode ? (<Modal input={input} disableModal={() => setModalMode(false)}/>) : null;

    modalMode ? document.querySelector('html').style.overflow = 'hidden' : 
    document.querySelector('html').style.overflow = 'overlay';

    return(
        <>
        <form className="search__form" onSubmit={handleSubmit}>
            <div className="form__title">Поиск видео</div>
            <div className="form__body">
                <input className="form__field" onChange={handleChange} value={input} type="text" placeholder="Что хотите посмотреть?"/>
                <input className="form__submit" type="submit" value="Найти"/>
                <div className="form__favourite-btn"><img onClick={() => setModalMode(true)} src={favourite}/></div>
            </div>
        </form>
        {modalContent}
        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateVideoList: updateVideoList(dispatch),
    }
}

export default connect(null, mapDispatchToProps)(SearchForm);