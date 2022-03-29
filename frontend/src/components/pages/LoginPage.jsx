import React from "react";
import {GoogleLogin} from "react-google-login";
import {refreshTokenSetup} from '../../utils/refreshToken'
import {useState} from "react"

const clientId = "945406263981-q6r8d575nd6orns70p25s95l92odtrrq.apps.googleusercontent.com"

export default function LoginPage(props){
    const [user, setUser] = useState();
    // useImperativeHandle(props.ref, () => ({getUser: () => {return user}}), [user]);

    const onSuccess = (res) => {
        if(typeof (res.profileObj) === "undefined"){   
        }
        else{
            setUser(res.profileObj); 
            props.setUser(res.profileObj);
        }
        refreshTokenSetup(res);
    }

    const onFailure = (res) => {
        console.log('[Login Failure] Response: ',res)
    }

    return(
        <GoogleLogin
            clientId={clientId}
            buttonText="Login"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            referrerPolicy="no-referrer"
            style={{marginTop:'30px'}}
            isSignedIn={true} />
    )
}