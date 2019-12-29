import { base_url } from "../constant/action-types";

function fetchurl(url) {
    return fetch(url)
        .then(handleErrors)
        .then(res => res.json());
}
export function fetch_recent_deals() {
    return dispatch => {
        dispatch(fetchProductsBegin());
        return fetchurl(base_url+'api/deal/home?fbclid=IwAR3MT99zCT2Hp1D1mCYEL29B8e3HqpulWcgOtOp3oP-MUNf02sX0ZR5enEw')
            .then(json => {
                dispatch(fetchProductsSuccess(json.recent_deals));
                // console.log(json)
                return json.recent_deals;
            })
            .catch(error =>
                dispatch(fetchProductsFailure(error))
            );
    };
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

export const FETCH_PRODUCTS_BEGIN = "FETCH_PRODUCTS_BEGIN";
export const FETCH_PRODUCTS_SUCCESS =
    "FETCH_PRODUCTS_SUCCESS";
export const FETCH_PRODUCTS_FAILURE =
    "FETCH_PRODUCTS_FAILURE";

export const fetchProductsBegin = () => ({
    type: FETCH_PRODUCTS_BEGIN
});

export const fetchProductsSuccess = products => ({
    type: FETCH_PRODUCTS_SUCCESS,
    payload: { products }
});

export const fetchProductsFailure = error => ({
    type: FETCH_PRODUCTS_FAILURE,
    payload: { error }
});
