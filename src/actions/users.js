export const Types = {
    CREATE_USERS_REQUEST: '/users/create_user_request',
    CREATE_LOGIN_REQUEST: '/users/create_login_request'
}

export const createUserRequest = ({ firstName, lastName, email, password, verified, dateRegistered }) => ({
    type: Types.CREATE_USERS_REQUEST,
    payload: { firstName, lastName, email, password, verified, dateRegistered }
})

export const createLoginRequest = ({ email, password }) => ({
    type: Types.CREATE_LOGIN_REQUEST,
    payload: { email, password }
})