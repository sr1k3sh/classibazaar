import {ADD_ARTICLE} from './../constant/action-types';
const forbiddenWords=['spam','money']
export function forbiddenWordsMiddleware({dispatch}){
    return function (next){
        return function(action){
            if(action.type===ADD_ARTICLE){
                const foundWord = forbiddenWords.filter(
                    word=>action.payload.title.includes(word)
                );
                if(foundWord.length){
                    return dispatch({type:'found_bad_word'});
                }
            }
            return next(action);
        }
    }
}