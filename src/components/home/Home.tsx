import * as React from 'react';
import { default as BookForm } from "../book-form/BookForm";

const Home: React.SFC<{}> = () => {
    return (
        <div className="container-fluid">
            <h1 className="header text-center">Book List</h1>
            <div className="card-container">
                <div className="card">
                    <div className="card-body">
                        <BookForm />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;