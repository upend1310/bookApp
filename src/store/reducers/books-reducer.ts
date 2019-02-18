import {Book} from "../../model/Book";
import {ADD_BOOK, VIEW_BOOKS} from "../actions/book-actions";

const INITIAL_STATE: Book[] = [];

const booksReducer = (state = INITIAL_STATE, action: any) => {
    let newState: Book[];
    switch (action.type) {
        case VIEW_BOOKS: 
            newState = action.payload.books
            return newState;
        case ADD_BOOK:
            return state;
        default:
            return state;
    }
}

export default booksReducer;