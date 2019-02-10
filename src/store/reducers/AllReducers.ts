import {combineReducers} from "redux";
import booksReducer from "./books-reducer";

const allReducers = combineReducers({
    books: booksReducer
});

export default allReducers;