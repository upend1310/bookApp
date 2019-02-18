import * as React from 'react';
import {IBookEditModalProps} from "./types/IBookEditModalProps";
import {IBookEditModalState} from "./types/IBookEditModalState";
import {connect} from "react-redux";
import {editBookAction} from "../../store/actions/book-actions";
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
        this.onEditOfBook();
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
                    <p className="mar-top-20">Please enter book name:</p>
                    <input type="text" className="form-control" defaultValue={this.state.bookName} ref={this.newBookName} />
                </Modal.Body>
                <Modal.Footer>
                    <Button bsStyle="danger" onClick={this.props.onCloseModal}>Close</Button>
                    <Button bsStyle="primary" onClick={this.handleSave}>Save changes</Button>
                </Modal.Footer>
            </Modal>
        )
    };

    public onEditOfBook = () => {
        const data = {
            id: this.props.id, 
            description: this.newBookName.current ? this.newBookName.current.value : ""
        };
        this.props.onEditBook(data);
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        onEditBook: (data: any) => editBookAction(dispatch, data)
    }
};

const mapStateToProps = (state: IBookEditModalProps) => ({
    books: state.books
})

export default connect(mapStateToProps, mapDispatchToProps)(BookEditModal);