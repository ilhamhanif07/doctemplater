import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import {
	ApolloProvider,
	RecoilRoot,
	ThemeProvider,
	GlobalCss,
} from "@mostrans/web-components/providers";
import { HashRouter } from "react-router-dom";
import './components/GeneralComponent/GeneralCSS.css'

const link = "http://localhost:5013/graphql"
ReactDOM.render(
	<HashRouter>
		<RecoilRoot>
			<ThemeProvider>
				<GlobalCss />
				<ApolloProvider url={link}>
					<App />
				</ApolloProvider>
			</ThemeProvider>
		</RecoilRoot>
	</HashRouter>,
	document.getElementById("root")
);
