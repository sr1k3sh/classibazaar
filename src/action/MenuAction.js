import { base_url } from "../constant/action-types";

export function fetch_menu(){
    return dispatch=>{
        dispatch(start());
        return fetch(base_url+'api/deal/categories')
            .then(res => res.json())
            .then(json => {
                dispatch(success(json))
                // console.log(json)
                return json;
            })
            .catch(error =>
                dispatch(fail(error))
            );
    }
}
export const MENU_START="MENU_START"
export const MENU_SUCCESS="MENU_SUCCESS"
export const MENU_FAILED="MENU_FAILED"
export const start = () => ({
    type: MENU_START
});

export const success = menus => ({
    type: MENU_SUCCESS,
    payload: { menus }
});

export const fail = error => ({
    type: MENU_FAILED,
    payload: { error }
});
