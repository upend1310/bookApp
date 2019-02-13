import * as React from 'react';
import {IBookEditModalProps} from "./types/IBookEditModalProps";
import {IBookEditModalState} from "./types/IBookEditModalState";
import {connect} from "react-redux";
import {editBook} from "../../store/actions/book-actions";
import {Modal, Button} from "react-bootstrap";
import "./BookEditModal.css";

class BookEditModal extends React.Component<IBookEditModalProps, IBookEditModalState> {
    private newBookName: React.RefObject<HTMLInputElement>;

    constructor(props: IBookEditModalProps, context: any) {
        super(props, context);

        this.newBookName = React.createRef();
        this.state = {
            bookName: ""
        }
    }

    public handleSave = () => {
        this.onEditBook();
        this.props.onCloseModal();
    }

    public componentDidMount() {
        this.props.books.filter((book) => {
            if(book.id === this.props.id) {
                this.setState({
                    bookName: book.description
                })
            }
        });
    }

    public render() {
        return (
            <Modal show={this.props.show} onHide={this.props.onCloseModal} id={"modal_"+this.props.id} backdrop={true}>
                <Modal.Body>
                    <p>Please enter book name:</p>
                    <input type="text" className="form-control" defaultValue={this.state.bookName} ref={this.newBookName} />
                </Modal.Body>
                <Modal.Footer>
                    <Button bsStyle="danger" onClick={this.props.onCloseModal}>Close</Button>
                    <Button bsStyle="primary" onClick={this.handleSave}>Save changes</Button>
                </Modal.Footer>
            </Modal>
        )
    };

    public onEditBook = () => {
        this.props.onEditBook({
            id: this.props.id, 
            description: this.newBookName.current ? this.newBookName.current.value : ""
        });
    }
}

const mapActionsToProps = {
    onEditBook: editBook
};

const mapStateToProps = (state: IBookEditModalProps) => ({
    books: state.books
})

export default connect(mapStateToProps, mapActionsToProps)(BookEditModal);