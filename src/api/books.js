import axios from "axios";

export const getBooks = async () => {
    try {
        const response = await axios
            .get("http://localhost:3001/api/books");
        return onSuccess(response);
    }
    catch (err) {
        return onError(err);
    }
}

export const createBook = async ({ bookName, totalPages, currentPage, dateStarted }) => {
    try {
        const response = await axios
            .post("http://localhost:3001/api/books", {
                bookName, totalPages, currentPage, dateStarted
            });
        return onSuccess(response);
    }
    catch (err) {
        return onError(err);
    }
}


export const deleteBook = async (book) => {
    try {
        const response = await axios
            .delete(`http://localhost:3001/api/books/${book._id}`)
        return onSuccess(response)
    }
    catch (err) {
        return onError(err);
    }
}

export const updateBook = async ({ _id, bookName, totalPages, currentPage, dateStarted }) => {
    try {
        const response = await axios.put(`http://localhost:3001/api/books/${_id}`, {
            _id, bookName, totalPages, currentPage, dateStarted
        });
        return onSuccess(response)
    }
    catch (err) {
        return onError(err);
    }
}

function onSuccess(response) {
    return response;
}

function onError(err) {
    return Promise.reject(err.data);
}
