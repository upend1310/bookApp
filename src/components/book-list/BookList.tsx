import * as React from 'react';
import { IBookListProps } from "./types/IBookListProps";
// import { IBookListState } from "./types/IBookListState";
import { Book } from "../../model/Book";
import { connect } from "react-redux";
import BookCloseButton from "../book-close-button/BookCloseButton";
import BookEditButton from "../book-edit-button/BookEditButton";
import './BookList.css';
import {fetchAllBooks} from "../../store/actions/book-actions"

export class BookList extends React.Component<IBookListProps, {}> {

    constructor(props: IBookListProps, context: any) {
        super(props, context);
    }

    public componentDidMount() {
        this.props.onFetchAllBooks();
    }

    public render() {
        return (
            <div className="container-fluid">
                {this.props.books.length>0 ? <div className="disp-flex">{this.renderBooks()}</div> : <h1 className="header text-center">No Books Added</h1>}
            </div>
        )
    };

    public renderBooks = () => {
        return this.props.books.map((book: Book, index: number) => {
            return (
                <figure className="book-card" key={index}>
                    <img src={require('../../assets/cover.jpg')} alt="book image" />
                    <div className="book-id"><span className="day">{book.id}</span></div>
                    <figcaption>
                        <h3>{book.description.toUpperCase()}</h3>
                        <p>“If you don’t like to read, you haven’t found the right book.” – J.K. Rowling</p>
                        <BookEditButton id={book.id} />
                        <BookCloseButton id={book.id} />
                    </figcaption>
                </figure>
            );
        });
    }
}

const mapStateToProps = (state: IBookListProps) => ({
    books: state.books
})

const mapDispatchToProps = (dispatch: any) => ({
    onFetchAllBooks: () => dispatch(fetchAllBooks)
})

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
