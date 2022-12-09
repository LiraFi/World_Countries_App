import { Grid, Pagination, Stack, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";

import { Country } from "../types/country";
import { CountryItem } from "./CountryItem";

interface CountryListProps {
	countriesRender: Country[];
}

const CountryList = ({ countriesRender }: CountryListProps) => {
	const [page, setPage] = useState(1);
	const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
		event.preventDefault();
		try {
			setPage(value);
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<Container fixed>
			<Grid
				container
				spacing={3}
				sx={{
					background: "#cceefc",
				}}
			>
				{countriesRender.slice(page * 6 - 6, page * 6).map((item) => (
					<CountryItem key={item.name.official} data={item} />
				))}
			</Grid>
			<Stack spacing={2}>
				<Typography>Page: {page}</Typography>
				<Pagination
					count={Math.ceil(countriesRender.length / 6)}
					page={page}
					onChange={handleChange}
				/>
			</Stack>
		</Container>
	);
};

export default CountryList;
