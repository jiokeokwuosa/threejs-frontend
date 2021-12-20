import axios from "axios";
const LocalURL = "http://localhost:5000/api/v1/starShip/";
const LiveURL = "https://www.swapi.tech/api/starships/"

/* eslint-disable import/no-anonymous-default-export */
export default {
  headers(fileupload = false) {
    const token = localStorage.getItem("token");

    let header = {};
  
    if (fileupload) {
      header["Content-type"] = "multipart/form-data";
      header["Accept"] = "application/json";
    } else {
      header["Content-type"] = "application/json";
      header["Accept"] = "application/json";
      header["Access-Control-Allow-Origin"] = "*";
      
    }
    if (token && token !== undefined) {
      header["Authorization"]='Bearer ' + token
    }
    return header;
  },

  getOnlineStarShips() {
    return axios({
      method: "get",
      url: LiveURL,
      headers: this.headers()
    });
  },
  getLocalStarShips() {
    return axios({
      method: "get",
      url: LocalURL,
      headers: this.headers()
    });
  },
  storeStarShips(data) {
    return axios({
      method: "post",
      url: LocalURL,
      headers: this.headers(),
      data
    });
  },
  updateStarShipCount(id) {
    return axios({
      method: "patch",
      url: `${LocalURL}/${id}`,
      headers: this.headers()    
    });
  },
  
};
