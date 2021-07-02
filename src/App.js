import { Provider } from 'react-redux';
import BookListContainer from './router/booksList/BooksList.Container';
import STORE from './redux/store';
import './App.css';

function App() {
  return (
    <Provider store={STORE}>
      <BookListContainer />
    </Provider>
  );
}

export default App;
