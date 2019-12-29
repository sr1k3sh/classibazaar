import { base_url, CITY_START, CITY_SUCCESS, CITY_FAILED } from "../constant/action-types";

export function fetch_city(){
    return dispatch=>{
        dispatch(start());
        return fetch(base_url +'api/deal/cities')
                .then(res=>res.json())
                .then(json=>{
                    dispatch(success(json))
                    // console.log(json)
                    return json
                })
                .catch(err=>{
                    dispatch(fail(err))
                })
    }
}
export const start = () => ({
    type: CITY_START
});

export const success = cities => ({
    type: CITY_SUCCESS,
    payload: { cities }
});

export const fail = error => ({
    type: CITY_FAILED,
    payload: { error }
});