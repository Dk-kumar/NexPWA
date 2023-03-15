import React from 'react';
import './BooksList.scss'

function BookList(props) {
    console.log(props);
    const { paginateNextPage, currentPage, paginatePreviousPage } = props;

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
                    {props.pageCalculation()}
                </tbody>
            </table>
            <div className='pagination-buttons'>
                <button className='pervious-button' disabled={ currentPage <= 1} onClick={paginatePreviousPage}>Previous</button>
                <span className='current-page'>{currentPage.currentPage}</span>
                <button className='next-button' onClick={paginateNextPage}>Next</button>
            </div>
        </>
    );
}

export default BookList;