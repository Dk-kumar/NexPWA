import React, { useEffect, useContext } from 'react';
import BookContext from '../../contexts/booksProvider';
import { Link } from 'react-router-dom';
import BookList from './BooksList.Component';
import { useState } from 'react';
// import { paginateNextPage, paginatePreviousPage } from '../../redux/BooksList/BookListAction';
// import { paginatePage, initialState } from '../../redux/BooksList/BookListReducer'

function BookListContainer() {
    const {currentPage, paginateNextPage, paginatePreviousPage } = useContext(BookContext);
    // const [ currentPage, dispatch ] = useReducer(paginatePage, initialState)
    const [data, setData] = useState({
        booksArray: [],
        isLoaded: false,
        perPage: 10
    })

    const fetchData = async () => {
        const res = await fetch("https://s3-ap-southeast-1.amazonaws.com/he-public-data/books8f8fe52.json");
        const json = await res.json();
        setData((data) => ({
            ...data,
            isLoaded: true,
            booksArray: json
        }));
    };

    useEffect(() => {
        fetchData();
    }, [])

    const renderData = () => {
        const { isLoaded } = data;

        return (
            <>
                {!isLoaded && <p style={{ color: "white", textAlign: "center" }}>Loading...</p>}
                {isLoaded && <BookList
                    currentPage= {currentPage}
                    datas={data}
                    pageCalculation={() => pageCalculation()}
                    paginateNextPage={() => paginateNextPage()}
                    paginatePreviousPage={() => paginatePreviousPage()}
                />}
            </>
        );
    }

    /**
     * 
     * @returns Tbody
     */
    const pageCalculation = () => {
        const { booksArray } = data;
        const lastIndex = currentPage * 10
        const firstIndex = lastIndex - 10

        console.log(data);
        return (
            booksArray.slice(firstIndex, lastIndex).map(data => {
                const { bookID, average_rating, authors,
                    language_code, price, ratings_count, title } = data;
                return (
                    <tr key={bookID}>
                        <td>
                            <Link className='list-link' to={`/bookList/${bookID}/${authors}/${language_code}
                                /${average_rating}/${price}/${ratings_count}/${title}`}>
                                {title}
                            </Link>
                        </td>
                        <td>{authors}</td>
                        <td>₹{price}</td>
                        <td>{average_rating}</td>
                    </tr>
                )
            })
        )
    }

    // const NextPage = () => {
    //     dispatch(paginateNextPage())
    // }

    // const PreviousPage = () => {
    //     dispatch(paginatePreviousPage())
    // }

    return renderData();
}

export default BookListContainer;