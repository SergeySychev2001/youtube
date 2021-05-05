import React from 'react';
import '../../styles/pages/authorization.css';

import AuthorizationForm from '../forms/authorization-form';

const Authorization = () => {
    return(
        <div className="authorization">
            <AuthorizationForm/>
        </div>
    )
}

export default Authorization;