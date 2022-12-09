import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { SingleCountryState } from "../../types/country";

const initialState: SingleCountryState = {
	country: [],
	loading: false,
	error: false,
};

export const fetchSingleCountry = createAsyncThunk("fetchSingleCountry", async (name: string) => {
	const jsonData = await fetch( 
		`https://restcountries.com/v3.1/name/${name}?fullText=true`
	);
	const country = await jsonData.json();
	return country;
});

const countrySlice = createSlice({
	name: "countrySlice",
	initialState,
	reducers: {},
	extraReducers: (build) => {
		build.addCase(fetchSingleCountry.fulfilled, (state, action) => {
			state.country = action.payload;
			state.error = false;
			state.loading = false;
		});
		build.addCase(fetchSingleCountry.rejected, (state, action) => {
			state.country = [];
			state.error = true;
		});
		build.addCase(fetchSingleCountry.pending, (state, action) => {
			state.country = [];
			state.loading = true;
			state.error = false;
		});
	},
});

export const countryReducer = countrySlice.reducer;