import {  DETAIL_START, DETAIL_SUCCESS, DETAIL_FAILED } from './../constant/action-types'
const initialState = {
    items: [],
    deals:[],
    image:[],
    products:[],
    loading: false,
    error: null
};
export default function CityReducer(state = initialState, action) {
    switch (action.type) {
        case DETAIL_START:
            return {
                ...state,
                loading: true,
                error: null
            }
        case DETAIL_SUCCESS:
            return {
                ...state,
                loading: false,
                items: action.payload.details,
                deals:action.payload.details.deal,
                image:action.payload.details.main_image,
                products:[action.payload.details.products]
            }
        case DETAIL_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                items: []
            }
        default:
            return state
    }
}