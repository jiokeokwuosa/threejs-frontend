import { combineReducers } from "redux";
import starShipReducer from "./starShipReducer";
import errorReducer from "./errorReducer";

export default combineReducers({
  starShip: starShipReducer,
  error: errorReducer,
});
