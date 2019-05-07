export const Types = {
    GET_BOOKS_REQUEST: 'books/get_books_request',
    GET_BOOKS_SUCCESS: 'books/get_books_success',
    CREATE_BOOK_REQUEST: 'books/create_book_request',
    DELETE_BOOK_REQUEST: 'books/delete_book_request',
    UPDATE_BOOK_REQUEST: 'books/update_book_request',
}

export const getBooksRequest = () => ({
    type: Types.GET_BOOKS_REQUEST
});

export const getBooksSuccess = ({ bookList }) => ({
    type: Types.GET_BOOKS_SUCCESS,
    payload: {
        bookList
    }
})

export const createBookRequest = ({ bookName, totalPages, currentPage, dateStarted }) => ({
    type: Types.CREATE_BOOK_REQUEST,
    payload: { bookName, totalPages, currentPage, dateStarted }
})

export const deleteBookRequest = (book) => ({
    type: Types.DELETE_BOOK_REQUEST,
    payload: { book }
})

export const updateBookRequest = ({ _id, bookName, totalPages, currentPage, dateStarted }) => ({
    type: Types.UPDATE_BOOK_REQUEST,
    payload: { _id, bookName, totalPages, currentPage, dateStarted }
})
