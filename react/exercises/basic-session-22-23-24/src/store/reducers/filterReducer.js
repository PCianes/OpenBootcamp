import { SET_VISIBILITY_FILTER } from '../actions/actions';

export const filterReducer = (state = 'SHOW_ALL', action) => {

    const { type, payload } = action

    switch (type) {
        case SET_VISIBILITY_FILTER:
            return payload.filter
        default:
            return state;
    }
}