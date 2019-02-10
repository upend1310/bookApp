import * as React from 'react';
import {IBookListProps} from "./types/IBookListProps";
import {Book} from "../../model/Book";
import BookCloseButton from "../book-close-button/BookCloseButton";
import BookEditButton from "../book-edit-button/BookEditButton";
import { Table} from "react-bootstrap";

class BookList extends React.Component<IBookListProps, {}> {

    constructor(props: IBookListProps, context: any) {
        super(props, context);
    }

    public render() {
        return (
            <Table striped={true} bordered={true}>
                <thead>
                    <tr>
                        <th>Book</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    { this.renderBooks() }
                </tbody>
            </Table>
        )
    };

    public renderBooks = () => {
        return this.props.books.map((book: Book, index: number) => {
            return (
                <tr className="text-left" key={index}>
                    <td className="col-xs-10">{ book.description }</td>
                    <td>
                        <BookEditButton id={book.id}/>
                        <BookCloseButton id={book.id}/>
                    </td>
                </tr>
            );
        });
    }
}

export default BookList;
