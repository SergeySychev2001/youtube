import React from 'react';
import '../../styles/grid/grid-item.css';

const GridItem = () => {
    return(
        <div className="grid__item">
            <div className="item__video"></div>
            <div className="item__title">Как кормить кота</div>
            <div className="item__description">Ветеренария и хуй знает что</div>
        </div>
    )
}

export default GridItem