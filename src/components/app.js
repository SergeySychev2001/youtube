import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../redux/actions';
import ScreensApp from '../screens/screens-app';
import '../styles/app.css';

const App = ({signIn}) => {

    useEffect(() => {
        sessionStorage.getItem('userId') ? signIn() : null;
    }, []);

    return(
        <div className="app">
            <ScreensApp/>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return{
        signIn: () => dispatch(signIn())
    }
}

export default connect(null, mapDispatchToProps)(App);