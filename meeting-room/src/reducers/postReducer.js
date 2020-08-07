import _ from 'lodash';

export default (state = {}, action) => {
    if (action.type === 'FETCH_POSTS') {
        return { ...state, ..._.mapKeys(action.payload, 'id') };
    }
    else {
            return state;
    }
};
