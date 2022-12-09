import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { CountryState } from "../../types/country";

const initialState: CountryState = {
	countries: [],
	searchedCountries: [],
	loading: false,
	error: false,
};

export const fetchCountries = createAsyncThunk("fetchCountries", async () => {
	const jsonData = await fetch(
		"https://restcountries.com/v3.1/all?fields=name,capital,currencies,languages,flags,region,population"
	);
	const countries = await jsonData.json();
	return countries;
});

const countriesSlice = createSlice({
	name: "countriesSlice",
	initialState,
	reducers: {
		sortByName: (state) => {
			state.countries.sort((a, b) =>
				a.name.official.toLowerCase() > b.name.official.toLowerCase() ? 1 : -1
			);
		},
		sortByRegion: (state) => {
				state.countries.sort((a, b) =>
					a.region.toLowerCase() > b.region.toLowerCase() ? 1 : -1
				);
		},
		sortByPopulation: (state) => {
			state.countries.sort((a, b) =>
				b.population - a.population
			);
	},
		searchByInput: (state, action: PayloadAction<string>) => {
			let input = action.payload
				state.searchedCountries = state.countries.filter((country) => {
				return country.name.official.toLowerCase().includes(input.toLowerCase());
			});
		},
	},
	extraReducers: (build) => {
		build.addCase(fetchCountries.fulfilled, (state, action) => {
			state.countries = action.payload;
			state.error = false;
			state.loading = false;
		});
		build.addCase(fetchCountries.rejected, (state, action) => {
			state.countries = [];
			state.error = true;
		});
	},
});

export const countriesReducer = countriesSlice.reducer;
export const { sortByName, sortByRegion, sortByPopulation, searchByInput } = countriesSlice.actions;
