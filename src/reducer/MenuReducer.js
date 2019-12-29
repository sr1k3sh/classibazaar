import {MENU_START,MENU_SUCCESS,MENU_FAIL, MENU_FAILED} from './../action/MenuAction'
const initialState = {
    items: [],
    loading: false,
    error: null
};
export default function MenuReducer(state=initialState,action){
    switch(action.type){
        case MENU_START:
            return {
                ...state,
                loading: true,
                error: null
            };
        case MENU_SUCCESS:
            return{
                ...state,
                loading:false,
                items:action.payload.menus
            }
        case MENU_FAILED:
            return{
                ...state,
                loading: false,
                error: action.payload.error,
                items: []
            }
        default:
            return state
    }
}