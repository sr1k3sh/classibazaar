import { PRODUCT_START, PRODUCT_SUCCESS, PRODUCT_FAILED } from "../constant/action-types";

const initialState = {
    items: [],
    loading: false,
    error: null
};
export default function TotalProductReducer(state=initialState,action){
    switch(action.type){
        case PRODUCT_START:
            return{
                ...state,
                loading:true,
                error:null
            }
        case PRODUCT_SUCCESS:
            return{
                ...state,
                loading:false,
                items:action.payload.total_products,
            
            }
        case PRODUCT_FAILED:
            return{
                ...state,
                loading:false,
                items:[],
                error:action.payload.error
            }
        default:
            return state
    }
}