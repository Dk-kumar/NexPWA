import React, { Component } from 'react';
import './BookDetail.scss'

class BooksDetails extends Component {

    render() {
        const { match } = this.props
        return (
            <>
                <div className='book'>
                    <div className='book-title'>Book name: {match.params.title}</div>
                    <div className='book-body'>
                        <div className='book-body-row'>
                            <div className='book-body-row-heading'>BookID: </div>
                            <div>{match.params.bookID}</div>
                        </div>
                        <div className='book-body-row'>
                            <div className='book-body-row-heading'>Author: </div>
                            <div>{match.params.authors}</div>
                        </div>
                        <div className='book-body-row'>
                            <div className='book-body-row-heading'>Language: </div>
                            <div> {match.params.language_code}</div>
                        </div>
                        <div className='book-body-row'>
                            <div className='book-body-row-heading'>Rating count: </div>
                            <div>{match.params.ratings_count}</div>
                        </div>
                        <div className='book-body-row'>
                            <div className='book-body-row-heading'>Rating: </div>
                            <div>{match.params.average_rating}</div>
                        </div>
                        <div className='book-body-row'>
                            <div className='book-body-row-heading'>Price: </div>
                            <div>{match.params.price}</div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default BooksDetails;