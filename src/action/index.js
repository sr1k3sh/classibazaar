import { ADD_ARTICLE } from "../constant/action-types";

export function addArticle(payload){
    return{
        type:ADD_ARTICLE,payload
    }
}
// export function getHomeData(){
//     return function(dispatch){
//         return fetch('https://jsonplaceholder.typicode.com/posts')
//                 .then(response => response.json())
//                 .then(json=>{
//                     dispatch({
//                         type:'DATA_LOADED',payload:json
//                     })
//                 });
//     }
// }
export function getHomeData(){
    return function(dispatch){
        return fetch('http://staging.classibazaar.com.au/api/deal/home?fbclid=IwAR3MT99zCT2Hp1D1mCYEL29B8e3HqpulWcgOtOp3oP-MUNf02sX0ZR5enEw')
                .then(response => response.json())
                .then(json => {
                    dispatch({
                        type: 'HOME_DATA', payload: json
                    })
                });
    }
}
