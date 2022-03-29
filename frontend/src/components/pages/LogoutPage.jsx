import React, {useState} from 'react';
import {GoogleLogout} from 'react-google-login';

const clientId = "945406263981-q6r8d575nd6orns70p25s95l92odtrrq.apps.googleusercontent.com";

function LogoutPage(props){
    const[user, setUser] = useState();
    const onSuccess = () => {
        setUser(null);
        props.setUser(null);
    };

    return(
        <GoogleLogout 
            onLogoutSuccess={onSuccess}
            clientId={clientId}
            buttonText="Logout">
        </GoogleLogout>
    )
}

export default LogoutPage;