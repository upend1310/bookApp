import * as React from 'react';
import {IBookCloseButtonProps} from "./types/IBookCloseButtonProps";
import {connect} from "react-redux";
import {deleteBook} from "../../store/actions/book-actions";
import "./BookCloseButton.css";

class BookCloseButton extends React.Component<IBookCloseButtonProps, {}> {

    constructor(props: IBookCloseButtonProps, context: any) {
        super(props, context);
    }

    public handleClick = () => {
        this.onRemoveBook();
    }

    public render() {
        return (
            <span className="far fa-window-close" onClick={this.handleClick} />
        )
    };

    public onRemoveBook = () => {
        this.props.onRemoveBook(this.props.id);
    }
}

const mapActionsToProps = {
    onRemoveBook: deleteBook
};

export default connect(undefined, mapActionsToProps)(BookCloseButton);
