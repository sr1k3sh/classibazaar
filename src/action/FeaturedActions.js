export const FETCH_FEATURED_BEGIN = "FETCH_FEATURED_BEGIN";
export const FETCH_FEATURED_SUCCESS ="FETCH_FEATURED_SUCCESS";
export const FETCH_FEATURED_FAILURE ="FETCH_FEATURED_FAILURE";
function fetchurl(url) {
    return fetch(url)
        .then(handleErrors)
        .then(res => res.json());
}
export function fetch_featured_deals() {
    return dispatch => {
        dispatch(fetchFeaturedBegin());
        return fetchurl('http://staging.classibazaar.com.au/api/deal/home?fbclid=IwAR3MT99zCT2Hp1D1mCYEL29B8e3HqpulWcgOtOp3oP-MUNf02sX0ZR5enEw')
            .then(json => {
                dispatch(fetchFeaturedSuccess(json.featured_deals));
                
                return json.featured_deals;
            })
            .catch(error =>
                dispatch(fetchFeaturedFailure(error))
            );
    };
}
function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}
export const fetchFeaturedBegin = () => ({
    type: FETCH_FEATURED_BEGIN
});

export const fetchFeaturedSuccess = featured => ({
    type: FETCH_FEATURED_SUCCESS,
    payload: { featured }
});

export const fetchFeaturedFailure = error => ({
    type: FETCH_FEATURED_FAILURE,
    payload: { error }
});
