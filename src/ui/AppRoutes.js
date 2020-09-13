import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { SCREENS } from '../common/Constants';
import LoginComponent from './screens/login/LoginComponent';
import RegisterComponent from './screens/register/RegisterComponent';

function AppRoutes(props) {

    return (
        <Router>
            <Switch>
                <Route path={SCREENS.LOGIN} component={LoginComponent} />
                <Route path={SCREENS.REGISTER} component={RegisterComponent} />
            </Switch>
        </Router>
    );
}

export default AppRoutes;