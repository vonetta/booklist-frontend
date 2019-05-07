import { takeLatest, call, fork, takeEvery } from 'redux-saga/effects';
import * as actions from '../actions/users'
import * as api from '../api/users'


function* createUser(action) {
    try {
        yield call(api.createUser, { firstName: action.payload.firstName, lastName: action.payload.lastName, email: action.payload.email, password: action.payload.password, verified: action.payload.verified, dateRegistered: action.payload.dateRegistered })
    }
    catch (e) {
        console.log(e)
    }
}

function* watchCreateUserRequest() {
    yield takeLatest(actions.Types.CREATE_USERS_REQUEST, createUser)
}

function* loginUser(action) {
    try {
        yield call(api.loginUser, { email: action.payload.email, password: action.payload.password })
    }
    catch (e) {
        console.log(e)
    }
}


function* watchCreateLoginRequest() {
    yield takeEvery(actions.Types.CREATE_LOGIN_REQUEST, loginUser)
}
const UsersSagas = [
    fork(watchCreateUserRequest),
    fork(watchCreateLoginRequest),
]


export default UsersSagas