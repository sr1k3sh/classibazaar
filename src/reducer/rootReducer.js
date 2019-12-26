import { combineReducers } from "redux";
import products from "./../reducer/ProductReducer";
import featured from './../reducer/FeaturedReducer'
import popular from './../reducer/PopularDealReducer'
export default combineReducers({
    products,featured,popular
});
