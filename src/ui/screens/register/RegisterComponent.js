import React, { useState, useEffect } from 'react';
import { randomId } from '../../../common/AppUtils';
import { LOCAL_STORAGE, SCREENS } from '../../../common/Constants';

import './styles/RegisterComponentStyle.css'

function RegisterComponent(props) {

    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setRepassword] = useState('');
    function inputChange(value, type) {
        if (type == 'username') {
            setUserName(value)
        } else if (type == 'password') {
            setPassword(value)
        } else {
            setRepassword(value)
        }
    }
    function onRegister() {
        var user = username.trim();
        var pass = password.trim();
        var repass = repassword.trim();
        if (user == '') {
            alert('Please enter username')
        } else if (pass == '') {
            alert('Please enter password')
        } else if (pass != repass) {
            alert('Password mismatch')
        } else {
            registerUser(user, pass);
        }
    }
    function registerUser(user, pass) {
        var getUserDetails = localStorage.getItem(LOCAL_STORAGE.USER_DETAILS);
        var parseUserDetails = JSON.parse(getUserDetails);
        var userDetails = parseUserDetails != null ? parseUserDetails : [];

        var isUserExist = userDetails.find((item) => (item.name == user));

        if (isUserExist) {
            alert('User Already exist')
        } else {
            var user = {
                id: 'user_' + randomId(),
                username: user,
                password: pass
            };
            userDetails.push(user);
            localStorage.setItem(LOCAL_STORAGE.USER_DETAILS, JSON.stringify(userDetails));
        }
        props.history.push(SCREENS.LOGIN);
    }
    return (
        <div className="login-wrap">
            <input value={username} onChange={(e) => inputChange(e.target.value, 'username')} />
            <br />
            <br />
            <input type='password' value={password} onChange={(e) => inputChange(e.target.value, 'password')} />
            <br />
            <br />
            <input type='password' value={repassword} onChange={(e) => inputChange(e.target.value, 'repassword')} />
            <br />
            <br />
            <input type='button' value='register' onClick={() => onRegister()} />
        </div>
    )
}
export default RegisterComponent;

