import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILED } from './../constant/action-types'
const initialState = {
    token: '',
    // email:'',
    loading: false,
    error: null,
    isLogged:false
};
export default function CityReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_START:
            return {
                ...state,
                loading: true,
                error: null,
                isLogged:false
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                isLogged:true,
                token: action.payload,
               }
        case LOGIN_FAILED:
            return {
                ...state,
                loading: false,
                isLogged:false,
                error: action.payload,
                
            }
        default:
            return state
    }
}