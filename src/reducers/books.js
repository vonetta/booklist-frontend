import { Types } from '../actions/books';

const INITIAL_STATE = {
  bookList: []
}

export default function books(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_BOOKS_SUCCESS: {
      return {
        ...state,
        bookList: action.payload.bookList
      }
    }
    default: {
      return state
    }

  }
}