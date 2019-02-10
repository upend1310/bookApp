import * as React from 'react';
import './BookForm.css';
import { BookFormState } from "./types/BookFormState";
import { addBook } from "../../store/actions/book-actions";
import { connect } from "react-redux";
import { BookFormProps } from "./types/BookFormProps";
import { Button } from "react-bootstrap";

class BookForm extends React.Component<BookFormProps, BookFormState> {

    constructor(props: BookFormProps, context: any) {
        super(props, context);
        this.state = {
            currentBook: "",
            nextBookId: 0,
            error: false
        }
    }

    public render() {
        return (
            <div className="form-width">
                <form onSubmit={this.handleSubmit}>
                    <input className="form-control" type="text" placeholder="Add a book name"
                        onChange={this.inputChange} value={this.state.currentBook} />
                    {this.state.error && <div className="small badge">*Please enter a book name.</div>}
                    <div className="clearfix" />
                    <Button className="mar-top-20" bsStyle="info" type="submit">Add Book</Button>
                </form>
            </div>
        )
    }


    private onAddBook() {
        if(this.state.currentBook !== ''){
            this.props.onAddBook({
                id: this.state.nextBookId,
                description: this.state.currentBook
            });
            this.updateStateOnSubmit();
        } else {
            this.setState({
                error: true
            })
        }
    }

    private updateStateOnSubmit() {
        this.setState({
            currentBook: "",
            nextBookId: this.state.nextBookId + 1,
            error: false
        })
    }

    private handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        this.onAddBook();
    }


    private inputChange = (e: any) => {
        this.setState({
            currentBook: e.target.value,
        });
    }
}

const mapActionsToProps = {
    onAddBook: addBook
};

export default connect(undefined, mapActionsToProps)(BookForm);
