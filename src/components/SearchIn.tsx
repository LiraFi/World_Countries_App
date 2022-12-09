import React, { useState } from "react";
import { alpha, InputBase, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import { useAppDispatch } from "../redux/hooks";
import { searchByInput } from "../redux/reducers/countries";

const Search = styled("div")(({ theme }) => ({
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

const SearchIconWrapper = styled("div")(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: "100%",
	position: "absolute",
	pointerEvents: "none",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: "inherit",
	"& .MuiInputBase-input": {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create("width"),
		width: "100%",
		[theme.breakpoints.up("sm")]: {
			width: "18ch",
			"&:focus": {
				width: "22ch",
			},
		},
	},
}));

const SearchIn = () => {
	const [input, setInput] = useState("");
	const dispatch = useAppDispatch();
	return (
		<Search>
			<SearchIconWrapper>
				<SearchIcon />
			</SearchIconWrapper>
			<StyledInputBase
				type="text"
				placeholder="Search for a country..."
				value={input}
				onChange={(e) => {
					setInput(e.target.value);
					dispatch(searchByInput(input));
				}}
				inputProps={{ "aria-label": "search" }}
			/>
		</Search>
	);
};

export default React.memo(SearchIn);
