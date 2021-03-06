import React, { useEffect, useState } from 'react';
import ReactSlider from 'react-slider';
import '../../styles/forms/favourite-form.css';
import { connect } from 'react-redux';
import {favouriteListItemIsAdded, favouriteListItemIsUpdate} from '../../redux/actions/index';

const FavouriteForm = ({
                    disableModal, 
                    id = undefined, 
                    input = undefined,
                    favouriteList, 
                    favouriteListItemIsAdded, 
                    favouriteListItemIsUpdate
                }) => {

    const   [request, setRequest] = useState(''),
            [title, setTitle] = useState(''),
            [sortBy, setSortBy] = useState('date'),
            [sliderCount, setSliderCount] = useState(12);

    useEffect(() => {
        if(input){
            setRequest(input);
        }
        if(id) {
            const favouriteListItem = favouriteList.find((item, idx) => idx === +id);
            setRequest(favouriteListItem.requestName);
            setTitle(favouriteListItem.title);
            setSortBy(favouriteListItem.sortBy);
            setSliderCount(favouriteListItem.count);
        }
    }, [id, input]);

    const localStoreChange = (data, id = undefined) => {
        const userId = sessionStorage.getItem('userId');
        const videoList = JSON.parse(localStorage.getItem(userId));
        if(id){
            videoList[id] = data;
            localStorage.setItem(userId, JSON.stringify(videoList));
        }else{
            videoList.push(data);
            localStorage.setItem(userId, JSON.stringify(videoList));
        }
    }

    const handleChange = (event) => {
        switch(event.target.name){
            case 'request': setRequest(event.target.value); 
                break;
            case 'title': setTitle(event.target.value); 
                break;
            case 'selector': setSortBy(event.target.value); 
                break;
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {
            requestName: request,
            title,
            sortBy,
            count: sliderCount
        };
        if(id){
            favouriteListItemIsUpdate(id, data);
            localStoreChange(data, id);
            disableModal();
            return
        }
        favouriteListItemIsAdded(data);
        localStoreChange(data);
        disableModal();
    }

    return(
        <form className="favourite__form" onSubmit={handleSubmit}>
            <div className="form__title">?????????????????? ????????????</div>
            <div className="form__field">
                <div className="field__title">????????????</div>
                <input  type="text" 
                        className="field__field" 
                        name="request" 
                        value={request}
                        onChange={handleChange}/>
            </div>
            <div className="form__field">
                <div className="field__title">* ????????????????</div>
                <input  type="text"
                        name="title"
                        className="field__field"
                        value={title}
                        onChange={handleChange}/>
            </div>
            <div className="form__field">
                <div className="field__title">?????????????????????? ????</div>
                <select className="field__field" 
                        name="selector" 
                        value={sortBy}  
                        onChange={handleChange}>
                    <option value="relevance">???? ??????????????????????????</option>
                    <option value="date">???? ???????? ????????????????</option>
                    <option value="viewCount">???? ?????????? ????????????????????</option>
                    <option value="rating">???? ????????????????</option>
                </select>
            </div>
            <div className="form__slider">
                <div className="slider__title">
                    ???????????????????????? ????????????????????
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
                <input type="reset" value="???? ??????????????????" onClick={disableModal} className="buttons__cancel"/>
                <input type="submit" value="??????????????????" className="buttons__submit"/>
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

export default connect(mapStateToProps, mapDispatchToProps)(FavouriteForm);