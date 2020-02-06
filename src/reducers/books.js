import { GET_ALL_BOOKS, ADD_A_BOOK, UPDATE_BOOK_DETAILS, ASYNC_ACTION } from "../actions";
import bookList from '../assets/Booklist.json';

export default function books(state = bookList, action) {
  switch (action.type) {
    case GET_ALL_BOOKS:
      return [
        ...state,
        ...action.books,
      ]
    case ADD_A_BOOK:
      return [
        action.newBook,
        ...state, 
      ]
    case UPDATE_BOOK_DETAILS: 
      const found = state.filter(_=>_.id!==action.updatedBook.id)
      found.push(action.updatedBook);
      return found
    case ASYNC_ACTION:
      return [
        ...state
      ]
    default:
      return [
        ...state,
      ]
  }
}