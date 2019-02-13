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
            <div className="button-1" onClick={this.handleClick}>
                <div className="eff-1" />
                <a href="javascript:void(0)">Delete</a>
            </div>
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
