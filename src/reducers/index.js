import { combineReducers } from 'redux'
import BooksReducer from './books'
import UsersReducer from './users'

export default combineReducers({
    books: BooksReducer,
    users: UsersReducer
})