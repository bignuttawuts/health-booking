import axios from 'axios';

export function getDocuments() {
    return function (dispatch) {
        const request = axios.get('http://localhost:3001/documents');
        return request.then((response) => {
            dispatch({
                type: 'GET_DOCUMENTS',
                payload: response.data
            })
        }
        );
    }
}