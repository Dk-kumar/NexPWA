import React, { Component } from 'react';
import BooksDetails from './BookDetail.component';

class BookDetailsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <BooksDetails />
        );
    }
}

export default BookDetailsContainer;