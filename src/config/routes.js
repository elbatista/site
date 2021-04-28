import React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';
import Home from '../screens/home';
import About from '../screens/aboutme/viewController';

export default () => (
    <HashRouter>
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route strict path="/about"  >
                <About/>
            </Route>
        </Switch>
    </HashRouter>
);
