import React from 'react';
import '../../styles/pages/main.css';
import Body from './main/body';

import Header from './main/header';

const Main = () => {
    return(
        <div className="main">
            <Header/>
            <Body/>
        </div>
    )
}

export default Main;
