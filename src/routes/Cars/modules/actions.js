import Api from "Api";
import HttpClient from "Utils/HttpClient";
import * as actionTypes from "./actionTypes";

export const requestCars = payload => ({
  type: actionTypes.REQUEST_CARS,
  payload
});

export const receiveCars = payload => ({
  type: actionTypes.RECEIVE_CARS,
  payload
});

export const setSearchString = payload => ({
  type: actionTypes.SET_SEARCH_STRING,
  payload
});

export const setVisableCars = payload => ({
  type: actionTypes.SET_VISABLE_CARS,
  payload
});

export const setFilters = payload => ({
  type: actionTypes.SET_FILTERS,
  payload
});

export const setSortBy = payload => ({
  type: actionTypes.SET_SORT_BY,
  payload
});
let count = 0;
export const fetchCars = payload => (dispatch, getState) => {
  const {
    cars: { itemsRepositry }
  } = getState();

  if (payload || !itemsRepositry.length > 0) {
    dispatch(requestCars(payload));

    return HttpClient.get(`${Api.fetchCars}?${Math.random()}`)
      .then(response => {
        dispatch(receiveCars(response.data.Cars));
        setInterval(() => {
          count += 1;
          if (count >= response.data.RefreshInterval) {
            count = 0;
            dispatch(fetchCars());
          }
        }, 1000);
      })
      .catch(error => console.error(error));
  }
  return undefined;
};
