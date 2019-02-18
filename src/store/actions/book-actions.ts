import {Book} from "../../model/Book";
import axios from 'axios';

export const ADD_BOOK = 'books:addBook';
export const VIEW_BOOKS = 'books:viewBook';

export const API_URL = "http://localhost:8080/books";

export async function apiCall(parameters: any) {
    return await axios(API_URL, {
      method: parameters.type,
      headers: {
        'content-type': 'application/JSON',
      },
      data: parameters.payload
    })
      .then(response => response.data)
      .catch(error => {
        throw error;
      });
};

export function viewBooks(booksList: Book[]) {
    return {
        type: VIEW_BOOKS,
        payload: {
            books: booksList
        }
    }
}

export async function fetchAllBooks(dispatch: any) {
    await apiCall({ type: "GET", payload: ""})
        .then((response) => {
            dispatch(viewBooks(response))
        })
        .catch(error => {
          throw(error);
        });
};

export function addBooks(book: Book) {
    return {
        type: ADD_BOOK,
        payload: {
            book
        }
    }
}

export async function addNewBook(dispatch: any, data: any) {
    return await apiCall({ type: "POST", payload: data})
        .then(response => {
          dispatch(addBooks(response.data));
        })
        .catch(error => {
          throw(error);
        });
};

export async function deleteBook(dispatch: any, data: any) {
    return await axios.delete(API_URL+"/"+data)
        .then(() => {
          dispatch(fetchAllBooks);
        })
        .catch(error => {
          throw(error);
        });
};

export async function editBookAction(dispatch: any, data: any) {
  return await axios.put(API_URL+"/"+data.id, data)
      .then(() => {
        dispatch(fetchAllBooks);
      })
      .catch(error => {
        throw(error);
      });
};