import {createStore} from 'redux';
import allReducers from "./reducers/AllReducers";
import {Book} from "../model/Book";

export interface IAppState {
    books: Book[]
}

const INITIAL_STATE: IAppState = {
    books: []
}

const appStore = createStore(
    allReducers,
    INITIAL_STATE as any,
    ((window) as any).devToolsExtension &&
    ((window) as any).devToolsExtension());
export { appStore };