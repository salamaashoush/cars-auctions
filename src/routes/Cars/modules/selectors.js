import { createSelector } from "reselect";
import { sortCars, searchCars } from "Utils";

const getCars = state => state.cars.visableCars;
const getAllCars = state => state.cars.itemsRepositry;
const getSortBy = state => state.cars.sortBy;
const getSearchString = state => state.cars.searchString;
const getLocale = state => state.cars.locale;

export const getSortedCars = createSelector(
  [getSortBy, getCars],
  (sort, cars) => sortCars(sort.by, sort.assc)(cars)
);

export const getSearhResult = createSelector(
  [getLocale, getSearchString, getAllCars],
  (locale, query, allCars) => searchCars(locale, query, allCars)
);
