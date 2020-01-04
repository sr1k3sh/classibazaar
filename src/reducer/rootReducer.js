import { combineReducers } from "redux";
import products from "./../reducer/ProductReducer";
import featured from './../reducer/FeaturedReducer'
import popular from './../reducer/PopularDealReducer'
import menus from './../reducer/MenuReducer'
import cities from './../reducer/CityReducer'
import total_products from './../reducer/TotalProductReducer'
import logged from './../reducer/loginReducer'
import details from './../reducer/DetailPageReducer'
export default combineReducers({
    products,featured,popular,menus,cities,total_products,logged,details
});
