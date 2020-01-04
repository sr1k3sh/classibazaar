import { base_url, DETAIL_START, DETAIL_SUCCESS, DETAIL_FAILED } from "../constant/action-types";

export function fetch_details() {
    return dispatch => {
        dispatch(start());
        return fetch(base_url + 'api/deal/detail/atractive-furnitures')
            .then(res => res.json())
            .then(json => {
                dispatch(success(json))
                
                return json
            })
            .catch(err => {
                dispatch(fail(err))
            })
    }
}
export const start = () => ({
    type: DETAIL_START
});

export const success = (details) => ({
    type: DETAIL_SUCCESS,
    payload: {details}
});

export const fail = error => ({
    type: DETAIL_FAILED,
    payload: { error }
});