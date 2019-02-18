import * as React from 'react';
import './BookForm.css';
import { BookFormState } from "./types/BookFormState";
import { addNewBook } from "../../store/actions/book-actions";
import { connect } from "react-redux";
import { BookFormProps } from "./types/BookFormProps";
import { Alert, Button } from "react-bootstrap";
import { Book } from 'src/model/Book';

export class BookForm extends React.Component<BookFormProps, BookFormState> {

    constructor(props: BookFormProps, context: any) {
        super(props, context);

        this.onMsgClose = this.onMsgClose.bind(this);
        this.state = {
            currentBook: "",
            error: false,
            isBookAdded: false
        };
    }

    public render() {
        return (
            <div>
                { this.state.isBookAdded &&
                    <Alert id="successMsg" bsStyle="success" onDismiss={this.onMsgClose}>
                        Book successfully added.
                    </Alert>
                }
                <div className="form-width">
                    <form onSubmit={this.handleSubmit}>
                        <input className="form-control" type="text" placeholder="Add a book name"
                            onChange={this.inputChange} value={this.state.currentBook} />
                        {this.state.error && <div className="small badge">*Please enter a book name.</div>}
                        <div className="clearfix" />
                        <Button className="mar-top-20" bsStyle="info" type="submit">Add Book</Button>
                    </form>
                </div>
            </div>
        )
    }

    private onAddNewBook() {
        if (this.state.currentBook !== '') {
            const data = {
                description: this.state.currentBook
            }
            this.props.onAddBook(data);
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
            error: false,
            isBookAdded: true
        })
    } 

    private handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        this.onAddNewBook();
    }

    private onMsgClose() {
        this.setState({
            isBookAdded: false
        })
    }


    private inputChange = (e: any) => {
        this.setState({
            currentBook: e.target.value,
        });
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        onAddBook: (data: Book) => addNewBook(dispatch, data)
    }
}

export default connect(undefined, mapDispatchToProps)(BookForm);
