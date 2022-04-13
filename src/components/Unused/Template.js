import React, { useState } from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Footer from "./Footer";
import MainBox from "./MainBox";
import SectionContainer from "./SectionContainer";
import SideBar from "../Navigation/SideBar";
import Home from "../../pages/Home/Home";

export default function Template() {
	return (
		<>
			<MainBox>
				<SideBar />
				<Box
					sx={{
						backgroundColor: "white",
						flexGrow: 1,
						height: "100vh",
						overflow: "auto",
					}}>

					<Toolbar />

					<SectionContainer>
						<Home />
					</SectionContainer>

					<Footer sx={{ pt: 4 }} style={{alignItems: 'end'}} />

				</Box>
			</MainBox>
		</>
		
	);
}
