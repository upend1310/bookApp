import {Book} from "../../model/Book";

export const ADD_BOOK = 'books:addBook';
export const DELETE_BOOK = 'books:deleteBook';
export const EDIT_BOOK = 'books:editBook';

export function addBook(newBook: Book) {
    return {
        type: ADD_BOOK,
        payload: {
            book: newBook
        }
    }
}

export function deleteBook(id: number) {
    return {
        type: DELETE_BOOK,
        payload: {
            id
        }
    }
}

export function editBook(newBook: Book) {
    return {
        type: EDIT_BOOK,
        payload: {
            book: newBook
        }
    }
}