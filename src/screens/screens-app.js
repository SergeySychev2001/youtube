import React from 'react';
import { Route, Switch } from 'react-router';
import Authorization from '../components/pages/authorization';
import Main from '../components/pages/main';

const ScreensApp = () => {
    return(
        <Switch>
                <Route path="/authorization" component={Authorization}/>
                <Route path="/main" component={Main}/>
        </Switch>
    )
}

export default ScreensApp;