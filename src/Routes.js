import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import Login from './components/Login';
import Home from './components/Home';
import Game from './components/Game';
import history from './history'
export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/Login" exact component={Login} />
                    <Route path="/Game" exact component={Game} />
                    <Route path="/Home" exact component={Home} />

                </Switch>
            </Router>
        )
    }
}