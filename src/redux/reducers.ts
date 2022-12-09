import { combineReducers } from "@reduxjs/toolkit";

import {countriesReducer} from "./reducers/countries";
import { countryReducer } from "./reducers/countrySlice";
import { favReducer } from "./reducers/favSlice";

 export const rootReducer = combineReducers({
  countriesReducer,
  countryReducer,
  favReducer,
});