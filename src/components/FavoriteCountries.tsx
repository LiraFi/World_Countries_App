import { useAppSelector } from "../redux/hooks";
import CountryList from "./CountryList";

export const FavoriteCountries = () => {
	const { countries } = useAppSelector((state) => state.favReducer);
	return <CountryList countriesRender={countries} />;
};
