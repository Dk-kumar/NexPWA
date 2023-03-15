import React from 'react';
import './BooksList.scss'

interface BookListProps {
    pageCalculation: () => JSX.Element[]
    paginateNextPage?: () => void
    currentPage?: number
    paginatePreviousPage?: () => void
}

function BookList({ paginateNextPage, currentPage = 1, 
    paginatePreviousPage, pageCalculation }: BookListProps): JSX.Element {
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
                    {pageCalculation()}
                </tbody>
            </table>
            <div className='pagination-buttons'>
                <button className='pervious-button' disabled={ currentPage <= 1} onClick={paginatePreviousPage}>Previous</button>
                <span className='current-page'>{currentPage}</span>
                <button className='next-button' onClick={paginateNextPage}>Next</button>
            </div>
        </>
    );
}

export default BookList;