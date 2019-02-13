import {Book} from "../../../model/Book";

export interface IBookEditModalProps {
    id: number,
    onEditBook: any,
    onCloseModal: any,
    show: boolean,
    books: Book[];
}