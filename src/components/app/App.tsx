import BookHeader from '../book-header/BookHeader';
import * as React from 'react';
import './App.css';
import BookList from "../book-list/BookList";
import { IState } from "./types/IState";
import { IProps } from "./types/IProps";
import { connect } from "react-redux";
import { IAppState } from "../../store/AppStore";
import { default as BookForm } from "../book-form/BookForm";

class App extends React.Component<IProps, IState> {

    constructor(props: IProps, context: any) {
        super(props, context);
    }

    public render() {
        return (
            <div className="container-fluid">
                <BookHeader />
                <div className="card-container">
                    <div className="card">
                        <div className="card-body">
                            <BookForm />
                            <br />
                            {this.props.books.length>0 && <BookList books={this.props.books} />}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: IAppState) => ({
    books: state.books
})

export default connect(mapStateToProps)(App);
