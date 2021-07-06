import React, { Component } from 'react';

import './BooksList.scss'

class BookList extends Component {

    constructor(props) {
        super(props)
        const { datas } = this.props
        this.state = {
            booksArray: datas.booksArray,
            isLoaded: datas.isLoaded,
        }
    }

    render() {
        return (
            <>
                <table >
                    <thead>
                        <tr>
                            <th>Book name</th>
                            <th>Author name</th>
                            <th>Price</th>
                            <th>Rating</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.pageCalculation()}
                    </tbody>
                </table>
                <div className='pagination-buttons'>
                    <button className='pervious-button' onClick={this.props.paginatePreviousPage}>Previous</button>
                    <span className='current-page'>{this.props.datas.currentPage}</span>
                    <button className='next-button' onClick={this.props.paginateNextPage}>Next</button>
                </div>
            </>
        );
    }
}

export default BookList;