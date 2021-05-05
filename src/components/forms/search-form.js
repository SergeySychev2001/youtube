import React, { useState } from 'react';
import '../../styles/forms/search-form.css';
import {updateVideoList, modalIsVisible} from '../../redux/actions/index';
import { connect } from 'react-redux';
import favourite from '../../image/favourites/favourites.svg';
import Modal from '../modal';

const SearchForm = ({updateVideoList, modal, modalIsVisible}) => {

    const [input, setInput] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        updateVideoList(input);
    }

    const onChange = (event) => {
        setInput(event.target.value);
    }

    const modalContent = modal ? (<Modal/>) : null;

    return(
        <form className="search__form" onSubmit={onSubmit}>
            <div className="form__title">Поиск видео</div>
            <div className="form__body">
                <input className="form__field" onChange={onChange} type="text" placeholder="Что хотите посмотреть?"/>
                <input className="form__submit" type="submit" value="Найти"/>
                <div className="form__favourite-btn"><img onClick={modalIsVisible} src={favourite}/></div>
            </div>
            {modalContent}
        </form>
    )
}

const mapStateToProps = ({modal}) => {
    return {
        modal: modal
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateVideoList: updateVideoList(dispatch),
        modalIsVisible: () => dispatch(modalIsVisible())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);