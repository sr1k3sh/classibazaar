import { ADD_ARTICLE } from "../constant/action-types";
import { BREAD_CRUMB} from '../constant/action-types';
import {
  FETCH_PRODUCTS_BEGIN,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE } from './../action/index'
const initalState={
    articles:[],
    remoteArticles:[],
    crumb:['shopping','home'],
    count:'',
    home:[],
    items: [],
    loading: false,
    error: null
}
const actions ={
    breadCrumb: {type:'BREAD_CRUMB'},
    increment: { type: 'INCREMENT' },
    decrement: { type: 'DECREMENT' }
}
function rootReducer(state=initalState,action){
    switch (action.type) {
        case actions.increment.type:
          return {
            count:3
          };
    
        case actions.decrement.type:
          return {
            count: 'hello'
          };
        case actions.breadCrumb.type:
            return{
                crumb:'test'
            }
        case ADD_ARTICLE:
            return Object.assign({},state,{
            articles:state.articles.concat(action.payload)
            })
        case "DATA_LOADED":
            return Object.assign({},state,{
                        remoteArticles:state.remoteArticles.concat(action.payload)
                    })
        case "HOME_DATA":
            return Object.assign({},state,{
                  home:state.home.concat(action.payload)
            })
      case FETCH_PRODUCTS_BEGIN:
        // Mark the state as "loading" so we can show a spinner or something
        // Also, reset any errors. We're starting fresh.
        return {
          ...state,
          loading: true,
          error: null
        };

      case FETCH_PRODUCTS_SUCCESS:
        // All done: set loading "false".
        // Also, replace the items with the ones from the server
        return {
          ...state,
          loading: false,
          items: action.payload.products
        };

      case FETCH_PRODUCTS_FAILURE:
        // The request failed. It's done. So set loading to "false".
        // Save the error, so we can display it somewhere.
        // Since it failed, we don't have items to display anymore, so set `items` empty.
        //
        // This is all up to you and your app though:
        // maybe you want to keep the items around!
        // Do whatever seems right for your use case.
        return {
          ...state,
          loading: false,
          error: action.payload.error,
          items: []
        };
        default:
          return state;
      }
}
export default rootReducer;