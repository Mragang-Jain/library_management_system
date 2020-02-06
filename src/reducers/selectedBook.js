import { SET_SELECTED_BOOK } from "../actions";
export default function selectedBook(state = {}, action) {
  switch (action.type) {
    case SET_SELECTED_BOOK:
      return {
        ...action.selectedBook, timeStamp: new Date().toLocaleTimeString()
      }
    default:
      return null
  }
}