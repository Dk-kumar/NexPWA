import React from 'react';
import { useState } from 'react';
import './BooksList.scss'

function BookList(props) {
    const { datas } = props;
    const [data, setValues] = useState({
        booksArray: datas.booksArray,
        isLoaded: datas.isLoaded,
    })

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
                <button className='pervious-button' onClick={props.paginatePreviousPage}>Previous</button>
                <span className='current-page'>{props.datas.currentPage}</span>
                <button className='next-button' onClick={props.paginateNextPage}>Next</button>
            </div>
        </>
    );
}

export default BookList;