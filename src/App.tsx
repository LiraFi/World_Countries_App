import { useEffect } from "react";
import { Box } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import { useAppDispatch } from "./redux/hooks";
import { fetchCountries } from "./redux/reducers/countries";
import SingleCountry from "./components/SingleCountry";
import { FavoriteCountries } from "./components/FavoriteCountries";
import Countries from "./components/Countries";

function App() {
	/*const input = useState*/
	//const countries = useAppSelector((state) => state.countriesReducer);
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(fetchCountries());
	}, [dispatch]);
	return (
		<Box>
			<div className="App">
				<BrowserRouter>
					<Navbar />
					<br />
					<br />
					<div className="container">
						<Routes>
							<Route path="/" element={<Countries />} />
							<Route path="/countries/:name" element={<SingleCountry />} />
							<Route
								path="/countries/favorite"
								element={<FavoriteCountries />}
							/>
						</Routes>
					</div>
				</BrowserRouter>
			</div>
		</Box>
	);
}

export default App;
