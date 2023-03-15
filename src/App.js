import BookListContainer from './router/booksList/BooksList.Container';
import './App.css';
import HomeContainer from './routes/home/Home.container';
import HeaderContainer from './components/header/Header.container';
import BooksDetails from './router/BookDetails/BookDetail.component';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BooksProvider } from './contexts/booksProvider'

const App = () => {
  return (
    <BooksProvider>
      <Router>
        <HeaderContainer />
        <Routes>
          <Route path="/" exact element={<HomeContainer />} />
          <Route path='/bookList/:bookID/:authors/:language_code/:average_rating/:price/:ratings_count/:title'
            element={<BooksDetails />} />
          <Route path='/bookList' element={<BookListContainer />} />
        </Routes>
      </Router>
    </BooksProvider>
  );
}

export default App;
