import * as React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

const NavigationBar: React.SFC<{}> = () => {
    return (
        <div className="nav-container nav-color topBotomBordersOut">
            <Link className="nav-link" to="/home">HOME</Link>
            <Link className="nav-link" to="/books">BOOKS</Link>
        </div>
    );
}

export default NavigationBar;