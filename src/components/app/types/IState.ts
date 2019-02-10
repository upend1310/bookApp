import {Book} from "../../../model/Book";

export interface IState {
    currentBook: string;
    books: Book[];
}