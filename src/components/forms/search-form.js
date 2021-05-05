import React, { useState } from 'react';
import '../../styles/forms/search-form.css';
// import {updateVideoList} from '../../redux/actions/index';
import { connect } from 'react-redux';
import store from '../../redux/store';
import { search, videoInfo } from '../../services/youtube';

const SearchForm = ({updateVideoList}) => {

    const [input, setInput] = useState('');

    // console.log(store.getState());

    const onSubmit = (event) => {
        event.preventDefault();
        search('dddd');
        // updateVideoList();
    }

    const onChange = (event) => {
        setInput(event.target.value);
    }

    return(
        <form className="search__form" onSubmit={onSubmit}>
            <div className="form__title">Поиск видео</div>
            <div className="form__body">
                <input className="form__field" onChange={onChange} type="text" placeholder="Что хотите посмотреть?"/>
                <input className="form__submit" type="submit" value="Найти"/>
            </div>
        </form>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        // updateVideoList: () => updateVideoList(dispatch)
    }
}

export default connect(null, mapDispatchToProps)(SearchForm);