import React, {Component} from 'react';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar">
                <i className="navbar-logo fa-solid fa-clover"></i>
                <span>Habit Tracker</span>
                <span className="navbar-count">{this.props.totalCount}</span>
            </nav>
        );
    }
}

export default Navbar;