import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Nav from './Nav';
import PlayerTable from './PlayerTable';
import PlayerForm from './PlayerForm';

class App extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div className="container">
                        <Nav />
                        <Route exact path="/" component={PlayerTable} /> 
                        <Route exact path="/table" component={PlayerTable} />
                        <Route exact path="/form" component={PlayerForm} />
                        <Route path="/form/:id" component={PlayerForm} />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
};

export default connect(null, actions)(App);