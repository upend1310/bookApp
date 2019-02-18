import {Book} from "../../../model/Book";

export interface IBookListProps {
    books: Book[],
    onFetchAllBooks: any
}