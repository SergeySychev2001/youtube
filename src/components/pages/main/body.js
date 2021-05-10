import React from 'react';
import '../../../styles/pages/main/body.css';

import ScreensMain from '../../../screens/screens-main';

const Body = () => {
    return(
        <main className="main__body">
            <div className="container">
                <ScreensMain/>
            </div>
        </main>
    )
}

export default Body;
