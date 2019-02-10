import * as React from 'react';
import './BookHeader.css';

class BookHeader extends React.Component<{}, {}> {

    constructor(props: {}, context: any) {
        super(props, context);
    }


    public render() {
        return (
            <h1 className="header text-center">Book List</h1>
        );
    }
}

export default BookHeader;
