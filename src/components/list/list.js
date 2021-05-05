import React from 'react';
import ListItem from './list-item';
import '../../styles/list/list.css';

const List = () => {
    return(
        <ul className="list">
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
        </ul>
    )
}

export default List;