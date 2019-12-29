import { base_url } from "../constant/action-types";

export const FETCH_POPULAR_BEGIN = "FETCH_POPULAR_BEGIN";
export const FETCH_POPULAR_SUCCESS = "FETCH_POPULAR_SUCCESS";
export const FETCH_POPULAR_FAILURE = "FETCH_POPULAR_FAILURE";
export function fetch_popular_deals() {
    return dispatch => {
        dispatch(fetchPopularBegin());
        return fetch((base_url+'api/deal/home?fbclid=IwAR3MT99zCT2Hp1D1mCYEL29B8e3HqpulWcgOtOp3oP-MUNf02sX0ZR5enEw'))
            .then(handleErrors)
            .then(res => res.json())
            .then(json => {
                dispatch(fetchPopularSuccess(json.popular_deals));
                
                return json.popular_deals;
            })
            .catch(error =>
                dispatch(fetchPopularFailure(error))
            );
    };
}
function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}
export const fetchPopularBegin = () => ({
    type: FETCH_POPULAR_BEGIN
});

export const fetchPopularSuccess = popular => ({
    type: FETCH_POPULAR_SUCCESS,
    payload: { popular }
});

export const fetchPopularFailure = error => ({
    type: FETCH_POPULAR_FAILURE,
    payload: { error }
});