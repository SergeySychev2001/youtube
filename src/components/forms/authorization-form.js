import React from 'react';
import '../../styles/forms/authorization-form.css';

const AuthorizationForm = () => {
    return(
        <form className="authorization__form">
            <div className="form__title">Вход</div>
            <input className="form__field" type="text"/>
            <input className="form__field" type="password"/>
            <input className="form__submit" type="submit"/>
        </form>
    )
}

export default AuthorizationForm;