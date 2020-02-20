import { combineReducers } from "redux";
import gameShop from "./gameShopReducer";
import search from "./searchReducer";

const rootReducers = combineReducers({
  gameShop,
  search
});

export default rootReducers;
