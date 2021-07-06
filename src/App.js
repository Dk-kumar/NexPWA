import { Provider } from 'react-redux';
import BookListContainer from './router/booksList/BooksList.Container';
import STORE from './redux/store';
import './App.css';
import HomeContainer from './routes/home/Home.container';
import HeaderContainer from './components/header/Header.container';
import BooksDetails from './router/bookDetails/BookDetail.component';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Provider store={STORE}>
      <Router>
        <HeaderContainer />
        <Switch>
          <Route path="/" exact component={HomeContainer} />
          <Route path='/bookList/:bookID/:authors/:language_code/:average_rating/:price/:ratings_count/:title'
            component={BooksDetails} />
          <Route path='/bookList' component={BookListContainer} />
        </Switch>
      </Router>
    </Provider>


  );
}

export default App;
