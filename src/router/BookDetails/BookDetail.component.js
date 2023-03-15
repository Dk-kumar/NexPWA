import './BookDetail.scss'
import { useParams } from 'react-router-dom';

function BooksDetails() {
    const data = useParams();

    return (
        <>
            <div className='book'>
                <div className='book-title'>Book name: {data.title}</div>
                <div className='book-body'>
                    <div className='book-body-row'>
                        <div className='book-body-row-heading'>BookID: </div>
                        <div>{data.bookID}</div>
                    </div>
                    <div className='book-body-row'>
                        <div className='book-body-row-heading'>Author: </div>
                        <div>{data.authors}</div>
                    </div>
                    <div className='book-body-row'>
                        <div className='book-body-row-heading'>Language: </div>
                        <div> {data.language_code}</div>
                    </div>
                    <div className='book-body-row'>
                        <div className='book-body-row-heading'>Rating count: </div>
                        <div>{data.ratings_count}</div>
                    </div>
                    <div className='book-body-row'>
                        <div className='book-body-row-heading'>Rating: </div>
                        <div>{data.average_rating}</div>
                    </div>
                    <div className='book-body-row'>
                        <div className='book-body-row-heading'>Price: </div>
                        <div>{data.price}</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BooksDetails;