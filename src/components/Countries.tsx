import { useAppSelector } from "../redux/hooks";
import CountryList from "./CountryList";

export default function Countries() {
	const { countries, searchedCountries } = useAppSelector(
		(state) => state.countriesReducer
	);

	const countriesRender =
		searchedCountries.length > 0 ? searchedCountries : countries;

	return <CountryList countriesRender={countriesRender} />;
}
