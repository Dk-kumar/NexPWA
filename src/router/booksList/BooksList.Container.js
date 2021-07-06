import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import BookList from './BooksList.Component';
import { paginateNextPage, paginatePreviousPage } from '../../redux/BooksList/BookListAction';

class BookListContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            booksArray: [],
            isLoaded: false,
            currentPage: this.props.currentPage,
            perPage: 10
        }
    }

    componentDidMount() {
        fetch('https://s3-ap-southeast-1.amazonaws.com/he-public-data/books8f8fe52.json')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    booksArray: json,
                    isLoaded: true,
                })
            })
    }

    render() {
        return (
            <>
                {!this.state.isLoaded && <p style={{ color: "white", textAlign: "center" }}>Loading...</p>}
                {this.state.isLoaded && <BookList
                    datas={this.state}
                    pageCalculation={() => this.pageCalculation()}
                    paginateNextPage={() => this.paginateNextPage()}
                    paginatePreviousPage={() => this.paginatePreviousPage()}
                />}
            </>
        );
    }

    /**
     * 
     * @returns Tbody
     */
    pageCalculation() {
        const { booksArray, currentPage, perPage } = this.state
        let lastIndex = currentPage * perPage
        let firstIndex = lastIndex - perPage
        return (booksArray.slice(firstIndex, lastIndex)
            .map(data => {
                return (
                    <tr key={data.bookID}>
                        <td>
                            <Link className='list-link' to={`/bookList/${data.bookID}/${data.authors}/${data.language_code}
                                /${data.average_rating}/${data.price}/${data.ratings_count}/${data.title}`}>
                                {data.title}
                            </Link>
                        </td>
                        <td>{data.authors}</td>
                        <td>₹{data.price}</td>
                        <td>{data.average_rating}</td>
                    </tr>
                )
            })
        )
    }

    paginateNextPage() {
        this.props.paginateNextPage()
        this.setState({
            currentPage: this.props.currentPage + 1
        })
    }

    paginatePreviousPage() {
        this.props.paginatePreviousPage()
        this.setState({
            currentPage: this.props.currentPage - 1
        })
    }

}

const mapStateToProps = (state) => {
    return {
        currentPage: state.Page
    }
}

const mapDispatchtoProps = (dispatch) => {
    return {
        paginateNextPage: () => dispatch(paginateNextPage()),
        paginatePreviousPage: () => dispatch(paginatePreviousPage())
    }
}

export default connect(mapStateToProps, mapDispatchtoProps)(BookListContainer);