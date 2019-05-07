import axios from 'axios'

export const createUser = async ({ firstName, lastName, email, password, verified, dateRegistered }) => {
    console.log(dateRegistered)
    try {
        const response = await axios.post("http://localhost:3001/api/users/", {
            firstName, lastName, email, password, verified, dateRegistered
        })
        return onSuccess(response)
    }
    catch (err) {
        return onError(err)
    }
}

export const loginUser = async ({ email, password }) => {
    try {
        const response = await axios.post("http://localhost:3001/api/users/login", {
            email, password
        })
        return onSuccess(response.data)
    }
    catch (err) {
        return onError(err)
    }
}
function onSuccess(response) {
    return response
}

function onError(error) {
    return Promise.reject(error.data)
}