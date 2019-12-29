import { CITY_START, CITY_FAILED, CITY_SUCCESS} from './../constant/action-types'
const initialState = {
    items: [],
    loading: false,
    error: null
};
export default function CityReducer(state=initialState,action){
    switch(action.type){
        case CITY_START:
            return {
                ...state,
                loading:true,
                error: null
            }
        case CITY_SUCCESS:
            return{
                ...state,
                loading:false,
                items:action.payload.cities
            }
        case CITY_FAILED:
            return{
                ...state,
                loading:false,
                error:action.payload.error,
                items:[]
            }
        default:
            return state
    }
}