import axios from 'axios';
import React, { useState } from 'react';
import { connect } from 'react-redux';
// import { useLocation, withRouter } from 'react-router';
import { signIn } from '../../redux/actions';
import '../../styles/forms/authorization-form.css';

const AuthorizationForm = ({signIn}) => {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [isWrongAuth, setIsWrongAuth] = useState(false);

    const authorization = (userId) => {
        let u = new Uint32Array(1);
        window.crypto.getRandomValues(u);
        let str = u[0].toString(16).toUpperCase();
        sessionStorage.setItem('userId', userId);
        sessionStorage.setItem('token', `${'00000000'.slice(str.length)}${str}`);
        // history.push('/main');
        signIn();
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.get('http://localhost:3000/credentials')
        .then(res => {
            const userData = res.data.find(item => (item.login === login) && (item.password === password));
            if (userData){
                setIsWrongAuth(false);
                authorization(+userData.id);
            }else{
                setIsWrongAuth(true);
            }
        });
    };

    const handleChange = (e) => {
        switch(e.target.name){
            case "login": setLogin(e.target.value);
                break;
            case "password": setPassword(e.target.value);
                break;
        }
    };

    const wrongAuth = isWrongAuth ? <div className="form__wrongAuth">Неверный логин или пароль</div> : null;

    return(
        <form onSubmit={handleSubmit} className="authorization__form">
            <div className="form__title">Вход</div>
            <input className="form__field" type="text" name="login" onChange={handleChange}/>
            <input className="form__field" type="password" name="password" onChange={handleChange}/>
            <input className="form__submit" type="submit" name="submit"></input>
            {wrongAuth}
        </form>
    )
}

const mapDispatchToProps = (dispatch) => {
    return{
        signIn: () => dispatch(signIn())
    }
}

export default connect(null, mapDispatchToProps)(AuthorizationForm); 