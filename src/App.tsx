import BookListContainer from './router/booksList/BooksList.Container';
import './App.css';
import Home from './route/home/Home.component';
import Header from './components/header/Header.component';
import BooksDetails from './router/BookDetails/BookDetail.component';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BooksProvider } from './contexts/booksProvider'
import React from 'react';

const App = () => {
  return (
    <BooksProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/bookList/:bookID/:authors/:language_code/:average_rating/:price/:ratings_count/:title'
            element={<BooksDetails />} />
          <Route path='/bookList' element={<BookListContainer />} />
        </Routes>
      </Router>
    </BooksProvider>
  );
}

export default App;
