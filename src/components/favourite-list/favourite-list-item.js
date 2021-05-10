import React, { useState } from 'react';
import '../../styles/favourite-list/favourite-list-item.css';
import Modal from '../modal';
import {favouriteListItemIsDeleted, updateVideoList} from '../../redux/actions/index';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import FavouriteForm from '../forms/favourite-form';


const FavouriteListItem = ({  
                            id, 
                            title, 
                            favouriteList,
                            favouriteListItemIsDeleted,
                            updateVideoList,
                            history
                        }) => {

    const [modalMode, setModalMode] = useState(false);

    const modalContent = modalMode ? 
    (<Modal disableModal={() => setModalMode(false)}>
        <FavouriteForm id={`${id}`} disableModal={() => setModalMode(false)}/>
    </Modal>) 
    : null;

    const toSearchVideos = () => {
        const requestName = favouriteList[id].requireName;
        const maxResults = favouriteList[id].count;
        const order = favouriteList[id].sortBy;
        updateVideoList(requestName, maxResults, order);
        history.push('/main');
    }

    return(
        <>
            <li key={id} className="favourite-list__item">
                <span   className="item__title" 
                        onClick={() => toSearchVideos()}
                >{title}</span>
                <div className="item__btns">
                    <button className="item__edit-btn" 
                            onClick={() => {
                                setModalMode(true);
                                modalMode ? document.querySelector('html').style.overflow = 'hidden' : 
                                document.querySelector('html').style.overflow = 'overlay';
                            }}
                    >Редактировать</button>
                    <button className="item__delete-btn" 
                            onClick={() => favouriteListItemIsDeleted(id)}
                    >Удалить</button>
                </div>
            </li>
            {modalContent}
        </>
    )
}

const mapStateToProps = ({favouriteList}) => {
    return{
        favouriteList
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        favouriteListItemIsDeleted: (id) => dispatch(favouriteListItemIsDeleted(id)),
        updateVideoList: updateVideoList(dispatch)
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FavouriteListItem)); 