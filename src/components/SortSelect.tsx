import {
	alpha,
	Box,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	SelectChangeEvent,
	styled,
} from "@mui/material";
import React from "react";

import { useAppDispatch } from "../redux/hooks";
import {
	sortByName,
	sortByRegion,
	sortByPopulation,
} from "../redux/reducers/countries";

const SortSelect = () => {
	const dispatch = useAppDispatch();
	const [countriesSort, setCountriesSort] = React.useState("");

	const handleChange = (event: SelectChangeEvent) => {
		if (event.target.value === "name") {
			dispatch(sortByName());
		} else if (event.target.value === "region") {
			dispatch(sortByRegion());
		} else {
			dispatch(sortByPopulation());
		}
		setCountriesSort(event.target.value as string);
	};

	const SelectWrapper = styled("div")(({ theme }) => ({
		padding: "3",
		position: "relative",
		borderRadius: theme.shape.borderRadius,
		backgroundColor: alpha(theme.palette.common.white, 0.15),
		"&:hover": {
			backgroundColor: alpha(theme.palette.common.white, 0.25),
		},
		marginLeft: 0,
		width: "100%",
		[theme.breakpoints.up("sm")]: {
			marginLeft: theme.spacing(1),
			width: "auto",
		},
	}));

	const SelectLableWrapper = styled("div")(({ theme }) => ({
		padding: theme.spacing(0, 2),
		height: "100%",
		position: "absolute",
		pointerEvents: "inherit",
		display: "inline",
		alignItems: "center",
		justifyContent: "center",
	}));

	const styledSelect = {
		m: 0,
		minWidth: 180,
		backgroundColor: "inherit",
		color: "whitesmoke",
		"&.MuiInputLabel-root": {
			color: "rgb(248 242 242 / 60%)",
		},
		"&.MuiInput-root": {
			border: "none",
		},
		"&.MuiInput-input": {
			padding: "5px",
			minWidth: "10px",
			border: "none",
		},
		"&.MuiSelect-root": {
			minWidth: "15px",
			color: "rgb(248 242 242 / 60%)",
			"&:before": {
				border: "none",
			},
			"&:after": {
				border: "none",
			},
			"&:hover": {
				border: "rgb(248 242 242 / 60%)",
			},
		},
		"&.MuiSelect-icon": {
			color: "white",
		},
		"&.MuiInputBase-input": {
			border: "none",
			color: "white",
		},
		"&.MuiInputBase-root": {
			color: "inherit",
			borderColor: "inherit",
			TransitionEvent: "none",
			"&:before": {
				border: "none",
			},
			"&:after": {
				border: "none",
			},
			"&:hover": {
				border: "none",
			},
		},
	};

	return (
		<SelectWrapper>
			<Box minWidth={140} minHeight={39} sx={{ color: "whitesmoke" }}>
				<FormControl margin="dense">
					<SelectLableWrapper>
						<InputLabel color="info" id="Countries Sorting" sx={styledSelect}>
							Sort countries by...
						</InputLabel>
					</SelectLableWrapper>
					<Select
						margin="dense"
						variant="standard"
						displayEmpty
						sx={styledSelect}
						labelId="Countries Sorting"
						id="Countries Sorting"
						value={countriesSort}
						label="Sort countries by..."
						onChange={handleChange}
					>
						<MenuItem value="name">Name</MenuItem>
						<MenuItem value="region">Region</MenuItem>
						<MenuItem value="population">Population</MenuItem>
					</Select>
				</FormControl>
			</Box>
		</SelectWrapper>
	);
};

export default SortSelect;
