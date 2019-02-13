import * as React from 'react';
import {IBookEditButtonProps} from "./types/IBookEditButtonProps";
import {IBookEditButtonState} from "./types/IBookEditButtonState";
import BookEditModal from "../book-edit-modal/BookEditModal";
import * as ReactDOM from "react-dom";
import "./BookEditButton.css";

class BookEditButton extends React.Component<IBookEditButtonProps, IBookEditButtonState> {

    constructor(props: IBookEditButtonProps, context: any) {
        super(props, context);

        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.state = {
            showModal: false
        }
    }

    public handleClick = () => {
        this.onEditBook();
    }

    public render() {
        const MODAL_DOM: any = document.getElementById('modal-dom');
        return (
            <React.Fragment>
                <div className="button-1" onClick={this.handleClick}>
                    <div className="eff-1" />
                    <a href="javascript:void(0)"> Edit </a>
                </div>
                { this.state.showModal && ReactDOM.createPortal(<BookEditModal show={this.state.showModal} id={this.props.id} onCloseModal={this.handleCloseModal} />, MODAL_DOM) }
            </React.Fragment>
        )
    };

    public onEditBook = () => {
        this.setState({
            showModal: true
        })
    }

    public handleCloseModal = () => {
        this.setState({
            showModal: false
        })
    }
}

export default BookEditButton;
