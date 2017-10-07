import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
    renderLinks() {
        return [
            <li className="nav-item" key={1}><Link className="nav-link" to="/table">Player Table</Link></li>,
            <li className="nav-item" key={2}><Link className="nav-link" to="/form">Player Form</Link></li>
        ];
    }
    render() {
        return (
            <nav className="navbar navbar-light">
                <Link to="/" className="navbar-brand">Quidditch Hooligans</Link>
                <ul className="nav navbar-nav">
                    {this.renderLinks()}
                </ul>
            </nav>
        );
    }
}

export default Nav;