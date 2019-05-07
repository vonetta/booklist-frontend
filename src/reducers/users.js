import { Types } from '../actions/users'

const INITIAL_STATE = {
    user: []
}

export default function users(state = INITIAL_STATE, action) {
    switch (action.type) {
        case Types.GET_USERS_SUCCESS: {
            return {
                ...state,
                user: action.payload.user
            }

        }
        default: {
            return state
        }
    }
}