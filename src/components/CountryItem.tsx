import { Favorite, FavoriteBorder } from "@mui/icons-material";
import {
	Grid,
	Card,
	CardActionArea,
	CardMedia,
	CardContent,
	Typography,
	CardActions,
	Button,
} from "@mui/material";
import { Link } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { addToFav, removeFromFav } from "../redux/reducers/favSlice";
import { Country } from "../types/country";

interface CountryItemProps {
	data: Country;
}

export const CountryItem = ({ data }: CountryItemProps) => {
	const dispatch = useAppDispatch();
	const listFavorite = useAppSelector((state) => state.favReducer);

	const isFavorite = !!listFavorite.countries.find(
		(item) => item.name.official === data.name.official
	);

	const favoriteHandler = () => {
		if (isFavorite) {
			dispatch(removeFromFav(data.name.official));
		} else {
			dispatch(addToFav(data));
		}
	};

	return (
		<Grid item xs={12} sm={12} md={4} lg={4} key={data.name.official}>
			<Card sx={{ maxWidth: 345 }}>
				<CardActionArea>
					<CardMedia
						component="img"
						height="194"
						image={data.flags.png}
						alt="country's flag"
					/>
					<CardContent>
						<Typography gutterBottom variant="h6" component="div">
							{data.name.official}
						</Typography>
						<Typography variant="inherit" color="text.secondary">
							<b>Capital: </b>
							{`${data.capital}`}
						</Typography>
						<Typography variant="inherit" color="text.secondary">
							<b>Region: </b>
							{`${data.region}`}
						</Typography>
						<Typography variant="inherit" color="text.secondary">
							<b>Population: </b>
							{`${data.population}`}
						</Typography>
					</CardContent>
				</CardActionArea>
				<CardActions>
					<Button size="large" color="inherit">
						<Link
							style={{ color: "black" }}
							to={`/countries/${data.name.official}`}
						>
							Visit
						</Link>
					</Button>
					<Button onClick={favoriteHandler}>
						{isFavorite ? <Favorite /> : <FavoriteBorder />}
					</Button>
				</CardActions>
			</Card>
		</Grid>
	);
};
