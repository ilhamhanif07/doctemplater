import React from "react";
import { Box, Toolbar } from "@mui/material";
import SectionContainer from './SectionContainer';
import Home from '../../pages/Home/Home';
import Footer from "./Footer";

function SectionBox({ children }) {
	return (
		<>
			<Box
				// component="main"
				sx={{
					backgroundColor: "grey",
					flexGrow: 1,
					height: "100vh",
					overflow: "auto",
				}}>

				<Toolbar />

				<SectionContainer>
					{children}
				</SectionContainer>

				<Footer sx={{ pt: 4 }} />
			</Box>
		</>
	);
}

export default SectionBox;
