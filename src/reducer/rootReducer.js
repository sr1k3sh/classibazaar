import { combineReducers } from "redux";
import products from "./../reducer/ProductReducer";
import featured from './../reducer/FeaturedReducer'
import popular from './../reducer/PopularDealReducer'
import menus from './../reducer/MenuReducer'
import cities from './../reducer/CityReducer'
import total_products from './../reducer/TotalProductReducer'
export default combineReducers({
    products,featured,popular,menus,cities,total_products
});
