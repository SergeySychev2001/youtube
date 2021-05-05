import React from 'react';
import '../styles/filter.css';

import gridSelected from '../image/grid/grid-selected.svg';
import listSelected from '../image/list/list-selected.svg';
import grid from '../image/grid/grid.svg';
import list from '../image/list/list.svg';

const Filter = ({filterType, setFilterType, totalResults, requestName}) => {

    const name = requestName ? `Видео по запросу "${requestName}"` : '';
    const count = totalResults ? `${totalResults}` : ''

    return(
        <div className="filter">
            <div className="filter__header">
                <div className="header__body">
                    <div className="header__name">{name}</div>
                    <div className="header__count">{count}</div>
                </div>
                <div className="header__view">
                    <div className="view__item" onClick={() => setFilterType('list')}>
                        <img src={filterType == 'list' ? listSelected : list}/>
                    </div>
                    <div className="view__item" onClick={() => setFilterType('grid')}>
                        <img src={filterType == 'grid' ? gridSelected : grid}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Filter;