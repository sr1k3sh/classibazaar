import { PRODUCT_START, PRODUCT_SUCCESS, PRODUCT_FAILED, base_url } from "../constant/action-types";

export function fetch_total_product(){
    return dispatch=>{
        dispatch(start);
        return fetch(base_url +'api/deal/products')
        .then(res=>res.json())
        .then(json=>{
            dispatch(success(json.products))
            // console.log(json.products)
            return json.products
        })
        .catch(err=>{
            dispatch(fail(err))
            return err
        })
    }
}
export const start = () => ({
    type: PRODUCT_START
});

export const success = total_products => ({
    type: PRODUCT_SUCCESS,
    payload: { total_products }
});

export const fail = error => ({
    type: PRODUCT_FAILED,
    payload: { error }
});