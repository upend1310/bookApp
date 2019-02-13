import * as React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

class NavigationBar extends React.Component<{}, {}> {

    constructor(props: {}, context: any) {
        super(props, context);
    }


    public render() {
        return (
            <div className="nav-container nav-color topBotomBordersOut">
                <Link className="nav-link" to="/home">HOME</Link>
                <Link className="nav-link" to="/books">BOOKS</Link>
            </div>
        );
    }
}

export default NavigationBar;