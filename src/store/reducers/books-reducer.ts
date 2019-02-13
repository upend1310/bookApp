import {Book} from "../../model/Book";
import {ADD_BOOK, DELETE_BOOK, EDIT_BOOK} from "../actions/book-actions";

const booksReducer = (state: Book[] = [], action: any) => {
    let newState: Book[] = [];
    switch (action.type) {
        case ADD_BOOK:
            newState = [
                ...state,
                action.payload.book
            ];
            console.log(newState);
            return newState;
        case EDIT_BOOK:
            newState = [
                ...state.filter(book => book.id !== action.payload.book.id),
                action.payload.book
            ];
            return newState;
        case DELETE_BOOK:
            return state.filter(book => book.id !== action.payload.id);
        default:
            return state;
    }
}

export default booksReducer;