import React from 'react';
import '../../styles/list/list-item.css';

const ListItem = () => {
    return(
        <li className="list__item">
            <div className="item__video"></div>
            <div className="item__body">
                <div className="item__title">Как кормить кота</div>
                <div className="item__description">Ветеренария и хуй знает что</div>
            </div>
        </li>
    )
}

export default ListItem;