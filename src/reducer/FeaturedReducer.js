import {
    FETCH_FEATURED_BEGIN,
    FETCH_FEATURED_SUCCESS,
    FETCH_FEATURED_FAILURE
} from './../action/FeaturedActions'
const initialState = {
    features: [],
    loading: false,
    error: null
};
export default function productReducer(
    state = initialState,
    action
) {
    switch (action.type) {
        
        case FETCH_FEATURED_BEGIN:
            // Mark the state as "loading" so we can show a spinner or something
            // Also, reset any errors. We're starting fresh.
            return {
                ...state,
                loading: true,
                error: null
            };

        case FETCH_FEATURED_SUCCESS:
            // All done: set loading "false".
            // Also, replace the items with the ones from the server
            return {
                ...state,
                loading: false,
                features: action.payload.featured
            };

        case FETCH_FEATURED_FAILURE:
            // The request failed, but it did stop, so set loading to "false".
            // Save the error, and we can display it somewhere
            // Since it failed, we don't have items to display anymore, so set it empty.
            // This is up to you and your app though: maybe you want to keep the items
            // around! Do whatever seems right.
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                features: []
            };

        default:
            // ALWAYS have a default case in a reducer
            return state;
    }
}
