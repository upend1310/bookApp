import Home from '../home/Home';
import NavigationBar from '../nav-bar/NavBar';
import * as React from 'react';
import './App.css';
import BookList from "../book-list/BookList";
import { Route, HashRouter, Switch } from 'react-router-dom';

export const App: React.SFC<{}> = () => {
    return (
        <div>
            <HashRouter>
                <div>
                    <NavigationBar />
                    <Switch>
                        <Route exact={true} path="/" component={Home} />
                        <Route path="/home" component={Home} />
                        <Route path="/books" component={BookList} />
                    </Switch>
                </div>
            </HashRouter>
        </div>
    )
}

export default App;
