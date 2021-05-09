import React, { useEffect, useState } from 'react';
import ReactSlider from 'react-slider';
import '../../styles/forms/modal-form.css';
import { connect } from 'react-redux';
import {favouriteListItemIsAdded, favouriteListItemIsUpdate} from '../../redux/actions/index';

const ModalForm = ({disableModal, 
                    id, 
                    input,
                    favouriteList, 
                    favouriteListItemIsAdded, 
                    favouriteListItemIsUpdate}) => {

    const   [request, setRequest] = useState(''),
            [title, setTitle] = useState(''),
            [selector, setSelector] = useState('По дате загрузки'),
            [sliderCount, setSliderCount] = useState(12);

    useEffect(() => {
        if(input){
            setRequest(input);
        }
        if(id) {
            const favouriteListItem = favouriteList.find((item, idx) => idx === +id);
            setRequest(favouriteListItem.requireName);
            setTitle(favouriteListItem.title);
            setSelector(favouriteListItem.sortBy);
            setSliderCount(favouriteListItem.count);
        }
    }, [id, input]);

    const handleChange = (event) => {
        switch(event.target.name){
            case 'request': setRequest(event.target.value); 
                break;
            case 'title': setTitle(event.target.value); 
                break;
            case 'selector': setSelector(event.target.value); 
                break;
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            requireName: request,
            title: title,
            sortBy: selector,
            count: sliderCount
        };
        if(id){
            favouriteListItemIsUpdate(id, data);
            disableModal();
            return
        }
        favouriteListItemIsAdded(data);
        disableModal();
    }

    return(
        <form className="modal__form" onSubmit={handleSubmit}>
            <div className="form__title">Сохранить запрос</div>
            <div className="form__field">
                <div className="field__title">Запрос</div>
                <input  type="text" 
                        className="field__field" 
                        name="request" 
                        value={request}
                        onChange={handleChange}/>
            </div>
            <div className="form__field">
                <div className="field__title">* Название</div>
                <input  type="text"
                        name="title"
                        className="field__field"
                        value={title}
                        onChange={handleChange}/>
            </div>
            <div className="form__field">
                <div className="field__title">Сортировать по</div>
                <select className="field__field" 
                        name="selector" 
                        value={selector}  
                        onChange={handleChange}>
                    <option value="relevance">По релевантности</option>
                    <option value="date">По дате загрузки</option>
                    <option value="viewCount">По числу просмотров</option>
                    <option value="rating">По рейтингу</option>
                </select>
            </div>
            <div className="form__slider">
                <div className="slider__title">
                    Максимальное количество
                </div>
                <div className="slider__body">
                    <ReactSlider
                        className="slider"
                        max={50}
                        thumbClassName="slider__thumb"
                        trackClassName="slider__track"
                        value={sliderCount}
                        onChange={setSliderCount}
                        renderThumb={(props) => {
                            return <div {...props}></div>;
                        }}
                    /> 
                    <div className="slider__count">
                        {sliderCount}
                    </div> 
                </div>      
            </div>
            <div className="form__buttons">
                <input type="reset" value="Не сохранять" onClick={disableModal} className="buttons__cancel"/>
                <input type="submit" value="Сохранить" className="buttons__submit"/>
            </div>
        </form>
    )
}

const mapStateToProps = ({favouriteList}) => {
    return {
        favouriteList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        favouriteListItemIsAdded: (data) => dispatch(favouriteListItemIsAdded(data)),
        favouriteListItemIsUpdate: (id, data) => dispatch(favouriteListItemIsUpdate(id, data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalForm);