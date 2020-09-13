import React, { useState, useEffect } from 'react';
import { LOCAL_STORAGE, SCREENS } from '../../../common/Constants';

import './styles/LoginComponentStyle.css'

function LoginComponent(props) {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    function inputChange(value, type) {
        if (type == 'username') {
            setUserName(value)
        } else {
            setPassword(value)
        }
    }
    function onLogin() {
        var user = userName.trim();
        var pass = password.trim();
        if (user == '') {
            alert('Please enter username')
        } else if (pass == '') {
            alert('Please enter password')
        } else {
            validUser(user, pass);
        }
    }
    function validUser(user, pass) {
        var getUserDetails = localStorage.getItem(LOCAL_STORAGE.USER_DETAILS);
        var parseUserDetails = JSON.parse(getUserDetails);
        var userDetails = parseUserDetails != null ? parseUserDetails : [];
        var userData = userDetails.find((item) => (item.username == user && item.password == pass));
        if (userData) {
            var getUserDetails = localStorage.setItem(LOCAL_STORAGE.LOGIN_USER, JSON.stringify(userData));
            props.history.push(SCREENS.HOME);
        } else {
            alert('User not exist')
        }
    }
    return (
        <div className="login-wrap">
            <input value={userName} onChange={(e) => inputChange(e.target.value, 'username')} />
            <br />
            <br />
            <input type='password' value={password} onChange={(e) => inputChange(e.target.value, 'password')} />
            <br />
            <br />
            <input type='button' value='login' onClick={() => onLogin()} />
        </div>
    )
}
export default LoginComponent;

