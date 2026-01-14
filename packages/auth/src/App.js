import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

import SignIn from './components/Signin';
import SignUp from './components/Signup';

const generateClassName = createGenerateClassName({
    productionPrefix: 'au',
});

export default ({ history, onSignIn }) => {
    console.log('AuthApp:', onSignIn);
    return (
        <div>
            <StylesProvider generateClassName={generateClassName}>
                <Router history={history}>
                    <Switch>
                        <Route path="/auth/signin" render={(props) => <SignIn {...props} onSignIn={onSignIn} />} />
                        <Route path="/auth/signup" render={(props) => <SignUp {...props} onSignIn={onSignIn} />} />
                    </Switch>
                </Router>
            </StylesProvider>
        </div>
    )
};