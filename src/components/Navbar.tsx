import {
	AppBar,
	Badge,
	Box,
	Button,
	IconButton,
	Toolbar,
	Typography,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import { useAppSelector } from "../redux/hooks";
import SearchIn from "./SearchIn";
import SortSelect from "./SortSelect";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
	const countFavCountries = useAppSelector((state) => state.favReducer);
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar>
					<SearchIn />
					<SortSelect />
					<Typography
						variant="h6"
						noWrap
						component="div"
						sx={{ ml: 16, flexGrow: 1, display: { xs: "none", sm: "block" } }}
					>
						<b> COUNTRIES </b>
					</Typography>
					<Button size="small" color="inherit">
						<Link
							style={{ textDecoration: "none", color: "whitesmoke" }}
							to={`/`}
						>
							BACK
						</Link>
					</Button>
					<IconButton
						LinkComponent={NavLink}
						{...{ to: "/countries/favorite" }}
						size="medium"
						aria-label={`show ${countFavCountries} `}
					>
						<Badge
							badgeContent={countFavCountries.countries.length}
							color="primary"
						>
							<FavoriteBorderIcon />
						</Badge>
					</IconButton>
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default Navbar;
