import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Country } from "../../types/country";



export type FavState = {
  countries: Country []
};

const favStored = localStorage.getItem("countries") !== null ? JSON.parse(localStorage.getItem("countries")!) : [];

const initialState: FavState = {
  countries: favStored,
};

const favSlice = createSlice({
  name: "favSlice",
  initialState, 
  reducers: {
    addToFav: (state, action: PayloadAction<Country>) =>{
      state.countries.push(action.payload);
      localStorage.setItem("countries", JSON.stringify(state.countries.map(item=>item)));
    },
    removeFromFav: (state, action: PayloadAction<string>) =>{
      state.countries = state.countries.filter(
        (item) => item.name.official !== action.payload);
      localStorage.setItem("countries", JSON.stringify(state.countries.map(item=>item)));
    },
  },
});

export const favReducer = favSlice.reducer;
export const {addToFav, removeFromFav} = favSlice.actions