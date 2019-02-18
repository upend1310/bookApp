import {createStore, applyMiddleware, compose} from 'redux';
import allReducers from "./reducers/AllReducers";
import thunk from 'redux-thunk';

import {Book} from "../model/Book";

export interface IAppState {
    books: Book[]
}

const appStore = compose(applyMiddleware(thunk))(createStore)(allReducers)

export { appStore };