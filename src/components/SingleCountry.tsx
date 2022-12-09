import {
	Grid,
	Card,
	CardActionArea,
	CardMedia,
	CardContent,
	Typography,
	CardActions,
	Button,
	Box,
} from "@mui/material";
import { Container } from "@mui/system";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchSingleCountry } from "../redux/reducers/countrySlice";

const SingleCountry = () => {
	const { name } = useParams();

	const { country } = useAppSelector((state) => state.countryReducer);

	const item = country[0];

	const dispatch = useAppDispatch();
	useEffect(() => {
		if (name) {
			dispatch(fetchSingleCountry(name));
		}
	}, [dispatch, name]);

	if (item === undefined) {
		return <h1>Country Loading</h1>;
	}
	return (
		<Container fixed>
			<Box
				component="span"
				sx={{
					display: "inline-block",
					alignContent: "center",
					mx: "5px",
					transform: "scale(1)",
				}}
			>
				<h1>COUNTRY PAGE</h1>
				<Grid item xs={12} sm={12} md={4} lg={4} key={item.name.official}>
					<Card sx={{ maxWidth: 500 }}>
						<CardActionArea>
							<CardMedia
								component="img"
								height="294"
								image={item.flags.png}
								alt="country's flag"
							/>
							<CardContent>
								<Typography gutterBottom variant="h4" component="div">
									{item.name.official}
								</Typography>
								<Typography variant="inherit" color="text.secondary">
									<b>Capital: </b>
									{`${item.capital}`}
								</Typography>
								<Typography variant="inherit" color="text.secondary">
									<b>Region: </b>
									{`${item.region}`}
								</Typography>
								<Typography variant="inherit" color="text.secondary">
									<b>Population: </b>
									{`${item.population}`}
								</Typography>
								<Typography variant="inherit" color="text.secondary">
									<b>Languages: </b>
									{item.languages && Object.values(item.languages)?.join(",  ")}
								</Typography>
								<Typography variant="inherit" color="text.secondary">
									<b>Currencies: </b>
									{item.currencies &&
										Object.values(item.currencies)?.map((currency) => (
											<span key={currency.name}>
												{currency.name} ({currency.symbol}){" "}
												{item.currencies && Object.keys(item.currencies)}
											</span>
										))}
								</Typography>
							</CardContent>
						</CardActionArea>
						<CardActions>
							<Button size="medium" color="inherit">
								<Link style={{ color: "black" }} to={`/`}>
									Back
								</Link>
							</Button>
						</CardActions>
					</Card>
				</Grid>
			</Box>
		</Container>
	);
};

export default SingleCountry;
