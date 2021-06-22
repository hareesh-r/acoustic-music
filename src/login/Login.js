import React from 'react'
import './Login.css';
import { loginUrl } from '../spotify'

function Login() {
    return (
        <div className="login">
            <img
                src="https://firebasestorage.googleapis.com/v0/b/spotify-raghavendra.appspot.com/o/logo.jpg?alt=media&token=f5835577-582c-4bde-861d-0a9127634b8e"
                alt="Acoustic Logo Here" />
            <a href={loginUrl}>Login with Spotify</a>
        </div>
    )
}

export default Login