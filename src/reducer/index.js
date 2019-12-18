import { ADD_ARTICLE } from "../constant/action-types";
import { BREAD_CRUMB} from '../constant/action-types';
const initalState={
    articles:[],
    remoteArticles:[],
    crumb:['shopping','home'],
    count:''
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
        default:
          return state;
      }
    // if(action.type==ADD_ARTICLE){
    //     return Object.assign({},state,{
    //         articles:state.articles.concat(action.payload)
    //     })
    // }
    // if(action.type=="DATA_LOADED"){
    //     return Object.assign({},state,{
    //         remoteArticles:state.remoteArticles.concat(action.payload)
    //     })
    // }
    // if(action.type=act.shopping){
    //     return{
    //         breadCrumb:'shopping'
    //     }
    // }
    // return state;
}
export default rootReducer;