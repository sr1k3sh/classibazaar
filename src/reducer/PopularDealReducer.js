import { 
    FETCH_POPULAR_BEGIN, 
    FETCH_POPULAR_SUCCESS, 
    FETCH_POPULAR_FAILURE
} from './../action/PopularDealAction'
const initialState = {
    popular: [],
    loading: false,
    error: null
};
export default function productReducer(
    state = initialState,
    action
) {
    switch (action.type) {

        case FETCH_POPULAR_BEGIN:
            // Mark the state as "loading" so we can show a spinner or something
            // Also, reset any errors. We're starting fresh.
            return {
                ...state,
                loading: true,
                error: null
            };

        case FETCH_POPULAR_SUCCESS:
            // All done: set loading "false".
            // Also, replace the items with the ones from the server
            return {
                ...state,
                loading: false,
                popular: action.payload.popular
            };

        case FETCH_POPULAR_FAILURE:
            // The request failed, but it did stop, so set loading to "false".
            // Save the error, and we can display it somewhere
            // Since it failed, we don't have items to display anymore, so set it empty.
            // This is up to you and your app though: maybe you want to keep the items
            // around! Do whatever seems right.
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                popular: []
            };

        default:
            // ALWAYS have a default case in a reducer
            return state;
    }
}
