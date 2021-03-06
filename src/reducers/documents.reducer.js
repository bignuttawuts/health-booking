import * as Actions from '../actions';

const initialState = {
    data: []
}

const documentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case Actions.GET_DOCUMENTS:
            {
                return {
                    ...state,
                    data: action.payload
                };
            }
        default:
            return state
    }
}

export default documentsReducer
