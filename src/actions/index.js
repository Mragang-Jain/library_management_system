export const GET_ALL_BOOKS = 'GET_ALL_BOOKS'
export const ADD_A_BOOK = 'ADD_A_BOOK'
export const SET_SELECTED_BOOK = 'SET_SELECTED_BOOK'
export const UPDATE_BOOK_DETAILS = 'UPDATE_BOOK_DETAILS'
export const ASYNC_ACTION = 'ASYNC_ACTION'

export function addABook(newBook) {
  return {
    type: ADD_A_BOOK,
    newBook,
  }
}

export function setSelectedBook(selectedBook) {
  return {
    type: SET_SELECTED_BOOK,
    selectedBook,
  }
}

export function updateSelectedBook(updatedBook) {
  return {
    type: UPDATE_BOOK_DETAILS,
    updatedBook,
  }
}

export function getAllBooks(books) {
  return {
    type: GET_ALL_BOOKS,
    books,
  }
}
