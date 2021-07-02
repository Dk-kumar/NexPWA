import { createStore } from 'redux'
import paginatePage from './BooksList/BookListReducer'

const STORE = createStore(paginatePage)

export default STORE