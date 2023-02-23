import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import BookList from './BooksList.Component';
import { useState } from 'react';
import { paginateNextPage, paginatePreviousPage } from '../../redux/BooksList/BookListAction';

function BookListContainer() {
    const dispatch = useDispatch();
    // const paginateNext = dispatch(props.paginateNextPage());
    // const paginatePrevious = dispatch(props.paginatePreviousPage());
    const currentPage = useSelector(state => state.Page);

    const [data, setData] = useState({
        booksArray: [],
        isLoaded: false,
        currentPage: currentPage,
        perPage: 10
    })

    const fetchData = async () => {
        // const client = new ApolloClient({
        //     uri: 'https://countries.trevorblades.com/graphql',
        //     cache: new InMemoryCache(),
        // });

        // client
        //     .query({
        //         query: gql`
        //         query GetLocations {
        //         locations {
        //             id
        //             name
        //             description
        //             photo
        //         }
        //         }
        //     `,
        //     })
        //     .then((result) => console.log(result));
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
                    datas={data}
                    pageCalculation={() => pageCalculation()}
                    paginateNextPage={() => NextPage()}
                    paginatePreviousPage={() => PreviousPage()}
                />}
            </>
        );
    }

    /**
     * 
     * @returns Tbody
     */
    const pageCalculation = () => {
        const { booksArray, currentPage } = data;
        const lastIndex = currentPage * 10
        const firstIndex = lastIndex - 10

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

    const NextPage = () => {
        const { currentPage } = data;

        dispatch(paginateNextPage())
        setData({
            currentPage: currentPage + 1
        })
    }

    const PreviousPage = () => {
        const { currentPage } = data;

        dispatch(paginatePreviousPage())
        setData({
            currentPage: currentPage - 1
        })
    }

    return renderData();
}

export default BookListContainer;