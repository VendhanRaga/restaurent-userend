import { combineReducers } from "redux";
import cartReducer from "./cart/cartslice";
import productReducer from "./menu/producSlice";
import addressReducer from "./userInfo/addressslice";

const rootReducer = combineReducers(
    {
        cart: cartReducer,
        products: productReducer,
        address: addressReducer
        
    }
);

export default rootReducer;