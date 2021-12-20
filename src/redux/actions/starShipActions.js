import API from "../../assets/js/api";
import { returnErrors } from "./errorActions";

import {
  INPUT_CHANGE,
  GET_STARSHIP_SUCCESS,
  GET_STARSHIP_FAILURE,
  UPDATE_STARSHIP_COUNT_SUCCESS,
  UPDATE_STARSHIP_COUNT_FAILURE
} from "./types";

export const inputChange = (name, value) => async (dispatch) => {
  try {
    dispatch({
      type: INPUT_CHANGE,
      payload: {
        name: name,
        value: value,
      },
    });
  } catch (error) {
    
  }
};

export const getStarShips = () => async (dispatch) => {
  try {
    document.body.classList.add("loading-indicator");
    let starShips=[];
    let result = await API.getLocalStarShips();
    if(result){
      starShips = result.data.data.StarShips
    }   
    if(starShips.length<1){
      console.log('am here minus')
      result = await API.getOnlineStarShips();
      starShips = result.data.results.filter(item=>{
        return item.name.indexOf('wing') !==-1
      })
      result = API.storeStarShips(starShips)
      starShips = result.data.data.results
    }    
    dispatch({
      type: GET_STARSHIP_SUCCESS,
      payload: starShips,
    });
    document.body.classList.remove("loading-indicator");
  } catch (err) {
    console.log(err)
    document.body.classList.remove("loading-indicator");
    dispatch(
      returnErrors(
        err.response.data.errors
          ? err.response.data.errors
          : err.response.data.error,
        err.response.data.status,
        "GET_STARSHIP_FAILURE"
      )
    );
    dispatch({
      type: GET_STARSHIP_FAILURE,
    });
  }
};

export const updateStarShipCount = (id, index) => async (dispatch) => {
  try {
    const result = await API.updateStarShipCount(id);  
    dispatch({
      type: UPDATE_STARSHIP_COUNT_SUCCESS,
      payload:{
        itemIndex:index,
        newData: result.data.data.StarShipItem
      }      
    });
    document.body.classList.remove("loading-indicator");
  } catch (err) {
    document.body.classList.remove("loading-indicator");
    dispatch(
      returnErrors(
        err.response.data.errors
          ? err.response.data.errors
          : err.response.data.error,
        err.response.data.status,
        "UPDATE_STARSHIP_COUNT_FAILURE"
      )
    );
    dispatch({
      type: UPDATE_STARSHIP_COUNT_FAILURE,
    });
  }
};
