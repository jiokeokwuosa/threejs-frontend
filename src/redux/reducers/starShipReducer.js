import {
  INPUT_CHANGE,
  GET_STARSHIP_SUCCESS,
  UPDATE_STARSHIP_COUNT_SUCCESS
} from "../actions/types";

const initialState = {
  starShips: [],
  activeStarShip:'jghj'
};

const starShipReducer = (state = initialState, action) => {
  switch (action.type) {
    case INPUT_CHANGE:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case GET_STARSHIP_SUCCESS:
      return {
        ...state,
        starShips: action.payload
      };
    
    case UPDATE_STARSHIP_COUNT_SUCCESS:
      let allStarShips = state.starShips;
      allStarShips[action.payload.itemIndex] = action.payload.newData
      state.starShips = [...allStarShips]
      return {
        ...state,
      };
   
    default:
      return state;
  }
};
export default starShipReducer;
