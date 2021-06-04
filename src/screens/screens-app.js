import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router';
import Authorization from '../components/pages/authorization';
import Main from '../components/pages/main';

const ScreensApp = ({loggedIn, history}) => {
    useEffect(() => {
        loggedIn ? history.push('/main') : history.push('/authorization');
    }, [loggedIn])
    return(
        <Switch>
            <Route path="/main" component={Main}/>
            <Route path="/authorization" component={Authorization}/>
        </Switch>
    )
}

const mapStateToProps = ({loggedIn}) => {
    return{
        loggedIn
    }
}

export default connect(mapStateToProps)(withRouter(ScreensApp)); 