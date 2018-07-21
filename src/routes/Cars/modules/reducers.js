import intialState from "./intialState";
import * as actionTypes from "./actionTypes";
import { NUM_OF_VISABLE_CARS } from "../../../constants";
import { getSearhResult } from "./selectors";

const rootReducer = (state = intialState, action) => {
  switch (action.type) {
    case actionTypes.REQUEST_CARS:
      return {
        ...state,
        isFetching: !!action.payload
      };
    case actionTypes.SET_VISABLE_CARS:
      return {
        ...state,
        visableCars: action.payload
      };

    case actionTypes.SET_SORT_BY:
      return {
        ...state,
        sortBy: action.payload
      };
    case actionTypes.SET_SEARCH_STRING: {
      const items = getSearhResult({
        cars: {
          searchString: action.payload.searchString,
          locale: action.payload.locale,
          itemsRepositry: state.itemsRepositry
        }
      });
      return {
        ...state,
        searchString: action.payload.searchString,
        visableCars: items.splice(0, 20),
        items
      };
    }

    case actionTypes.RECEIVE_CARS:
      return {
        ...state,
        isFetching: false,
        itemsRepositry: action.payload,
        items: action.payload,
        visableCars: action.payload.splice(0, NUM_OF_VISABLE_CARS)
      };
    default:
      return state;
  }
};
export default rootReducer;
