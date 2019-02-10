import * as React from 'react';
import {IBookEditButtonProps} from "./types/IBookEditButtonProps";
import {connect} from "react-redux";
import {editBook} from "../../store/actions/book-actions";

class BookEditButton extends React.Component<IBookEditButtonProps, {}> {

    constructor(props: IBookEditButtonProps, context: any) {
        super(props, context);
    }

    public handleClick = () => {
        this.onEditBook();
    }

    public render() {
        return (
            <span className="far fa-edit" onClick={this.handleClick} />
        )
    };

    public onEditBook = () => {
        this.props.onEditBook(this.props.id);
    }
}

const mapActionsToProps = {
    onEditBook: editBook
};

export default connect(undefined, mapActionsToProps)(BookEditButton);
