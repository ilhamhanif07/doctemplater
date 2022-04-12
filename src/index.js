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
ReactDOM.render(
  <HashRouter>
    <RecoilRoot>
      <ThemeProvider>
        <GlobalCss />
        <App />
      </ThemeProvider>
    </RecoilRoot>
  </HashRouter>,
  document.getElementById("root")
);
