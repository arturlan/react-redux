import { combineReducers } from 'redux';
import { books, booksIsLoading, booksHasErrored} from './books';

export default combineReducers({
  books,
  booksIsLoading,
  booksHasErrored
})
