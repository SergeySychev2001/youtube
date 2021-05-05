import React from 'react';
import { Route, Switch } from 'react-router';
import Favourites from '../components/pages/main/favourites';
import Search from '../components/pages/main/search';

const ScreensMain = () => {
    return(
        <Switch>
            <Route path="/main" exact component={Search}/>
            <Route path="/main/favourites" component={Favourites}/>
        </Switch>
    )
}

export default ScreensMain;